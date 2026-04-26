(function authModule() {
  const authConfig = {
    sessionStorageKey: "nutriaware-auth-session-v2",
    usersStorageKey: "nutriaware-auth-users-v1",
    appPage: "index.html",
    loginPage: "login.html",
    signupPage: "signup.html",
    ...(window.NUTRIAWARE_AUTH_CONFIG || {})
  };

  function getCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    return path || authConfig.appPage;
  }

  function getSession() {
    try {
      const raw = localStorage.getItem(authConfig.sessionStorageKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveSession(session) {
    localStorage.setItem(authConfig.sessionStorageKey, JSON.stringify(session));
  }

  function getStoredUsers() {
    try {
      const raw = localStorage.getItem(authConfig.usersStorageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveStoredUsers(users) {
    localStorage.setItem(authConfig.usersStorageKey, JSON.stringify(users));
  }

  function normalizeEmail(email) {
    return email.trim().toLowerCase();
  }

  function clearSession() {
    localStorage.removeItem(authConfig.sessionStorageKey);
  }

  function redirectTo(url) {
    window.location.replace(url);
  }

  function isAuthPage(page) {
    return page === authConfig.loginPage || page === authConfig.signupPage;
  }

  function enforceRouteGuard() {
    const currentPage = getCurrentPage();
    const session = getSession();

    if (!isAuthPage(currentPage) && !session) {
      redirectTo(authConfig.loginPage);
      return false;
    }

    if (isAuthPage(currentPage) && session) {
      redirectTo(authConfig.appPage);
      return false;
    }

    return true;
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = value;
  }

  function showError(id, message) {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = message;
    element.classList.remove("hidden");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function hideMessage(id) {
    const element = document.getElementById(id);
    if (!element) return;
    element.classList.add("hidden");
  }

  function createLocalUser(name, email, password) {
    const users = getStoredUsers();
    const normalizedEmail = normalizeEmail(email);

    const exists = users.some((user) => normalizeEmail(user.email) === normalizedEmail);
    if (exists) {
      throw new Error("Account already exists for this email. Please login.");
    }

    const user = {
      id: `local-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(user);
    saveStoredUsers(users);
    return user;
  }

  function loginWithLocalUser(email, password) {
    const normalizedEmail = normalizeEmail(email);
    const users = getStoredUsers();
    const user = users.find((storedUser) => normalizeEmail(storedUser.email) === normalizedEmail);

    if (!user || user.password !== password) {
      throw new Error("Login failed. Check email/password or create an account first.");
    }

    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      provider: "local-storage",
      signedInAt: new Date().toISOString()
    };
  }

  function setHeaderAuthUi() {
    const session = getSession();
    const userSlot = document.getElementById("authUser");
    if (session && userSlot) {
      userSlot.textContent = session.email || "Logged in";
    }

    const logoutButtons = [
      document.getElementById("logoutBtn"),
      document.getElementById("mobileLogoutBtn")
    ].filter(Boolean);

    logoutButtons.forEach((button) => {
      button.addEventListener("click", () => {
        clearSession();
        redirectTo(authConfig.loginPage);
      });
    });
  }

  function wireLoginPage() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    setText("loginInfo", "Accounts are stored in this browser (localStorage). Sign up first, then login.");

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      hideMessage("loginError");

      const email = document.getElementById("loginEmail")?.value.trim() || "";
      const password = document.getElementById("loginPassword")?.value || "";

      if (!email || !password) {
        showError("loginError", "Please enter both email and password.");
        return;
      }

      if (!isValidEmail(email)) {
        showError("loginError", "Please enter a valid email address.");
        return;
      }

      try {
        const session = loginWithLocalUser(email, password);
        saveSession(session);
        redirectTo(authConfig.appPage);
      } catch (error) {
        showError("loginError", error instanceof Error ? error.message : "Unable to login right now.");
      }
    });
  }

  function wireSignupPage() {
    const signupForm = document.getElementById("signupForm");
    if (!signupForm) return;

    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      hideMessage("signupError");
      hideMessage("signupInfo");

      const name = document.getElementById("signupName")?.value.trim() || "";
      const email = document.getElementById("signupEmail")?.value.trim() || "";
      const password = document.getElementById("signupPassword")?.value || "";

      if (!name || !email || !password) {
        showError("signupError", "Please fill name, email, and password.");
        return;
      }

      if (!isValidEmail(email)) {
        showError("signupError", "Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        showError("signupError", "Password must be at least 6 characters.");
        return;
      }

      if (/\s/.test(password)) {
        showError("signupError", "Password cannot contain spaces.");
        return;
      }

      try {
        createLocalUser(name, email, password);
        const info = document.getElementById("signupInfo");
        if (info) {
          info.textContent = "Account created in local storage. Redirecting to login...";
          info.classList.remove("hidden");
        }

        setTimeout(() => redirectTo(authConfig.loginPage), 900);
      } catch (error) {
        showError("signupError", error instanceof Error ? error.message : "Unable to create account right now.");
      }
    });
  }

  function activateAuthPageVisuals() {
    document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
      element.classList.add("show");
    });
  }

  if (!enforceRouteGuard()) return;

  document.addEventListener("DOMContentLoaded", () => {
    activateAuthPageVisuals();
    wireLoginPage();
    wireSignupPage();
    setHeaderAuthUi();
  });
})();
