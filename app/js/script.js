// console.log('Working...');
const domSelector = (name) => document.querySelector(name);

const rangeInput = domSelector('.pageview_input');
const pageViewValue = domSelector('.pageview_number');

rangeInput.addEventListener('input', function () {
  pageViewValue.textContent = rangeInput.value;
});
