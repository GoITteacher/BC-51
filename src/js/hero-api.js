export function getSuperHero (name) {
    const BASE_URL =  'https://superhero-search.p.rapidapi.com/';
    const END_POINT = 'api/?';
    const params = new URLSearchParams ({
        hero: name,
    });
    const options = {
        headers: {
            'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    }

    return fetch(`${BASE_URL}${END_POINT}${params}`, options).then(response => {
        return response.json()
    })

}