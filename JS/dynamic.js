// const h1 = document.querySelector("h1");
// h1.innerText = "Hello JavaScript";

// const customDiv = document.getElementById("customDiv");
// customDiv.innerText = "Lets Learn Angular";
// customDiv.innerHTML = "<h2>Lets Learn React</h2>";

// const h2 = document.createElement("h2");
// h2.textContent = "Hello, How Are You";
// console.log(h2);

// customDiv.appendChild(h2);



// Example 
// const div = document.querySelector("div");

// const input = document.createElement("input");
// input.value = "Angular Course";
// input.type = "text";

// input.placeholder = "Enter Some Content";
// input.id = "course_field";

// const h1 = document.createElement("h1");
// h1.innerText = "Dynamic Content In HTML";

// const button = document.createElement("button");
// button.textContent = "Click Me";

// div.appendChild(h1);
// div.appendChild(input);
// div.appendChild(button);

// button.addEventListener("click", function () {
//   window.alert("Hey, This is a button");
// });


function dateCreator() {
  const div = document.querySelector("div");
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  div.appendChild(dateInput);
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  dateCreator();
});