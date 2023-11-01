const foodData = require(C:\Users\mange\OneDrive\Desktop\Project2\food.js);

// Task1: List all the food items
function allFoodItems(){
    return foodData;
}
// Task2: List all the food items with catagory vegetables
function vegetableFoodItems(){
    return foodData.filter((food) => food.category === 'Vegetable');
}
// Task3: List all the food items with catagory fruit
function fruitFoodItems(){
    return foodData.filter((food) => food.category === 'Fruit')
}
// Task4: List all the food items with catagory protien
function proteinFoodItems(){
    return foodData.filter((food) => food.category === 'Protein');
}  
// Task5: List all the food items with catagory nuts
function nutsFoodItems(){
    return foodData.filter((food) => food.category === 'Nuts');
}  
// Task6: List all the food items with catagory grains
function grainsFoodItems(){
    return foodData.filter((food) => food.category === 'Grains');
}   
// Task7: List all the food items with catagory dairy
function dairyFoodItems(){
    return foodData.filter((food) => food.category === 'Dairy');
}   
// Task8: List all the food items with calorie above 100
function aboveCalorieFoodItems(){
    return foodData.filter((food) => food.category > 'Calorie');
}  
 // Task9: List all the food items with calorie below 100
function belowCalorieFoodItems(){
    return foodData.filter((food) => food.category < 'Calorie');
}
 // Task10: List all the food items with highest protein content to lowest
function proteinContentFoodItems(){
    return foodData.sort((a,b)=> b.protein - a.protein);
}   
// Task11: List all the food items with lowest carb content to highest
function carbContentFoodItems(){
    return foodData.sort((a,b)=> a.carb - b.carb);
}  

// Usage of functions
console.log('Task1: List all the food items');
console.log(allFoodItems());

console.log('Task2: List all the food items with catagory vegetables');
console.log(vegetableFoodItems());

console.log('Task3: List all the food items with catagory fruit');
console.log(fruitFoodItems());

console.log('Task4: List all the food items with catagory protien');
console.log(proteinFoodItems());

console.log('Task5: List all the food items with catagory nuts');
console.log(nutsFoodItems());

console.log('Task6: List all the food items with catagory grains');
console.log(grainsFoodItems());

console.log('Task7: List all the food items with catagory dairy');
console.log(dairyFoodItems());

console.log('Task8: List all the food items with calorie above 100');
console.log(aboveCalorieFoodItems());

console.log('Task9: List all the food items with calorie below 100');
console.log(belowCalorieFoodItems());

console.log('Task10: List all the food items with highest protein content to lowest');
console.log(proteinContentFoodItems());

console.log('Task11: List all the food items with lowest carb content to highest');
console.log(carbContentFoodItems());
 