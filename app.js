var inputMeal = document.getElementById('inputMealName');
var inputMealValue = inputMeal.value;


function searchFood() {
    inputMealValue = inputMeal.value;
    if (inputMealValue == '') {
        return alert('please enter your food');
    } 
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMealValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const mealName = data.meals;
            mealInfo(mealName);
        })

        .catch(err => {
            alert('Please, check your spell!')
            document.getElementById('inputMealName').value = ''
        })
    }
    
}



function mealInfo(mealHere) {
   const foodMainDiv = document.getElementById('main-food');

   mealHere.forEach(food => {
       const foodDiv = document.createElement('div');
        foodDiv.className = 'each-food';
        const foodInfo = `
           <img src="${food.strMealThumb}">
           <h5>${food.strMeal}</h5>
       `;
       foodDiv.innerHTML = foodInfo;
       foodMainDiv.appendChild(foodDiv);
   });
 
}

document.getElementById('searchMeal').addEventListener('click', function(){
    searchFood();
    document.getElementById('inputMealName').value = '';
    document.getElementById('main-food').innerHTML = '';
 })