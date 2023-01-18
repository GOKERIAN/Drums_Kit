
const message = document.querySelector('.message');
const el = document.querySelector('.transition');

// el.addEventListener('transitionrun', () => {
//   message.textContent = 'transition_RUN Fired';
// });



// el.addEventListener('transitioncancel', () => {
//   message.textContent = 'transition_CANCELED Fired';
// });

el.addEventListener('transitionend', () => {
  message.textContent = 'transition_END Fired';
});

el.addEventListener('transitionstart', () => {
  message.textContent = 'transition_START Fired';
});