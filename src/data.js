export const getQuotes = ( async () => {
  const apiUrl =
  'https://famous-quotes4.p.rapidapi.com/random?count=2&category=all';
  // Make an api request using Fetch API
  fetch(apiUrl, {
    cache: 'no-cache',
    headers: {
      'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
      'x-rapidapi-key': import.meta.env.VITE_PRIVATE_RAPID_KEY
    }
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => {
      console.error('Error:', error);
  });
});

export default getQuotes;
