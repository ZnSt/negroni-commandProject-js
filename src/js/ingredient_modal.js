import axios from 'axios';

// const BASE_URL =
//   'http://www.thecocktaildb.com/api/json/v1/1/random.php?s=margarita';

export async function getElement() {
  try {
    const response = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
    const data = response.drinks;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
