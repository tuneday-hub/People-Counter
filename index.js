let saveEl = document.getElementById("save-el");
let count = 0;

let countEl = document.getElementById("count-el");

function incrementCount() {
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    let countAmt = count;
    saveEl.textContent += `${countAmt} - `;
    count = 0;
    countEl.textContent = count;
}

let welcomeEl = document.getElementById("welcome-el");

let newName = "Oyelami Babatunde";

let newGreeting = "Welcome back";

myNewGreeting = `${newGreeting} ${newName}`;

welcomeEl.innerText = myNewGreeting;

welcomeEl.innerText = welcomeEl.innerText + " 👋"