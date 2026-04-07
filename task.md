# Food Nutritional Awareness Website - Master Blueprint

## How To Use This File
- Mark every task with `[x]` only after it is fully done.
- Do not skip acceptance checks.
- Keep this file as the single source of truth for project status.
- Update completion status immediately after each implementation step.

## Project Objective
- Build a visually attractive, mobile-first food nutrition awareness website.
- Stack must be HTML, JavaScript, Tailwind CSS.
- Deliver educational content plus interactive tools for real user value.

## Definition Of Done (Global)
- [ ] All core sections implemented and responsive.
- [ ] All interactive modules functioning with valid input handling.
- [ ] Accessibility baseline met (keyboard, labels, contrast, semantics).
- [ ] No critical layout breaks on common mobile and desktop widths.
- [ ] Performance acceptable for a static website.
- [ ] Content reviewed for clarity and correctness.

## Phase 1 - Planning, Scope, And Product Rules
### 1.1 Product Foundation
- [x] Define project goal and audience.
- [x] Confirm mandatory stack: HTML + JavaScript + Tailwind CSS.
- [x] Identify major feature groups (education + calculators + trackers).
- [x] Lock MVP feature list.
- [x] Lock post-MVP feature list.

### 1.2 MVP Scope Lock
- [x] MVP includes hero, nutrition basics, food explorer, nutrient lookup, daily calculator, habit tracker.
- [x] MVP includes resources and disclaimer.
- [x] Post-MVP includes meal plate builder and advanced charts.

### 1.3 Product Constraints
- [x] Frontend only (no backend).
- [x] Use local JavaScript dataset for food nutrition.
- [x] Persist tracker state with LocalStorage.
- [x] Keep all copy readable for general users.

### 1.4 Acceptance Checks (Phase 1)
- [ ] Feature list approved.
- [ ] Priority order approved.
- [ ] Technical boundaries approved.

## Phase 2 - Project Structure And Setup
### 2.1 File And Folder Blueprint
- [x] Create index.html.
- [x] Create script.js.
- [x] Create optional style.css for minimal custom rules if needed.
- [x] Create assets folder.
- [x] Create assets/images folder.
- [x] Create assets/icons folder.
- [x] Create assets/data folder.

### 2.2 Tailwind Setup
- [x] Choose Tailwind integration method (CDN for fast setup or build process).
- [x] Add Tailwind to project.
- [x] Define design tokens with Tailwind utility strategy (colors, spacing, radius, shadows).
- [ ] Verify responsive utility classes are working.

### 2.3 Base HTML Skeleton
- [x] Add semantic page structure (header, main, section, footer).
- [x] Add accessible navigation landmarks.
- [x] Add section anchors for smooth navigation.

### 2.4 Acceptance Checks (Phase 2)
- [x] All starter files exist.
- [ ] Tailwind styles render correctly in browser.
- [ ] Semantic structure validated manually.

## Phase 3 - Design System And Visual Direction
### 3.1 Brand And Visual Language
- [x] Define color palette: primary, secondary, accent, neutral, success, warning.
- [x] Define typography scale for headings/body/captions.
- [x] Define spacing system for section padding and card gaps.
- [x] Define component radius and shadow style.

### 3.2 Layout Strategy
- [x] Create max-width container strategy.
- [x] Define section rhythm (vertical spacing consistency).
- [x] Define responsive breakpoints behavior for each section.

### 3.3 Signature Visual Elements
- [x] Design dynamic hero background treatment.
- [x] Add gradient or pattern accents to key sections.
- [x] Create visually distinct card variants (info, stats, interactive).
- [x] Add polished buttons and chip styles.

### 3.4 Motion Strategy
- [x] Add page-load reveal animation.
- [x] Add section entry animations.
- [x] Add hover transitions for cards and buttons.
- [x] Keep motion subtle and performance-friendly.

