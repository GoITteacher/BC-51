export function searchHero(hero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api';
  const PATH = '/';
  const PARAMS = new URLSearchParams({
    hero: hero,
  });

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };
  const url = `${BASE_URL}${PATH}?${PARAMS}`;

  return fetch(url, options).then(res => res.json());
}
