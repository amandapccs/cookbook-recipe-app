export const addEmailLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const addMealsToken = (token) => {
  localStorage.setItem('mealsToken', JSON.stringify(token));
};

export const addCocktailsToken = (token) => {
  localStorage.setItem('cocktailsToken', JSON.stringify(token));
};

export const getDoneRecipes = () => {
  const doneLocal = localStorage.getItem('doneRecipes');
  if (doneLocal) {
    return doneLocal;
  }
  localStorage.setItem('doneRecipes', JSON.stringify([]));
  return localStorage.getItem('doneRecipes');
};

export const addDoneRecipes = (repice) => {
  const doneLocal = JSON.parse(getDoneRecipes());
  const newDoneRecipe = {
    id: repice.id,
    type: repice.type,
    nationality: repice.nationality,
    category: repice.category,
    alcoholicOrNot: repice.alcoholicOrNot,
    name: repice.name,
    image: repice.image,
    doneDate: repice.doneDate,
    tags: repice.tags };
  const newDoneLocal = [...doneLocal, newDoneRecipe];
  localStorage.setItem('doneRecipes', JSON.stringify(newDoneLocal));
};
