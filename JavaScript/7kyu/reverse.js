/*
https://www.codewars.com/kata/5413759479ba273f8100003d 
DESCRIPTION:
Write a function reverse which reverses a list (or in 
    clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are 
deactivated).
*/ 

function reverse(array) { 
    let answer = [];
    for (let i = array.length-1; i >= 0; i--) {
        answer.push(array[i])
    }
    return answer; 
} 