### 3.5 Acceptance Checks (Phase 3)
- [ ] UI feels visually cohesive and intentional.
- [ ] Mobile and desktop layout both polished.
- [ ] Motion effects do not hurt readability.

## Phase 4 - Core Page Sections (Static Content)
### 4.1 Header And Navigation
- [x] Build sticky or anchored top navigation.
- [x] Add links to all major sections.
- [x] Add mobile menu behavior if needed.

### 4.2 Hero Section
- [x] Add value proposition headline.
- [x] Add concise supporting copy.
- [x] Add two CTA buttons.
- [x] Add quick health goal badges/cards.

### 4.3 Nutrition Basics Section
- [x] Explain macronutrients: carbs, protein, fats.
- [x] Explain micronutrients: vitamins and minerals.
- [x] Explain hydration basics.
- [x] Add simple visual cues/icons per topic.

### 4.4 Food Label Guide Section
- [x] Explain serving size.
- [x] Explain calories per serving.
- [x] Explain sugar, sodium, saturated fat attention points.
- [x] Explain ingredient list interpretation.

### 4.5 Myth Vs Fact Section
- [x] Add at least 6 myth/fact cards.
- [x] Keep each myth concise and factual.
- [x] Ensure visual distinction between myth and fact.

### 4.6 Resources And Disclaimer
- [x] Add trusted external resources list.
- [x] Add educational-only disclaimer.
- [x] Add contact or feedback prompt.

### 4.7 Acceptance Checks (Phase 4)
- [ ] All static sections complete.
- [ ] Copy is clear and typo-free.
- [ ] Section links navigate correctly.

## Phase 5 - Interactive Module 1: Food Categories Explorer
### 5.1 UI Construction
- [x] Build category filter controls.
- [x] Build search input for food names.
- [x] Build result grid cards.

### 5.2 Logic Implementation
- [x] Implement category filtering.
- [x] Implement text search filtering.
- [x] Implement clear/reset controls.

### 5.3 Edge Cases
- [x] Show empty-state message when no items match.
- [x] Handle casing and partial word search.

### 5.4 Acceptance Checks (Module 1)
- [ ] Filtering and search work together.
- [ ] UI updates instantly and clearly.

## Phase 6 - Interactive Module 2: Nutrient Lookup Tool
### 6.1 Data Wiring
- [x] Load local nutrition dataset in script.js or separate data file.
- [x] Normalize field names for rendering.

### 6.2 UI Construction
- [x] Add search/select input.
- [x] Add nutrient detail panel/table.
- [x] Add default helper text before selection.

### 6.3 Logic Implementation
- [x] Find selected food item.
- [x] Render calories, protein, carbs, fats, fiber, sugar, sodium.
- [x] Handle missing values safely.

### 6.4 Acceptance Checks (Module 2)
- [ ] Lookup returns correct values for all dataset items.
- [ ] No JavaScript errors on invalid input.

## Phase 7 - Interactive Module 3: Daily Intake Calculator
### 7.1 UI Construction
- [x] Add fields for age, gender, activity level, goal.
- [x] Add calculate button.
- [x] Add results cards for calories, macros, hydration.

### 7.2 Logic Implementation
- [x] Implement calorie estimation formula.
- [x] Implement macro split logic.
- [x] Implement hydration estimate logic.
- [x] Format output values clearly.

### 7.3 Validation
- [x] Validate numeric ranges.
- [x] Prevent empty form submission.
- [x] Show clear error guidance.

### 7.4 Acceptance Checks (Module 3)
- [ ] Calculator returns consistent output for test inputs.
- [ ] Error states are user-friendly.

## Phase 8 - Interactive Module 4: Healthy Swap Generator
### 8.1 Content Setup
- [x] Build list of unhealthy to healthier swap pairs.
- [x] Ensure swaps are practical and realistic.

### 8.2 UI And Logic
- [x] Add generate swap button.
- [x] Randomly render one swap card.
- [x] Prevent repetitive immediate duplicates when possible.

