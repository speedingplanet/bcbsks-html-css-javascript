// eslint-disable-next-line no-unused-vars
import { buildList } from './lab-09-dom.js';
import { dao } from './lab-09-dao.js';

/*
dao.getCount().then( ( count ) => {
  document.querySelector(
    '.async-status',
  ).textContent = `There are ${count} people.`;
} );
*/

async function customGetCount() {
  try {
    let count = await dao.getCount();
    document.querySelector(
      '.async-status',
    ).textContent = `(async-await) There are ${count} people.`;
  } catch ( error ) {
    console.error( 'Something went wrong: ', error );
  }
}

customGetCount();
