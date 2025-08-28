// Part 1: Basics
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.innerText = name + ", you are an adult ✅";
  } else {
    result.innerText = name + ", you are underage ❌";
  }
});

// Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calcBtn").addEventListener("click", function() {
  let price = parseFloat(document.getElementById("price").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  let result = document.getElementById("totalResult");

  if (!isNaN(price) && !isNaN(quantity)) {
    result.innerText = "Total = $" + calculateTotal(price, quantity);
  } else {
    result.innerText = "Please enter valid numbers!";
  }
});

// Part 3: Loops
let fruits = ["🍎 Apple", "🍌 Banana", "🍍 Pineapple"];

document.getElementById("listFruitsBtn").addEventListener("click", function() {
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // clear old list
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.innerText = "Fruit " + (i + 1) + ": " + fruits[i];
    fruitList.appendChild(li);
  }
});

// Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
  let msg = document.getElementById("message");
  msg.innerText = (msg.innerText === "Hello, world!") 
    ? "You clicked the button 🎉" 
    : "Hello, world!";
});
