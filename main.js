
// <article id = "messages">
//     <section class="message">
//       Are we doing fireworks this year?
//     </section>
//     <section class="message">
//       After last year's "tree incident", should we?
//     </section>
//     <section class="message">
//       The fire fighters put it out in like a minute. Wasn't even a real fire.
//     </section>
//     <section class="message">
//       We can set them off in the street.
//     </section>
//     <section class="message">
//       Our neighbors' houses are flammable, too
//     </section>
// </article >

messageArr = [
  'Are we doing fireworks this year?',
  'After last year\'s "tree incident", should we ?',
  'The fire fighters put it out in like a minute. Wasn\'t even a real fire.',
  'We can set them off in the street.',
  'Our neighbors\' houses are flammable, too'
]

const fragment = document.createDocumentFragment();

const createFragment = (elType, content) => {
  let toPrint = document.createElement(elType);
  toPrint.textContent = content;
  fragment.appendChild(toPrint);
  document.querySelector('#messages').appendChild(fragment);
}

for (let i = 0; i < messageArr.length; i++) {
  createFragment("SECTION", messageArr[i]);
}

messageArr.forEach((x) => {
  createFragment("SECTION", x)
}) // brenda gave me an example of how to run a foreach loop over my array of messages

//originally this exercise asked you to type out each message individually, but i made it a function to generate the fragment instead