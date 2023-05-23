// https://www.codewars.com/kata/51e0007c1f9378fa810002a9
// DESCRIPTION:
// Write a simple parser that will parse and run 
//   Deadfish.
// Deadfish has 4 commands, each 1 character long:
//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array
// Invalid characters should be ignored.
//  parse("iiisdoso") => [ 8, 64 ]

const actions = {
    i: (x) => x + 1, 
    d: (x) => x - 1, 
    s: (x) => x * x, 
}

function parse(data) { 
    let num = 0; 
    let arr = []; 
    data.split("").forEach(action => { 
        if (actions[action]) {
            num = actions[action](num);
        } else if (action === "o") {
            arr.push(num);
        }
    });
    return arr;
}