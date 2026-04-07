const foods = [
  { name: "Apple", category: "fruits", serving: "1 medium", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4, sugar: 19, sodium: 2 },
  { name: "Banana", category: "fruits", serving: "1 medium", calories: 105, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3.1, sugar: 14, sodium: 1 },
  { name: "Orange", category: "fruits", serving: "1 medium", calories: 62, protein: 1.2, carbs: 15.4, fat: 0.2, fiber: 3.1, sugar: 12.2, sodium: 0 },
  { name: "Strawberries", category: "fruits", serving: "1 cup", calories: 49, protein: 1, carbs: 11.7, fat: 0.5, fiber: 3, sugar: 7.4, sodium: 2 },
  { name: "Blueberries", category: "fruits", serving: "1 cup", calories: 84, protein: 1.1, carbs: 21.4, fat: 0.5, fiber: 3.6, sugar: 14.7, sodium: 1 },
  { name: "Spinach", category: "vegetables", serving: "1 cup raw", calories: 7, protein: 0.9, carbs: 1.1, fat: 0.1, fiber: 0.7, sugar: 0.1, sodium: 24 },
  { name: "Broccoli", category: "vegetables", serving: "1 cup", calories: 55, protein: 3.7, carbs: 11.2, fat: 0.6, fiber: 5.1, sugar: 2.2, sodium: 49 },
  { name: "Carrot", category: "vegetables", serving: "1 medium", calories: 25, protein: 0.6, carbs: 6, fat: 0.1, fiber: 1.7, sugar: 2.9, sodium: 42 },
  { name: "Sweet Potato", category: "vegetables", serving: "1 medium", calories: 112, protein: 2, carbs: 26, fat: 0.1, fiber: 3.9, sugar: 5.4, sodium: 41 },
  { name: "Cucumber", category: "vegetables", serving: "1 cup", calories: 16, protein: 0.7, carbs: 3.8, fat: 0.1, fiber: 0.5, sugar: 1.7, sodium: 2 },
  { name: "Brown Rice", category: "grains", serving: "1 cup cooked", calories: 216, protein: 5, carbs: 44.8, fat: 1.8, fiber: 3.5, sugar: 0.7, sodium: 10 },
  { name: "Oats", category: "grains", serving: "1 cup cooked", calories: 154, protein: 6, carbs: 27.4, fat: 2.6, fiber: 4, sugar: 1.1, sodium: 2 },
  { name: "Whole Wheat Bread", category: "grains", serving: "1 slice", calories: 81, protein: 4, carbs: 13.8, fat: 1.1, fiber: 1.9, sugar: 1.4, sodium: 144 },
  { name: "Quinoa", category: "grains", serving: "1 cup cooked", calories: 222, protein: 8.1, carbs: 39.4, fat: 3.6, fiber: 5.2, sugar: 1.6, sodium: 13 },
  { name: "Chicken Breast", category: "proteins", serving: "100 g", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74 },
  { name: "Egg", category: "proteins", serving: "1 large", calories: 72, protein: 6.3, carbs: 0.4, fat: 4.8, fiber: 0, sugar: 0.2, sodium: 71 },
  { name: "Lentils", category: "proteins", serving: "1 cup cooked", calories: 230, protein: 17.9, carbs: 39.9, fat: 0.8, fiber: 15.6, sugar: 3.6, sodium: 4 },
  { name: "Tofu", category: "proteins", serving: "100 g", calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3, sugar: 0.6, sodium: 7 },
  { name: "Salmon", category: "proteins", serving: "100 g", calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, sugar: 0, sodium: 59 },
  { name: "Greek Yogurt", category: "dairy", serving: "170 g", calories: 100, protein: 17, carbs: 6, fat: 0.7, fiber: 0, sugar: 4, sodium: 65 },
  { name: "Milk", category: "dairy", serving: "1 cup", calories: 103, protein: 8, carbs: 12, fat: 2.4, fiber: 0, sugar: 12, sodium: 107 },
  { name: "Almond Milk", category: "dairy", serving: "1 cup", calories: 39, protein: 1.5, carbs: 3.4, fat: 2.9, fiber: 0.7, sugar: 2.1, sodium: 167 },
  { name: "Cheese", category: "dairy", serving: "30 g", calories: 113, protein: 7, carbs: 0.4, fat: 9, fiber: 0, sugar: 0.1, sodium: 174 },
  { name: "Potato Chips", category: "snacks", serving: "28 g", calories: 152, protein: 2, carbs: 15, fat: 10, fiber: 1, sugar: 0.1, sodium: 149 },
  { name: "Roasted Chickpeas", category: "snacks", serving: "28 g", calories: 120, protein: 5, carbs: 18, fat: 2, fiber: 5, sugar: 2, sodium: 90 }
];

