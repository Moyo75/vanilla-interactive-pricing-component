// console.log('Working...');
const domSelector = (name) => document.querySelector(name);

const rangeInput = domSelector('.pageview_input');
const pageViewValue = domSelector('.pageview_number');
const pageViewAmount = domSelector('.pageview_amount');
const yearlyBillingToggle = domSelector('.yearly_billing_toggle');

let pricingArray = [8, 12, 16, 24, 36];
const pageViews = [10, 50, 100, 500, 1000];

// console.log(pricingArray);

rangeInput.oninput = function () {
  pageViewValue.textContent = this.value;

  pageViews.forEach((view, index) => {
    if (this.value == pageViews[index]) {
      pageViewAmount.textContent =
        yearlyBillingToggle.checked === true
          ? (pricingArray[index] * 0.25).toFixed(2)
          : pricingArray[index].toFixed(2);
    }
  });
};
