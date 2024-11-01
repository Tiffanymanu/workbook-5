"use strict" 

function compareAscendingNumber(a, b) { 
    if (a < b) return -1; 
    else if (a == b) return 0;   
else return 1;  
}  
let numbers = [3, 27, 400, 1, 111, 5]; 
numbers.sort(compareAscendingNumber);