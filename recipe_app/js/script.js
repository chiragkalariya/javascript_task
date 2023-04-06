// favbtn.addEventListener("click", function () {
//     document.getElementById("favbtn").classList.toggle("fa-heart");
//     document.getElementById("favbtn").classList.toggle("fa-heart-o");
// })
const mealsEl = document.getElementById("meal");
const favoriteContainer = document.getElementById("fav-meals");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
const mealPopup = document.getElementById("meal-popup");
const popupClose = document.getElementById("close-popup");
const mealInfoE1 = document.getElementById("meal-info")
getRandomMeal();
fetchFavMeals();
async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    // console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}
async function getMealsBysearch(term) {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
    );
    const respData = await resp.json();
    const meals = respData.meals; 
    // console.log(meals);
    return meals;
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
        <div class="meal_header">
            ${random ? `
            <span class="random">Random Recipe</span>
            ` : ''} 
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="meal_body">
            <h4>${mealData.strMeal}</h4>
            <button class="favbtn" id="abc">
                <i id="favbtn" class="fa fa-heart" aria-hidden="true"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector(".meal_body .favbtn");
    btn.addEventListener('click', () => {
        if(btn.classList.contains('active')) {
            removeMealLS(mealData.idMeal)
            btn.classList.remove("active")
        } else {
            addMealLS(mealData.idMeal)
            btn.classList.toggle("active")
        }
        favoriteContainer.innerHTML = "";
        fetchFavMeals();

    });
    meal.addEventListener('click', () => {
        showMealInfo(mealData);
    })

    mealsEl.appendChild(meal)
}

function addMealLS(mealId) {
    // console.log(mealId);
    const mealIds = getMealsLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}
function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter((id) => id !== mealId)));
}
function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
    // clean the container
    favoriteContainer.innerHTML = "";
    const mealIdsOne = getMealsLS();
    // console.log(mealIdsOne);
    

    for (let i = 0; i < mealIdsOne.length; i++) {
        const mealIdx = mealIdsOne[i];
        meal = await getMealById(mealIdx);

        addMealToFav(meal);
    }
}

function addMealToFav(mealData) {
    const favMeal = document.createElement('li');

    favMeal.innerHTML = `
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <span>${mealData.strMeal}</span>
        <button class="clear"><i class="fa fa-times" aria-hidden="true"></i></button>
    `;
    const btn = favMeal.querySelector(".clear")
    btn.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);
        fetchFavMeals();
    })
    favoriteContainer.appendChild(favMeal)
}
function showMealInfo(mealData) {
    // clean it up
    mealInfoE1.innerHTML = "";
    // update the meal Info 
    const mealE1 = document.createElement('div')
    const ingredients = [];
    // get ingredients and measures
    for (let i = 0; i <= 20; i++) {
        if (mealData['strIngredient' +i]) {
            ingredients.push(`${mealData['strIngredient' +i]} - ${mealData['strMeasure' +i]}`);
        } else {
            break;
        }
    } 

    mealE1.innerHTML = `
        <h1>${mealData.strMeal}</h1>
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        <div>
            <p>${mealData.strInstructions}</p>   
        </div>
        <h3>Ingredients:</h3>
        <ul>
            ${ingredients.map((ing) => `
                <li>${ing}</li>
            `.join(""))}
        </ul>
    `;
    // console.log(mealData);
    mealInfoE1.appendChild(mealE1);
    // show the popup
    mealPopup.classList.remove("hidden");
}

searchBtn.addEventListener('click', async () => {

    mealsEl.innerHTML = "";
    const search = searchTerm.value; 
    const meals = await getMealsBysearch(search);
    if (meals) {
        meals.forEach((meal) => {
            addMeal(meal);
        })
    }

});

popupClose.addEventListener("click", () => {
    mealPopup.classList.add("hidden");
})

