// console.log('Working...');
const domSelector = (name) => document.querySelector(name);

const slider = domSelector('.pageview__input');
const pageViewValue = domSelector('.pageview__number');
const pageViewAmount = domSelector('.pageview__amount');
const yearlyBillingToggle = domSelector('.yearly__billing__toggle');

let pricingArray = [8, 12, 16, 24, 36];
const pageViews = ['10K', '50K', '100K', '500K', '1M'];

function handleSliderValue(input) {
  return input <= 20
    ? 1
    : input >= 21 && input <= 40
    ? 2
    : input >= 41 && input <= 60
    ? 3
    : input >= 61 && input <= 80
    ? 4
    : 5;
}

function handlePageviewAndAmount() {
  const value = handleSliderValue(slider.value);

  pageViewValue.textContent = pageViews[value - 1];

  pageViewAmount.textContent = yearlyBillingToggle.checked
    ? '$' + (pricingArray[value - 1] * 0.25).toFixed(2)
    : '$' + pricingArray[value - 1].toFixed(2);
}

function handleSliderBG() {
  const percent = slider.value;
  const colorBg = `linear-gradient(90deg, rgb(16, 213, 194) ${percent}%, rgb(234, 238, 251)
  ${percent}%)`;
  slider.style.background = colorBg;
}

yearlyBillingToggle.addEventListener('change', () => handlePageviewAndAmount());
slider.addEventListener('input', () => handlePageviewAndAmount());
slider.addEventListener('input', () => handleSliderBG());
