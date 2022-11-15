const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
const token = '113674996471bb7e03f07d988311f8c268d9615d';

export const getAddress = (query) => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify(query),
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.log('error', error));
};