const swaps = [
  ["Sugary soda", "Sparkling water with lemon"],
  ["Potato chips", "Roasted chickpeas"],
  ["White bread", "Whole wheat bread"],
  ["Candy bar", "Greek yogurt with berries"],
  ["Fried chicken", "Grilled chicken breast"],
  ["Ice cream", "Frozen banana blend"],
  ["Salted instant noodles", "Vegetable lentil soup"],
  ["Sweetened cereal", "Oats with fruit"]
];

const myths = [
  {
    myth: "Carbs are always bad.",
    fact: "Whole grains, fruits, and legumes are nutrient-rich carbs that support energy and health."
  },
  {
    myth: "Skipping meals helps long-term weight loss.",
    fact: "Regular balanced meals can reduce overeating and support better energy control."
  },
  {
    myth: "Healthy food has to be expensive.",
    fact: "Staples like lentils, oats, seasonal produce, and eggs can be affordable and nutritious."
  },
  {
    myth: "Fat-free means healthy.",
    fact: "Some fat-free foods are high in sugar; always read the full nutrition label."
  },
  {
    myth: "Protein is only for athletes.",
    fact: "Protein is essential for everyone for muscle repair, immunity, and satiety."
  },
  {
    myth: "All snacks are unhealthy.",
    fact: "Smart snacks like fruit, yogurt, nuts, or roasted legumes can fit a healthy pattern."
  }
];

const habits = [
  "Drink at least 6-8 glasses of water",
  "Include vegetables in two meals",
  "Choose one whole grain option",
  "Avoid sugary drinks today",
  "Eat at least one fruit",
  "Check a food label before buying"
];

const state = {
  currentCategory: "all",
  searchText: ""
};

const categoryImages = {
  fruits: "assets/images/fruits-basket.svg",
  vegetables: "assets/images/veggie-board.svg",
  grains: "assets/images/grain-bowl.svg",
  proteins: "assets/images/protein-plate.svg",
  dairy: "assets/images/dairy-bowl.svg",
  snacks: "assets/images/snack-smart.svg"
};

const foodImageStorageKey = "nutriaware-food-image-cache-v1";
const foodImageCache = (() => {
  try {
    const parsed = JSON.parse(localStorage.getItem(foodImageStorageKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
})();
const foodImagePromises = {};

const mealDbIngredientMap = {
  Apple: "Apple",
  Banana: "Banana",
  Orange: "Orange",
  Strawberries: "Strawberries",
  Blueberries: "Blueberries",
  Spinach: "Spinach",
  Broccoli: "Broccoli",
  Carrot: "Carrots",
  "Sweet Potato": "Sweet Potato",
  Cucumber: "Cucumber",
  "Brown Rice": "Rice",
  Oats: "Oats",
  "Whole Wheat Bread": "Bread",
  Quinoa: "Quinoa",
  "Chicken Breast": "Chicken",
  Egg: "Egg",
  Lentils: "Lentils",
  Tofu: "Tofu",
  Salmon: "Salmon",
  "Greek Yogurt": "Yogurt",
  Milk: "Milk",
  "Almond Milk": "Almond",
  Cheese: "Cheese",
  "Potato Chips": "Potatoes",
  "Roasted Chickpeas": "Chickpeas"
};

const wikiTitleMap = {
  "Whole Wheat Bread": "Whole wheat bread",
  "Chicken Breast": "Chicken as food",
  "Greek Yogurt": "Strained yogurt",
  "Almond Milk": "Almond milk",
  "Potato Chips": "Potato chip",
  "Roasted Chickpeas": "Chickpea",
  Oats: "Oat",
  Tofu: "Tofu",
  Quinoa: "Quinoa",
  Lentils: "Lentil"
};

function toTitleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function saveFoodImageCache() {
  try {
    localStorage.setItem(foodImageStorageKey, JSON.stringify(foodImageCache));
  } catch {
    // Ignore localStorage quota errors and continue with in-memory cache.
  }
}

function getMealDbIngredientImageUrl(foodName) {
  const ingredientName = mealDbIngredientMap[foodName] || foodName;
  const slug = ingredientName.replace(/\s+/g, "_");
  return `https://www.themealdb.com/images/ingredients/${encodeURIComponent(slug)}.png`;
}

function getWikiTitle(foodName) {
  return wikiTitleMap[foodName] || foodName;
}

function canLoadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = url;
  });
}

