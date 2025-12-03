const recipes = [
  {
    name: "Caprese Sandwich",
    image: "caprese.jpg.jpg",
    rating: 4.5,
    reviews: 189,
    prep: "10 min",
    cook: "5 min",
    servings: "2 people",
    ingredients: [
      "1 ciabatta bread",
      "200g mozzarella, sliced",
      "2 tomatoes, sliced",
      "Fresh basil leaves",
      "3 tbsp pesto",
      "2 tbsp balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately."
    ],
    nutrition: ["480",
      "22",
      "48",
      "22",
      "3",
      "680"
    ],
    tips: ["Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich"
    ]
  },
    {
    name: "Grilled Chicken Pesto Panini",
    image: "chicken_pesto_panini.jpg.jpg",
    rating: 4.8,
    reviews: 342,
    prep: "15 min",
    cook: "10 min",
    servings: "2 people",
    ingredients: [
      "2 ciabatta rolls",
      "1 grilled chicken breast, sliced",
      "3 tbsp pesto",
      "4 slices provolone cheese",
      "Fresh spinach",
      "1 tbsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat a panini press or skillet.",
      "Slice ciabatta rolls and spread pesto on both sides.",
      "Layer chicken, spinach, and provolone.",
      "Brush outside of bread with olive oil.",
      "Grill until bread is crispy and cheese melts."
    ],
    nutrition: ["520", "28", "32", "41", "5", "780"],
    tips: [
      "Use leftover roasted chicken for quick prep",
      "Add sun-dried tomatoes for extra flavor",
      "Press gently to avoid squeezing out pesto"
    ]
  },

  {
    name: "Classic Tuna Melt",
    image: "tuna_melt.jpg.jpg",
    rating: 4.3,
    reviews: 221,
    prep: "10 min",
    cook: "6 min",
    servings: "2 people",
    ingredients: [
      "2 slices sourdough bread",
      "1 can tuna, drained",
      "2 tbsp mayonnaise",
      "1 tbsp mustard",
      "2 slices cheddar",
      "1 tbsp butter",
      "Salt and pepper"
    ],
    instructions: [
      "Mix tuna with mayo, mustard, salt, and pepper.",
      "Spread tuna mixture onto bread.",
      "Top with cheddar cheese.",
      "Butter outside of bread.",
      "Grill on skillet until golden and melted."
    ],
    nutrition: ["460", "19", "38", "28", "3", "640"],
    tips: [
      "Add diced pickles for crunch",
      "Toast low and slow to melt cheese fully",
      "Use Swiss for a milder flavor"
    ]
  },

  {
    name: "Turkey Avocado Club",
    image: "turkey_avocado_club.jpg.jpg",
    rating: 4.7,
    reviews: 410,
    prep: "12 min",
    cook: "0 min",
    servings: "2 people",
    ingredients: [
      "3 slices multigrain bread",
      "6 slices turkey breast",
      "4 slices cooked bacon",
      "1 avocado, sliced",
      "2 tomato slices",
      "Lettuce",
      "2 tbsp mayo",
      "Salt and pepper"
    ],
    instructions: [
      "Toast all three slices of bread.",
      "Spread mayo on each slice.",
      "Layer turkey, tomato, lettuce, and avocado.",
      "Add bacon and top with second bread slice.",
      "Repeat layers and finish with the third slice.",
      "Cut into triangles and serve."
    ],
    nutrition: ["610", "35", "44", "28", "7", "890"],
    tips: [
      "Mash the avocado for a creamier layer",
      "Use peppered turkey for extra flavor",
      "Keep bacon crispy to avoid sogginess"
    ]
  },
  {
    name: "Egg Salad Sandwich",
    image: "egg_salad.jpg.jpg",
    rating: 4.4,
    reviews: 198,
    prep: "12 min",
    cook: "10 min",
    servings: "2 people",
    ingredients: [
      "4 hard-boiled eggs, chopped",
      "2 tbsp mayo",
      "1 tsp Dijon mustard",
      "Lettuce",
      "2 slices white bread",
      "Salt and pepper"
    ],
    instructions: [
      "Mix chopped eggs with mayo, mustard, salt, and pepper.",
      "Toast bread lightly.",
      "Add lettuce to bottom slice.",
      "Spread egg salad on top.",
      "Close sandwich and serve."
    ],
    nutrition: ["420", "18", "35", "20", "2", "510"],
    tips: [
      "Add chives or green onion for flavor",
      "Chill egg salad before serving",
      "Use soft bread to complement texture"
    ]
  }

    ]



function loadRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);
  var recipe = recipes[randomIndex];

  document.getElementById("dishName").textContent = recipe.name;
  document.getElementById("recipe-img").src = "images/" + recipe.image;
  document.getElementById("rating").textContent = recipe.rating;
  document.getElementById("reviews").textContent = "(" + recipe.reviews + " reviews)";
  document.getElementById("prep-time").textContent = recipe.prep;
  document.getElementById("cook-time").textContent = recipe.cook;
  document.getElementById("servings").textContent = recipe.servings;

  var ingredientsDiv = document.getElementById("ingredients");
  ingredientsDiv.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsDiv.innerHTML +=
      '<div class="d-flex align-items-center s">' +
        '<div class="fw-bold ball">' + (i + 1) + '</div>' +
        '<div>' + recipe.ingredients[i] + '</div>' +
      '</div>';
  }

  var instructionsDiv = document.getElementById("instructions");
  instructionsDiv.innerHTML = "";
  for (var j = 0; j < recipe.instructions.length; j++) {
    instructionsDiv.innerHTML +=
      '<div class="d-flex align-items-center my-2">' +
        '<div class="fw-bold s2">' + (j + 1) + '</div>' +
        '<div>' + recipe.instructions[j] + '</div>' +
      '</div>';
  }

  var nutrition = recipe.nutrition;
  var nutritionDiv = document.getElementById("nutrition");
  nutritionDiv.innerHTML =
    '<div class="row g-4">' +
      makeNutritionCard("Calories", nutrition[0] + " kcal") +
      makeNutritionCard("Protein", nutrition[1] + "g") +
      makeNutritionCard("Carbs", nutrition[2] + "g") +
      makeNutritionCard("Fat", nutrition[3] + "g") +
      makeNutritionCard("Fiber", nutrition[4] + "g") +
      makeNutritionCard("Sodium", nutrition[5] + "mg") +
    '</div>';

  var tipsDiv = document.getElementById("tips");
  tipsDiv.innerHTML = "";
  for (var k = 0; k < recipe.tips.length; k++) {
    tipsDiv.innerHTML +=
      '<div class="col-12 my-3">' +
        '<div class="tip-card">' +
          '<div class="tip-icon"><i class="fa-solid fa-check"></i></div>' +
          recipe.tips[k] +
        '</div>' +
      '</div>';
  }
}

function makeNutritionCard(label, value) {
  return (
    '<div class="col-12 col-lg-6">' +
      '<div class="nutri-card">' +
        '<span class="nutri-label">' + label + '</span>' +
        '<span class="nutri-value">' + value + '</span>' +
      '</div>' +
    '</div>'
  );
}
