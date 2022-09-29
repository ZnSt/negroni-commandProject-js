import axios from 'axios';
export default async function fetchRandomCocktail() {
  const res = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );

  responseDrink = res?.data?.drinks[0];
  //   console.log(responseDrink.idDrink);
  return responseDrink;
}
