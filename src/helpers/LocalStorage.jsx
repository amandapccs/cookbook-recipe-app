export const addEmailLocalStorage = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const addMealsToken = (token) => {
  localStorage.setItem('mealsToken', JSON.stringify(token));
};

export const addCocktailsToken = (token) => {
  localStorage.setItem('cocktailsToken', JSON.stringify(token));
};