async function getWikipediaFoodImageUrl(foodName) {
  const title = encodeURIComponent(getWikiTitle(foodName));
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.thumbnail?.source || data?.originalimage?.source || null;
}

async function resolveFoodImageUrl(food) {
  const cached = foodImageCache[food.name];
  if (cached) return cached;
  if (cached === null) return null;

  if (foodImagePromises[food.name]) {
    return foodImagePromises[food.name];
  }

  foodImagePromises[food.name] = (async () => {
    const mealDbUrl = getMealDbIngredientImageUrl(food.name);
    if (await canLoadImage(mealDbUrl)) {
      foodImageCache[food.name] = mealDbUrl;
      saveFoodImageCache();
      return mealDbUrl;
    }

    try {
      const wikiUrl = await getWikipediaFoodImageUrl(food.name);
      if (wikiUrl && await canLoadImage(wikiUrl)) {
        foodImageCache[food.name] = wikiUrl;
        saveFoodImageCache();
        return wikiUrl;
      }
    } catch {
      // Keep fallback behavior below.
    }

    foodImageCache[food.name] = null;
    saveFoodImageCache();
    return null;
  })();

  const result = await foodImagePromises[food.name];
  delete foodImagePromises[food.name];
  return result;
}

function getFoodImageElementId(foodName) {
  const key = foodName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `food-image-${key}`;
}

