function showNutritionalInfo() {
    var foodSelect = document.getElementById("foodSelect");
    var selectedFood = foodSelect.options[foodSelect.selectedIndex].value;

    // Hard-coded nutritional information for demonstration
    var nutritionalInfo = getNutritionalInfo(selectedFood);

    // Display the nutritional information
    document.getElementById("foodName").textContent = "Food Name: " + selectedFood;
    document.getElementById("calories").textContent = "Calories: " + nutritionalInfo.calories;
    document.getElementById("protein").textContent = "Protein: " + nutritionalInfo.protein;
    document.getElementById("carbohydrates").textContent = "Carbohydrates: " + nutritionalInfo.carbohydrates;
    document.getElementById("fat").textContent = "Fat: " + nutritionalInfo.fat;
}

// Function to retrieve nutritional information based on the selected food
function getNutritionalInfo(food) {
    // Define a mapping of food items to their nutritional information
    var nutritionalData = {
        "avocado": {
            "calories": 160,
            "protein": 2,
            "carbohydrates": 9,
            "fat": 15
        },
        "banana": {
            "calories": 105,
            "protein": 1.3,
            "carbohydrates": 27,
            "fat": 0.4
        },
        "chicken_breast": {
            "calories": 165,
            "protein": 31,
            "carbohydrates": 0,
            "fat": 3.6
        },
        "oatmeal": {
            "calories": 68,
            "protein": 2.5,
            "carbohydrates": 12,
            "fat": 1.4
        },
        "salmon": {
            "calories": 206,
            "protein": 22,
            "carbohydrates": 0,
            "fat": 13
        },
        "beef": {
            "calories": 250,
            "protein": 26,
            "carbohydrates": 0,
            "fat": 15
        },
        "egg": {
            "calories": 70,
            "protein": 6,
            "carbohydrates": 1,
            "fat": 5
        },
        "milk": {
            "calories": 42,
            "protein": 3.4,
            "carbohydrates": 4.8,
            "fat": 1
        },
        "tuna": {
            "calories": 184,
            "protein": 25,
            "carbohydrates": 0,
            "fat": 9
        },
        "nuts": {
            "calories": 607,
            "protein": 15,
            "carbohydrates": 16,
            "fat": 54
        },
        "lentils": {
            "calories": 116,
            "protein": 9,
            "carbohydrates": 20,
            "fat": 0.4
        },
        "cheese": {
            "calories": 402,
            "protein": 25,
            "carbohydrates": 3.2,
            "fat": 33
        },
        "serdin": {
            "calories": 250,
            "protein": 20,
            "carbohydrates": 0,
            "fat": 18
        },
        "lamb": {
            "calories": 294,
            "protein": 25,
            "carbohydrates": 0,
            "fat": 21
        },
        "honey": {
            "calories": 304,
            "protein": 0.3,
            "carbohydrates": 82,
            "fat": 0
        },
        "butter": {
            "calories": 717,
            "protein": 0.9,
            "carbohydrates": 0.1,
            "fat": 81
        },
        "rice": {
            "calories": 130,
            "protein": 2.7,
            "carbohydrates": 28,
            "fat": 0.3
        },
        "coupled": {
            "calories": 215,
            "protein": 4,
            "carbohydrates": 25,
            "fat": 11
        }

        // Add more food items and their nutritional information here
    };

    // Return the nutritional information for the selected food
    return nutritionalData[food];
}
function showCalorieBurnRate() {
    var sportSelect = document.getElementById("sportSelect1");
    var selectedSport = sportSelect.options[sportSelect.selectedIndex].value;

    // Hard-coded calorie burn rates for demonstration
    var calorieBurnRate = getCalorieBurnRate(selectedSport);

    // Display the calorie burn rate
    document.getElementById("calorieBurnRate").textContent = "Calories Burned per Hour: " + calorieBurnRate + " kcal";
}

// Function to retrieve calorie burn rate based on the selected sport
function getCalorieBurnRate(sport) {
    // Define a mapping of sports to their calorie burn rates
    var calorieBurnRates = {
        "running": 600,
        "cycling": 500,
        "swimming": 700,
        "gym": 400,
        "karate": 750,
        "boxing": 700,
        "physique": 450,
        "calisthenics": 600
        // Add more sports and their calorie burn rates here
    };

    // Return the calorie burn rate for the selected sport
    return calorieBurnRates[sport];
}

var next = document.getElementById("next");
next.addEventListener("click", () => {
    location.assign("login.html");
});