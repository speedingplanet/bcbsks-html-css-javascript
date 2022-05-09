let baseUrl = 'http://localhost:8000/people?_delay=5000';
function getCount() {
  let p = fetch(baseUrl)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      return results.length;
    });

  return p;
}

const dao = {
  getCount,
};

export { dao };
