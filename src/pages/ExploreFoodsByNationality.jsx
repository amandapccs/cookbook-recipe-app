import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import { fetchApi } from '../helpers/API';

export default function ExploreFoodsByNationality() {
  const [nationalities, setNationalities] = useState([]);
  const [areaResult, setAreaResult] = useState();

  async function inicialData() {
    const resultApi = await fetchApi();
    setAreaResult(resultApi.meals);
  }

  useEffect(() => {
    inicialData();
  }, []);

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const resolve = await response.json();
      setNationalities(resolve.meals);
    };
    fetchOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNationality = async (option) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${option}`);
    const resolve = await response.json();
    setAreaResult(resolve.meals);
  };

  const handleChange = async ({ target }) => {
    const { value } = target;
    if (value === 'All') {
      return inicialData();
    }
    fetchNationality(value);
  };

  const MAX_LIST = 12;

  return (
    <div>
      <Header title="Explore Nationalities" />
      <select
        data-testid="explore-by-nationality-dropdown"
        id="area"
        onChange={ handleChange }
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {nationalities.map(({ strArea }, i) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ `${strArea}-${i}` }
            value={ strArea }
          >
            { strArea }
          </option>
        ))}
      </select>

      {areaResult
        && areaResult.slice(0, MAX_LIST)
          .map(({ strMeal, strMealThumb, idMeal }, index) => (
            <Card
              key={ index }
              src={ strMealThumb }
              name={ strMeal }
              indexID={ index }
              id={ idMeal }
              path="foods"
            />
          ))}
      <Footer />
    </div>
  );
}
