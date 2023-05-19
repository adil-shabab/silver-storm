const total = document.querySelector('.total span');
const ticket_type_input = document.getElementById('ticket_type');
const ticket_count_input = document.getElementById('ticket_count');
const meal_input = document.getElementById('meal_plan');
const promo_input = document.getElementById('promo_code');

// const coupons = ['Adil25', 'Adil50', 'Adil75'];
let ticket_type_value = 1199;
let ticket_count_value = 1;
let meal_value = 0;
let promo_code = '';

ticket_type_input.addEventListener('change', () => {
  if (ticket_type_input.value === 'senior') {
    ticket_type_value = 1399;
  } else if (ticket_type_input.value === 'child') {
    ticket_type_value = 899;
  } else if (ticket_type_input.value === 'adult') {
    ticket_type_value = 1199;
  }
  checkTotal();
});

ticket_count_input.addEventListener('input', () => {
  ticket_count_value = ticket_count_input.value;
  checkTotal();
});

meal_input.addEventListener('change', () => {
  if (meal_input.value === 'basic') {
    meal_value = 199 * ticket_count_value;
  } else if (meal_input.value === 'premium') {
    meal_value = 399 * ticket_count_value;
  } else if (meal_input.value === 'none') {
    meal_value = 0;
  }
  checkTotal();
});

promo_input.addEventListener('input', () => {
  promo_code = promo_input.value;
  checkTotal();
});

function applyPromoCode(code, total) {
  if (code === 'Adil25') {
    return total * 0.75; // 25% discount
  } else if (code === 'Adil50') {
    return total * 0.5; // 50% discount
  } else if (code === 'Adil75') {
    return total * 0.25; // 75% discount
  }
  return total;
}

function checkTotal() {
  let sum = ticket_type_value * ticket_count_value + meal_value;
  sum = applyPromoCode(promo_code, sum);
  total.innerText = sum;
}

checkTotal();
