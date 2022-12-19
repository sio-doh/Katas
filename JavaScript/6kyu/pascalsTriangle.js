/*
https://www.codewars.com/kata/5226eb40316b56c8d500030f
DESCRIPTION: 
In mathematics, Pascal's triangle is a triangular array 
of the binomial coefficients expressed with formula
    (nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}( 
    kn)=k!(n−k)!n!
​where n denotes a row of the triangle, and k is a 
position of a term in the row. 
You can read Wikipedia article on Pascal's Triangle for 
more information: 
https://en.wikipedia.org/wiki/Pascal's_triangle 
Task
    Write a function that, given a depth n, returns n top 
    rows of Pascal's Triangle flattened into a 
    one-dimensional list/array.
Example:
    n = 1: [1]
    n = 2: [1,  1, 1]
    n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
*/ 
function pascalsTriangle(n) { 
    /* 
        let obj = {
            1: [1] 
            2: [1, 1]
            3: [1, 2, 1] 
            4: [1, 3, 3, 1] 
            5: [1, 4, 6, 4, 1]
        }
    */
    if (n === 1) return [1] 
    if (n === 2) return [1, 1, 1]
    let obj = {
        1:[1], 
        2:[1, 1]
    } 
    for (let level = 3; level <= n; ++level) {
        obj[level] = [1];
        for (let i = 1; i <= level - 2; ++i) { 
            const sum = obj[level-1][i] + obj[level-1][i-1];
            obj[level].push(sum);
        }
        obj[level].push(1);
    } 
    result = [];   
    Object.keys(obj).forEach(key=>{
        result.push(...obj[key]); 
    }); 
    return result;
}