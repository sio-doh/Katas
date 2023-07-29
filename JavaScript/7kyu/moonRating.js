// https://www.codewars.com/kata/5be8852935da89c5c8000157
// DESCRIPTION:
// When you look at movie ratings, you usually see it as 
// decimal numbers representing average of all viewers'
// votes. While it is very informative, it's not very 
// visually appealing. That's what stars, or in our case- 
// moons, are created for.
// Your task is to transform decimal number rating, which 
// is in range 0-10, into 5-moons scale. Your final rating 
// should be rounded to "0.5" (nearest half moon). Input 
// is always valid.
//     Write a function which returns valid rating represented 
//         as moons ('o','c','x') in single string.

function moonRating(rating) {
    let ans = ""; 
    for (let idx = 0; idx < 5; idx++) {
        if (rating >= 1.5) {
            ans += "o";
        } else if (rating >= 0.5) {
            ans += "c";
        } else {
            ans += "x";
        }
        rating -= 2;
    }
    return ans;
}