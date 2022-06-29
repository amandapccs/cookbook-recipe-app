export const addEmailLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const addProfileLocalStorage = (email, img, name) => {
  localStorage.setItem('user', JSON.stringify({ email, img, name }));
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

export const getInProgressRecipes = () => {
  const progressLocal = localStorage.getItem('inProgressRecipes');
  if (progressLocal) {
    return progressLocal;
  }
  const newProgressLocal = { cocktails: { 0: [] }, meals: { 0: [] } };
  // o zero aqui representa o ID da comida
  localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressLocal));
  return localStorage.getItem('inProgressRecipes');
};

// se atentar que pra essa função tá passando só tipo(comida ou bebida,
// uma string), o id(number), e os ingredientes utilizados que deve ser uma array
export const addInProgressRecipes = (type, id, usedIngredients) => {
  const progressLocal = JSON.parse(getInProgressRecipes());
  if (type === 'cocktails') {
    const progressCocktail = progressLocal.cocktails;
    progressCocktail[id] = usedIngredients;
    const progressMeal = progressLocal.meals;
    const newProgress = { cocktails: progressCocktail, meals: progressMeal };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgress));
  }
  if (type === 'meals') {
    const progressMeal = progressLocal.meals;
    progressMeal[id] = usedIngredients;
    const progressCocktail = progressLocal.cocktails;
    const newProgress = { cocktails: progressCocktail, meals: progressMeal };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgress));
  }
};
