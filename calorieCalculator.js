document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve input values
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var activityLevel = document.getElementById('activityLevel').value;
    var goal = document.getElementById('goal').value;
    
    // Calculate BMR (Basal Metabolic Rate)
    var bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Adjust BMR based on activity level
    var tdee;
    switch (activityLevel) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'lightlyActive':
            tdee = bmr * 1.375;
            break;
        case 'moderatelyActive':
            tdee = bmr * 1.55;
            break;
        case 'veryActive':
            tdee = bmr * 1.725;
            break;
        case 'extraActive':
            tdee = bmr * 1.9;
            break;
    }
    
    // Adjust TDEE based on goal
    switch (goal) {
        case 'maintenance':
            break; // TDEE remains unchanged
        case 'loss':
            tdee -= 500; // Aim for 500 calorie deficit for weight loss
            break;
        case 'gain':
            tdee += 500; // Aim for 500 calorie surplus for weight gain
            break;
    }
    
    // Display the popup with the result
    var popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
        var calorieResult = document.getElementById('calorieResult');
        if (calorieResult) {
            var result = tdee.toFixed(2) + ' calories/day';
            calorieResult.textContent = result;
            popupContainer.style.display = 'flex';
        } else {
            console.error('Element with ID "calorieResult" not found.');
        }
    } else {
        console.error('Element with ID "popupContainer" not found.');
    }
});

// Close popup when the close button is clicked
var closePopupButton = document.getElementById('closePopup');
if (closePopupButton) {
    closePopupButton.addEventListener('click', function() {
        var popupContainer = document.getElementById('popupContainer');
        if (popupContainer) {
            popupContainer.style.display = 'none';
        } else {
            console.error('Element with ID "popupContainer" not found.');
        }
    });
} else {
    console.error('Element with ID "closePopup" not found.');
}