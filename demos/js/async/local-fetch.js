/* eslint-disable n/handle-callback-err */
let baseUrl = 'http://localhost:8001/users';

let responsePromise = fetch(baseUrl);

// promise.then(successCallback, errorCallback)
responsePromise
  .then((response) => {
    if (response.ok) {
      console.log('Promise returned successfully!');
      return response.json();
    } else {
      throw new Error('Bad response code: ', response.status);
    }
  })
  .then((data) => {
    console.log(`There are ${data.length} records.`);
  })
  .catch((error) => {
    console.log('Something went wrong with the promise!');
  });
