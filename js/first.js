//https://forkify-api.herokuapp.com/api/search?&q=${term}
//https://forkify-api.herokuapp.com/api/get?rId=${id}
let searchBtn  = document.getElementById("searchBtn");
let searchInput  = document.getElementById("searchInput");
let RecipeDetails={};
let allRecipes = [];

async function getRecipes(term) {

    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`)
    let finalResult = await apiResponse.json();
    allRecipes = finalResult.recipes;
 
    displayRecipes();
}



function displayRecipes() {

    let cartoona = ``;

    for (let i = 0; i < allRecipes.length; i++) {


        cartoona += `
        <div class="col-md-4">
            <div class="recipe" onclick ="getRecipeDetails(${allRecipes[i].recipe_id})">

              <img src="${allRecipes[i].image_url}" class="w-100" alt="">
              <h5 class="color-mine font-weight-bolder">${allRecipes[i].title}</h5>
              <p class="font-weight-bolder">${allRecipes[i].publisher}</p>
            </div>
        </div>
      
      </div>`;
    }

    document.getElementById('recipesList').innerHTML  =cartoona;
}



searchBtn.addEventListener("click" , function(){

    getRecipes(searchInput.value);
})






async function getRecipeDetails (id)
{
   
    let apiResponse = await fetch (`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    let RecipeDetails = await apiResponse.json();
    RecipeDetails = RecipeDetails.recipes;
    displayRecipeDetails()
}





function displayRecipeDetails()
{
  let cartoona2=``;
  for (let y of RecipeDetails.ingredients)
{
  cartoona2+=` <li><span class="fa-li"><i class="fas fa-utensils"></i></span>${y}</li> `
}
 let cartoona=`<div class="col-md-4">
  <div class="RecipeDetails">
 <h2 class="color-mine py-1">${RecipeDetails.title}</h2>
 <img src="${RecipeDetails.image_url}" class="w-100" alt="" >
<ul class="fa-ul">
${cartoona2}
 </ul>  
</div>`;
document.getElementById("recipesList").innerHTMl = cartoona;

}







