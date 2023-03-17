//CREATING LOCALSTORAGE
const itemArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(itemArray);

function createItem(inputTxt) {
  itemArray.push(inputTxt.value);
  localStorage.setItem("items", JSON.stringify(itemArray));
  location.reload();
}

var list = document.querySelector("#list");
var inputTxt = document.querySelector("#txt");

inputTxt.addEventListener("keyup", function (event) {
  if (inputTxt.value === "") {
    alert("You must write something");
  } else {
    var li = document.createElement("li");

    if (event.key == "Enter") {
      li.innerText = inputTxt.value;
      list.appendChild(li);

      var cross = document.createTextNode("\u00D7");
      var span = document.createElement("span");
      span.appendChild(cross);
      span.style.cursor = "pointer";
      span.style.float = "right";
      span.style.paddingRight = "20px";
      li.appendChild(span);
      span.addEventListener("click", function () {
        li.style.display = "none";
      });

      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      var span1 = document.createElement("span");
      span1.appendChild(checkBox);
      li.appendChild(span1);
      span1.style.float = "right";
      span1.style.paddingRight = "15px";

      inputTxt.value = "";

      //createItem(inputTxt);
    }

    checkBox.addEventListener("change", function () {
      li.classList.toggle("completed");
    });
  }
});
