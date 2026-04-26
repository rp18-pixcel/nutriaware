# NutriAware Change Log and Implementation Plan

Date: 2026-04-26

## 1) Request Summary
1. Add/fix a **Calculate** button in the **Daily Intake Calculator** section and cross-check calculation logic.
2. Add **login functionality** and connect the website with the existing app.
3. Add a new section explaining disadvantages of low intake of **proteins**, **vitamins**, and **water**, with practical solutions.
4. Suggest and implement additional improvements/bug fixes discovered in this process.
5. Keep a single `changes.md` file documenting planning, decisions, implementation, and verification.

## 2) Current Codebase Findings
- The project is a static frontend (`index.html`, `script.js`, `style.css`) with no backend code.
- A calculator submit button is already present in `#intakeForm`, but the request asks to ensure/fix button behavior and logic.
- Existing intake logic uses Mifflin-St Jeor style BMR and macro split percentages.
- No login/auth UI or API integration code currently exists.

## 3) Assumptions and Constraints
- Because the repository has no backend/auth service, auth should be implemented with a free external API and a frontend route guard.
- As requested, login must happen **before** users access the main website.
- We use dedicated auth pages (`login.html`, `signup.html`) instead of embedding auth in the main page.
- Nutritional guidance content will remain educational and non-diagnostic.

## 4) Plan Per Change

### Change A: Calculator Button + Logic Validation
- [x] Ensure calculator has an explicit and discoverable calculate action with proper accessibility attributes.
- [x] Refactor calculator logic into clearly testable helper functions.
- [x] Validate edge cases and numeric ranges robustly.
- [x] Cross-check formulas:
  - BMR (Mifflin-St Jeor baseline).
  - Activity multiplier.
  - Goal adjustment.
  - Macro conversion from calories to grams.
  - Hydration estimate.
- [x] Improve result details (BMR, TDEE, final target calories) for transparency.

### Change B: Login Functionality Connected to Existing App
- [x] Replace in-page login with dedicated auth pages: `login.html` and `signup.html`.
- [x] Add shared auth module `auth.js`.
- [x] Implement signup and login via free API (`https://api.escuelajs.co/api/v1`).
- [x] Persist authenticated session in `localStorage`.
- [x] Add mandatory route guard: unauthenticated users on `index.html` are redirected to `login.html`.
- [x] Add logout controls on desktop and mobile navigation.

### Change C: Deficiency Risks + Solutions Section
- [x] Add a dedicated section for:
  - Low protein intake risks and practical fixes.
  - Low vitamin intake risks and practical fixes.
  - Low water intake risks and practical fixes.
- [x] Use visual cards and action-oriented suggestions.
- [x] Keep language clear and educational.

### Change D: Additional Improvements/Bug Fixes
- [x] Add navigation link for the new deficiency section.
- [x] Improve calculator validation and guidance transparency.
- [x] Remove conflicting old login UI/logic to avoid duplicate auth flows.

## 5) Verification Plan
- [x] Manual browser checks for each interactive module changed.
- [x] Validate calculator with sample inputs and expected behavior.
- [x] Validate login state transitions (logged out -> login -> logged in -> logout).
- [x] Confirm no JavaScript runtime errors in changed paths.

## 6) Implementation Log
- Added `#deficiency-care` section in `index.html` with risks and practical actions for low protein, vitamins, and water intake.
- Updated calculator button label to `Calculate Daily Intake` and added explicit ID `calculateIntakeBtn`.
- Enhanced calculator logic in `script.js`:
  - Added `validateIntakeInput()`.
  - Added BMR and TDEE visibility in result cards.
  - Switched goal adjustments from fixed `±300` to percent-based adjustments.
  - Added calorie floor guard by gender for safer baseline guidance.
  - Added protein floor (`0.8 g/kg`) and activity-influenced hydration.
- Implemented dedicated authentication flow:
  - Created `login.html` and `signup.html`.
  - Created `auth.js` with session helpers, route guard, signup, login, and logout.
  - Integrated free auth API: EscuelaJS (`/users/` and `/auth/login`).
  - Added authenticated user display and logout buttons in `index.html` header.
- Removed old in-page login section and removed obsolete login code from `script.js`.

## 7) Verification Notes
- `node --check script.js` passed.
- `get_errors` check reports no errors in `index.html`, `script.js`, `style.css`, and `changes.md`.
- Local HTTP verification passed with `curl -I` returning `HTTP/1.0 200 OK`.

## 8) Follow-Up Fix: Login Page Not Loading Visually

### Issue Observed
- Login/sign-up pages appeared blank or not loading in some sessions.

### Root Cause
- Auth page sections used the `.reveal-on-scroll` class, which defaults to `opacity: 0` in `style.css`.
- If reveal activation does not run or is delayed, these sections can remain hidden and look like a load failure.

### Fix Applied
- Added robust visual activation in `auth.js` (`activateAuthPageVisuals()`) to force `.reveal-on-scroll` elements visible on auth pages.
- Removed `.reveal-on-scroll` class from auth page cards in `login.html` and `signup.html` so login UI is visible immediately without animation dependency.
- Minor design polish: improved authenticated user chip in `index.html` (`truncate` + fallback text).

### Follow-Up Verification
- Rechecked `auth.js` syntax.
- Rechecked diagnostics for changed files.
- Confirmed `index.html`, `login.html`, and `signup.html` return `HTTP 200` on local server.

## 9) Auth System Migration: Local Storage Only

### Request
- Remove API dependency for login/signup and use browser local storage only.

### Changes Applied
- Updated `auth.js`:
  - Removed external API usage (`/users/`, `/auth/login`).
  - Added local user store key: `nutriaware-auth-users-v1`.
  - Added user helpers: `getStoredUsers()`, `saveStoredUsers()`, `normalizeEmail()`.
  - Added local signup flow with duplicate-email prevention.
  - Added local login validation against stored users.
  - Kept route guard and logout behavior unchanged.
- Updated auth page copy:
  - `login.html` and `signup.html` now clearly state account data is saved in browser local storage.

### Notes
- Accounts are device/browser specific and will be lost if local storage is cleared.
- This mode is suitable for demos/prototypes, not production authentication.

## 10) Content Simplification: Remove Food Image Gallery

### Request
- Remove the `Food Image Gallery` section as it is not needed.

### Change Applied
- Deleted the entire `#food-gallery` section from `index.html` (title, description, and all five image cards).

### Verification
- `index.html` diagnostics show no errors.
- Local HTTP check for `index.html` returns `HTTP 200`.

## 11) CSS Visibility & Contrast Fixes

### Request
- Some buttons and section surfaces were blending with the page background and looked low-visibility.

### Changes Applied (`style.css`)
- Increased section surface contrast:
  - Strengthened `.section-tint-a::after` and `.section-tint-b::after` background opacity.
  - Added subtle borders to both tint overlays for clearer section separation.
- Improved outline/button contrast for key controls:
  - `#menuToggle`, `#logoutBtn`, `#mobileLogoutBtn`, `#resetHabits`, `.auth-top-link`
  - Added stronger white background, darker text, clearer border, and hover states.
- Removed obsolete gallery-related CSS selectors after gallery section removal:
  - `#food-gallery` image/hover/overflow rules.

### Verification
- Diagnostics report no errors in updated `style.css`, `index.html`, `login.html`, and `signup.html`.
- Local smoke checks for `/index.html`, `/login.html`, and `/signup.html` return `HTTP 200`.
