/*

*/ 

function permuteAPalindrome(input) { 
    return [...input].sort().join("").replace(/(.)\1/g, "").length < 2; 
}  