// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const sum = v => {
  return nextValue => {
    return nextValue ? sum(nextValue + v) : v;
  };
};

console.log(sum(2)(3)(4)());
