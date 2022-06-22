export async function fetchApi() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const resolve = await response.json();
  return resolve;
}
export async function fetchApiDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const resolve = await response.json();
  return resolve;
}
