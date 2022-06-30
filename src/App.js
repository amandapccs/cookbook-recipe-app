import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import FoodDetails from './pages/RecipeDetails/FoodDetails';
import DrinkDetails from './pages/RecipeDetails/DrinkDetails';
import FoodProgress from './pages/Progress/FoodProgress';
import DrinkProgress from './pages/Progress/DrinkProgress';
import Explore from './pages/Explore/Explore';
import ExploreFoods from './pages/Explore/ExploreFoods';
import ExploreDrinks from './pages/Explore/ExploreDrinks';
import ExploreFoodsByIngredients from './pages/ByIngredients/ExploreFoodsByIngredients';
import ExploreDrinksByIngredients from './pages/ByIngredients/ExploreDrinksByIngredients';
import ExploreFoodsByNationality from './pages/ByNationalities/ExploreFoodsByNationality';
import Profile from './pages/Profile/Profile';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/foods" component={ FoodPage } />
          <Route exact path="/drinks" component={ DrinkPage } />
          <Route exact path="/foods/:id" component={ FoodDetails } />
          <Route exact path="/drinks/:id" component={ DrinkDetails } />
          <Route exact path="/foods/:id/in-progress" component={ FoodProgress } />
          <Route exact path="/drinks/:id/in-progress" component={ DrinkProgress } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsByIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksByIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsByNationality }
          />
          <Route
            exact
            path="/explore/drinks/nationalities"
            component={ NotFound }
          />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