async function hydrateFoodCardImages(filteredFoods) {
  await Promise.all(
    filteredFoods.map(async (food) => {
      const imageUrl = await resolveFoodImageUrl(food);
      if (!imageUrl) return;
      const imageElement = document.getElementById(getFoodImageElementId(food.name));
      if (imageElement) {
        imageElement.src = imageUrl;
      }
    })
  );
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "N/A";
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function renderFoodGrid() {
  const foodGrid = document.getElementById("foodGrid");
  const foodCount = document.getElementById("foodCount");
  const filtered = foods.filter((food) => {
    const matchesCategory = state.currentCategory === "all" || food.category === state.currentCategory;
    const matchesSearch = food.name.toLowerCase().includes(state.searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  foodCount.textContent = `${filtered.length} foods`;

  if (!filtered.length) {
    foodGrid.innerHTML = `
      <div class="sm:col-span-2 lg:col-span-3 rounded-2xl bg-white p-6 shadow-soft text-sm text-brand-deep/75">
        No foods found for your filter. Try another category or search keyword.
      </div>
    `;
    return;
  }

  foodGrid.innerHTML = filtered
    .map((food) => `
      <article class="rounded-2xl bg-white p-5 shadow-soft">
        <img id="${getFoodImageElementId(food.name)}" src="${categoryImages[food.category]}" alt="${food.name} product image" class="mb-3 w-full rounded-xl border border-brand-leaf/10 object-cover h-40" loading="lazy" onerror="this.onerror=null;this.src='${categoryImages[food.category]}'" />
        <p class="text-xs uppercase tracking-wide text-brand-leaf font-bold">${food.category}</p>
        <h3 class="mt-1 text-xl font-heading">${food.name}</h3>
        <p class="mt-1 text-xs text-brand-deep/60">Serving: ${food.serving}</p>
        <div class="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div class="rounded-lg bg-brand-mist px-3 py-2"><span class="font-bold">Cal:</span> ${food.calories}</div>
          <div class="rounded-lg bg-brand-mist px-3 py-2"><span class="font-bold">Protein:</span> ${formatNumber(food.protein)} g</div>
          <div class="rounded-lg bg-brand-mist px-3 py-2"><span class="font-bold">Carbs:</span> ${formatNumber(food.carbs)} g</div>
          <div class="rounded-lg bg-brand-mist px-3 py-2"><span class="font-bold">Fat:</span> ${formatNumber(food.fat)} g</div>
        </div>
      </article>
    `)
    .join("");

  hydrateFoodCardImages(filtered);
}

function wireExplorer() {
  document.querySelectorAll(".category-filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentCategory = button.dataset.category;
      document.querySelectorAll(".category-filter").forEach((chip) => {
        chip.classList.remove("active-chip");
        chip.classList.add("chip");
      });
      button.classList.remove("chip");
      button.classList.add("active-chip");
      renderFoodGrid();
    });
  });

  document.getElementById("foodSearch").addEventListener("input", (event) => {
    state.searchText = event.target.value.trim();
    renderFoodGrid();
  });

  document.getElementById("clearExplorer").addEventListener("click", () => {
    state.currentCategory = "all";
    state.searchText = "";
    document.getElementById("foodSearch").value = "";

    document.querySelectorAll(".category-filter").forEach((chip) => {
      chip.classList.remove("active-chip");
      chip.classList.add("chip");
      if (chip.dataset.category === "all") {
        chip.classList.remove("chip");
        chip.classList.add("active-chip");
      }
    });

    renderFoodGrid();
  });
}

function renderLookupResult(food) {
  const nutrientResult = document.getElementById("nutrientResult");
  if (!food) {
    nutrientResult.innerHTML = "<p class='text-brand-deep/70'>Select a food item to see detailed nutrients.</p>";
    return;
  }

  nutrientResult.innerHTML = `
    <h3 class="text-2xl font-heading">${food.name}</h3>
    <p class="mt-1 text-sm text-brand-deep/65">Serving size: ${food.serving}</p>
    <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Calories:</span> ${food.calories} kcal</div>
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Protein:</span> ${formatNumber(food.protein)} g</div>
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Carbs:</span> ${formatNumber(food.carbs)} g</div>
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Fat:</span> ${formatNumber(food.fat)} g</div>
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Fiber:</span> ${formatNumber(food.fiber)} g</div>
      <div class="rounded-xl bg-brand-mist p-3"><span class="font-bold">Sugar:</span> ${formatNumber(food.sugar)} g</div>
      <div class="rounded-xl bg-brand-mist p-3 sm:col-span-2 lg:col-span-3"><span class="font-bold">Sodium:</span> ${formatNumber(food.sodium)} mg</div>
    </div>
  `;
}

function wireLookup() {
  const nutrientSelect = document.getElementById("nutrientSelect");
  nutrientSelect.innerHTML = "<option value=''>Select a food...</option>" + foods
    .map((food, index) => `<option value='${index}'>${food.name}</option>`)
    .join("");

  nutrientSelect.addEventListener("change", () => {
    const index = Number(nutrientSelect.value);
    const food = Number.isNaN(index) ? null : foods[index];
    renderLookupResult(food);
  });
}

function calculateIntake(age, weight, height, gender, activity, goal) {
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  if (gender === "male") bmr += 5;
  else if (gender === "female") bmr -= 161;
  else bmr -= 78;

  let calories = bmr * activity;
  if (goal === "loss") calories -= 300;
  if (goal === "gain") calories += 300;

  const macroRatios = {
    maintain: { protein: 0.25, carbs: 0.45, fat: 0.3 },
    loss: { protein: 0.35, carbs: 0.35, fat: 0.3 },
    gain: { protein: 0.3, carbs: 0.45, fat: 0.25 }
  };

  const ratio = macroRatios[goal];
  const proteinGrams = (calories * ratio.protein) / 4;
  const carbsGrams = (calories * ratio.carbs) / 4;
  const fatGrams = (calories * ratio.fat) / 9;
  const hydrationMl = weight * 35;

  return {
    calories,
    proteinGrams,
    carbsGrams,
    fatGrams,
    hydrationMl
  };
}

function wireCalculator() {
  const form = document.getElementById("intakeForm");
  const calcError = document.getElementById("calcError");
  const calcResults = document.getElementById("calcResults");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcError.classList.add("hidden");

    const age = Number(document.getElementById("age").value);
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const activity = Number(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    if (!age || !weight || !height || age < 10 || age > 100 || weight < 25 || weight > 250 || height < 120 || height > 230) {
      calcError.textContent = "Please enter realistic values: age 10-100, weight 25-250 kg, height 120-230 cm.";
      calcError.classList.remove("hidden");
      return;
    }

    const result = calculateIntake(age, weight, height, gender, activity, goal);

    calcResults.innerHTML = `
      <h3 class="text-2xl font-heading">Your Daily Guidance</h3>
      <div class="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
        <div class="rounded-xl bg-brand-mist p-4"><p class="text-brand-deep/70">Estimated Calories</p><p class="text-xl font-bold">${Math.round(result.calories)} kcal</p></div>
        <div class="rounded-xl bg-brand-mist p-4"><p class="text-brand-deep/70">Hydration</p><p class="text-xl font-bold">${Math.round(result.hydrationMl / 1000 * 10) / 10} L/day</p></div>
        <div class="rounded-xl bg-brand-mist p-4"><p class="text-brand-deep/70">Protein</p><p class="text-xl font-bold">${Math.round(result.proteinGrams)} g</p></div>
        <div class="rounded-xl bg-brand-mist p-4"><p class="text-brand-deep/70">Carbs</p><p class="text-xl font-bold">${Math.round(result.carbsGrams)} g</p></div>
        <div class="rounded-xl bg-brand-mist p-4 sm:col-span-2"><p class="text-brand-deep/70">Fat</p><p class="text-xl font-bold">${Math.round(result.fatGrams)} g</p></div>
      </div>
      <p class="mt-4 text-xs text-brand-deep/65">This is an educational estimate, not a medical prescription.</p>
    `;
  });
}