### 8.3 Acceptance Checks (Module 4)
- [ ] Generator always returns valid pair.
- [ ] UI remains consistent after repeated clicks.

## Phase 9 - Interactive Module 5: Weekly Habit Tracker
### 9.1 UI Construction
- [x] Add checklist of weekly nutrition habits.
- [x] Add progress indicator.
- [x] Add reset tracker action.

### 9.2 Logic Implementation
- [x] Save checklist state to LocalStorage.
- [x] Restore state on page load.
- [x] Update progress percentage dynamically.

### 9.3 Acceptance Checks (Module 5)
- [ ] Checked items persist after refresh.
- [ ] Reset action clears state correctly.

## Phase 10 - Data Quality And Content Accuracy
### 10.1 Nutrition Dataset Quality
- [x] Include at least 25 common foods across categories.
- [x] Validate units (g, mg, kcal) consistency.
- [x] Validate all required nutrient fields.

### 10.2 Copy Quality
- [x] Use simple, non-technical language where possible.
- [x] Avoid medical claims.
- [x] Keep educational tone consistent.

### 10.3 Acceptance Checks (Phase 10)
- [ ] Dataset is complete for planned tools.
- [ ] Educational content is coherent and safe.

## Phase 11 - Accessibility And Inclusive UX
### 11.1 Semantic And Structure
- [x] Use proper heading hierarchy.
- [x] Use semantic HTML regions.
- [x] Provide descriptive text labels.

### 11.2 Keyboard Accessibility
- [x] Ensure all controls are reachable by keyboard.
- [x] Ensure visible focus states on all interactive elements.
- [x] Ensure mobile menu and dialogs are keyboard operable.

### 11.3 Visual Accessibility
- [ ] Verify contrast ratios for text and buttons.
- [ ] Avoid color-only meaning for critical information.

### 11.4 Acceptance Checks (Phase 11)
- [ ] Core workflows usable without mouse.
- [ ] No inaccessible control blocks key tasks.

## Phase 12 - Responsive QA And Cross-Device Testing
### 12.1 Mobile Tests
- [ ] Test small phones.
- [ ] Test medium phones.
- [ ] Confirm no horizontal overflow.

### 12.2 Tablet And Desktop Tests
- [ ] Test tablet breakpoint behavior.
- [ ] Test desktop wide layout balance.
- [ ] Confirm text line lengths remain readable.

### 12.3 Browser Sanity Tests
- [ ] Verify in at least two modern browsers.
- [ ] Confirm JavaScript features behave consistently.

### 12.4 Acceptance Checks (Phase 12)
- [ ] No critical responsive defects.
- [ ] All modules usable across tested screens.

## Phase 13 - Performance And Final Polish
### 13.1 Performance
- [ ] Minimize heavy images and unnecessary assets.
- [ ] Keep JavaScript efficient and modular.
- [ ] Avoid layout thrashing in animations.

### 13.2 UI Polish
- [ ] Align spacing and typographic rhythm.
- [ ] Refine microcopy and button labels.
- [ ] Ensure consistent icon and card styling.

### 13.3 Acceptance Checks (Phase 13)
- [ ] Site feels fast and smooth.
- [ ] Visual quality is production-ready.

## Phase 14 - Launch Readiness
### 14.1 Final Verification
- [ ] Verify every MVP feature works end-to-end.
- [ ] Verify no console errors in normal use.
- [ ] Verify all checklist items above are accurate.

### 14.2 Documentation
- [ ] Add short project overview at top of index page or readme.
- [ ] Document known limitations and future ideas.

### 14.3 Final Sign-Off
- [ ] Mark complete tasks throughout this file.
- [ ] Confirm project ready for demo/release.

## Optional Enhancement Backlog (After MVP)
- [ ] Meal plate builder with live macro totals.
- [ ] Nutrient trend mini-charts.
- [ ] Personalized recommendations by goal.
- [ ] Theme switcher.
- [ ] Multi-language support.
