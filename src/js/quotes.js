
export function getQuotes () {
const BASE_URL = 'https://quotes15.p.rapidapi.com';
const END_POINT = '/quotes/random/';

const options = {
    headers: {
		'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
}

return fetch(`${BASE_URL}${END_POINT}`,options).then(response => {
    return response.json();
})

}