//9.10. STUDIO: Loops
// 9.10.1. Part A: Put dinner together
// 1) First, use the variables provided to store the following arrays.
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

// 2) Inside of mealAssembly(), write a for loop to assemble numMeals meals.
//    a. The meals must include one item from each category in the pantry array.
//    b. Each ingredient can only be used ONCE.
//    c. Add each meal to the meals array once it is assembled.
//    HINT : Consider creating a nested loop that will create a meal for each crew member and then add it into a larger collection of meals.
function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry = [protein, grains, veggies, beverages, desserts];
    let meals = [];

    for(let i = 0; i < numMeals; i++) {
        let meal = [];

        for(let j = 0; j < pantry.length; j++) {
            meal.push(pantry[j][i]);
        }
        meals.push(meal);
    }
    return meals;
}

// 9.10.2. Part B: Collect User Input
// Update askForNumber () to add user input and validation.
// 1) Using a while loop, ask the user to select the number of meals to assemble. Validate the input to make sure it is an integer from 1 - 6.
// 2) Save the result to the numMeals variable returned by the function.
function askForNumber() {
    numMeals = Number(prompt("How many meals would you like to make? "));

    while (numMeals < 1 || numMeals > 6) {
        if (numMeals < 1) {
            console.log("Meals should be at least 1.\n");
        } else if (numMeals > 6) {
            console.log("Meals should be less than 7.\n");
        }
        askForNumber();
    }
    return numMeals;
}

// 9.10.3. Checking Your Work
// 9.10.4. Bonus Mission
// Write your code inside generatePassword().
// 1) Construct a for loop that combines the strings together, alternating characters from each source. Save the combined string to the variable.
function generatePassword(string1, string2) {
    let code = '';
  
    for (let i = 0; i < string1.length; i++) {
        code += string1[i] + string2[i];
    }
  
    return code;
  }

const prompt = require('prompt-sync') ({sigint: true});

askForNumber();

let mealsForX = JSON.stringify(mealAssembly(protein, grains, veggies, beverages, desserts, numMeals));
console.log(mealsForX);

let password = generatePassword("1234", "abcd");
console.log(password);
