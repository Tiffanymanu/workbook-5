"use strict";
// forEach() = method used to iterate over the elements of an array and apply a specified function (callback)
//  to each element

// array.forEach(callback)
// element, index, array are provided
// EXAMPLE FROM YOUTUBE BELOW 
let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(upperCase)
fruits.forEach(display) 

function display(element) {
  console.log(element);
} 

function upperCase(element,index,array){
    array[index]= element.toUpperCase()
}
///////////// EXAMPLE NUMBER 2  ////////////////////////
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

//  Example 3  
let kids = [ 
  { first : "Natalie", last : "Plyers" }, 
  { first: "Brittany", last: "Ray" }, 
  { first: "Zachary", last: "Westly" } 
  ]; 

  // /anonymous function as callback function passed to forEach function
  kids.forEach(function (kid) {
    console.log(kid.first);
  });
  
  //arrow function as callback function passed to forEach function
  kids.forEach((kid) => console.log(kid.first));