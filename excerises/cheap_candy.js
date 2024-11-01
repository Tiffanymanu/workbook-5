let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 

     // TODO:  fill the array with 10 candies of various 
   //        price ranges 
]; 

// Using the new methods you've learned in this module and arrow functions, write code 
// that searches the products array to find:


// Which candies costs less than $4.00? 
 let cheapcandies = products.filter((product) => product.price<=4); 
 console.log(cheapcandies)
// Which candies has "M&M" its name? 
 let candiesWithMM = products.filter((product) => product.product.includes("M&Ms") ) 

 console.log("The candies with M&M in the name are :", candiesWithMM);

// Do we carry "Swedish Fish"?  
let swedishFishCandy = products.find((product) => product.product === "Swedish Fish" ) 
console.log( swedishFishCandy) 