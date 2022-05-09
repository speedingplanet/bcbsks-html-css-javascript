import { people } from './data.js';

for ( let person of people ) {
  if ( person.startsWith( 'Jenny' ) ) {
    continue;
  }

  if ( person === 'John Doe' ) {
    break;
  }
  console.log( 'person: ', person );
  // if ( person.includes( ' S' ) ) {
  // if ( person.split( ' ' )[1].startsWith( 'S' ) ) {
  if ( / S/.test( person ) ) {
    console.log( 'Hey, your last name start with "s"!' );
  }
}
