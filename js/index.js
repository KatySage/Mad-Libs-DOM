const myButton = document.getElementById('clickMe');
const placeholders = document.querySelectorAll(".placeholder")
const inputs = document.querySelectorAll("input")
//variables for the for each loops
let newArr = []
let i = 0
myButton.addEventListener('click', function (event) {
  event.preventDefault();
  inputs.forEach(function(input){
    newArr.push(input.value) 
    console.log(newArr) //just to see if it worked
  })
  placeholders.forEach(function(placeholder){
    placeholder.innerHTML = newArr[i];
    ++i; //adds to i to loop through the indices
  })
  
});