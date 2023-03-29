/*
https://www.codewars.com/kata/6387ea2cf418c41d277f3ffa 
DESCRIPTION:
To complete this kata you will have to finish a function 
that returns a string of characters which when printed 
resemble a Rubik's cube. The function is named cube, and 
it has one integer parameter (formal argument) n, for the 
dimensions of the cube.
For example, when I call the function cube(3) it will return 
a string which when printed appears as so:
    /\_\_\_\
    /\/\_\_\_\
    /\/\/\_\_\_\
    \/\/\/_/_/_/
    \/\/_/_/_/
    \/_/_/_/
There are no spaces to the right of the cube edges (same above 
and below the cube), and it must work for all dimensions greater 
than, or equal to one (technically 1 x 1 x 1):
1 x 1 x 1
    /\_\
    \/_/
2 x 2 x 2
    /\_\_\
    /\/\_\_\
    \/\/_/_/
    \/_/_/
*/

const cube = n =>
    [
    ...Array.from({length: n}, (_, i) => " ".repeat(n - 1 - i) +  
                                        "/\\".repeat(i + 1) + 
                                        "_\\".repeat(n))
    ,...Array.from({length: n}, (_, i) => " ".repeat(i) +
                                        "\\/".repeat(n - i) +
                                        "_/".repeat(n))
    ].join("\n")