function wireSwaps() {
  const swapBtn = document.getElementById("swapBtn");
  const swapResult = document.getElementById("swapResult");
  let lastIndex = -1;

  swapBtn.addEventListener("click", () => {
    let index = Math.floor(Math.random() * swaps.length);
    if (swaps.length > 1 && index === lastIndex) {
      index = (index + 1) % swaps.length;
    }
    lastIndex = index;

    const [from, to] = swaps[index];
    swapResult.innerHTML = `<span class='font-bold'>Swap:</span> ${from} <span class='opacity-80'>to</span> <span class='font-bold'>${to}</span>`;
  });
}

function renderHabits() {
  const habitList = document.getElementById("habitList");
  const saved = JSON.parse(localStorage.getItem("nutrition-habits") || "{}");

  habitList.innerHTML = habits
    .map((habit, index) => {
      const checked = Boolean(saved[index]);
      return `
        <label class="flex items-start gap-3 rounded-xl border border-brand-leaf/20 p-3">
          <input class="habit-checkbox mt-1" type="checkbox" data-index="${index}" ${checked ? "checked" : ""} />
          <span class="text-sm">${habit}</span>
        </label>
      `;
    })
    .join("");

  updateHabitProgress();
}

function updateHabitProgress() {
  const checkboxes = Array.from(document.querySelectorAll(".habit-checkbox"));
  const checked = checkboxes.filter((checkbox) => checkbox.checked).length;
  const progress = Math.round((checked / checkboxes.length) * 100) || 0;
  document.getElementById("habitProgress").textContent = `${progress}%`;
}

function wireHabits() {
  renderHabits();

  document.getElementById("habitList").addEventListener("change", (event) => {
    const checkbox = event.target;
    if (!(checkbox instanceof HTMLInputElement) || !checkbox.classList.contains("habit-checkbox")) return;

    const saved = JSON.parse(localStorage.getItem("nutrition-habits") || "{}");
    saved[checkbox.dataset.index] = checkbox.checked;
    localStorage.setItem("nutrition-habits", JSON.stringify(saved));
    updateHabitProgress();
  });

  document.getElementById("resetHabits").addEventListener("click", () => {
    localStorage.removeItem("nutrition-habits");
    renderHabits();
  });
}

function renderMyths() {
  const mythGrid = document.getElementById("mythGrid");
  mythGrid.innerHTML = myths
    .map(
      (item) => `
      <article class="rounded-2xl bg-white p-5 shadow-soft reveal-on-scroll">
        <p class="text-xs font-bold uppercase tracking-wide text-brand-clay">Myth</p>
        <h3 class="mt-2 text-lg font-heading">${item.myth}</h3>
        <p class="mt-4 text-xs font-bold uppercase tracking-wide text-brand-leaf">Fact</p>
        <p class="mt-2 text-sm text-brand-deep/75">${item.fact}</p>
      </article>
    `
    )
    .join("");
}

function wireMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function wireRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((element) => observer.observe(element));
}

function init() {
  wireMobileMenu();
  wireExplorer();
  renderFoodGrid();
  wireLookup();
  wireCalculator();
  wireSwaps();
  wireHabits();
  renderMyths();
  wireRevealOnScroll();
}

document.addEventListener("DOMContentLoaded", init);
