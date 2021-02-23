// console.log('Working...');
const domSelector = (name) => document.querySelector(name);

const rangeInput = domSelector('.pageview_input');
const pageViewValue = domSelector('.pageview_number');
const pageViewAmount = domSelector('.pageview_amount');
const yearlyBillingToggle = domSelector('.yearly_billing_toggle');

let pricingArray = [8, 12, 16, 24, 36];
const pageViews = ['10K', '50K', '100K', '500K', '1M'];

function handleEvents() {
  const { value } = rangeInput;

  pageViewValue.textContent = pageViews[value - 1];

  pageViewAmount.textContent = yearlyBillingToggle.checked
    ? (pricingArray[value - 1] * 0.25).toFixed(2)
    : pricingArray[value - 1].toFixed(2);
}

yearlyBillingToggle.addEventListener('change', () => handleEvents());
rangeInput.addEventListener('input', () => handleEvents());
