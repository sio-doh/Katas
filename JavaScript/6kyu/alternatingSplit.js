/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786
DESCRIPTION: 
Implement a pseudo-encryption algorithm which given a 
string S and an integer N concatenates all the 
odd-indexed characters of S with all the even-indexed 
characters of S, this process should be repeated N 
times.
Examples:
    encrypt("012345", 1)  =>  "135024"
    encrypt("012345", 2)  =>  "135024"  ->  "304152"
    encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

    encrypt("01234", 1)  =>  "13024"
    encrypt("01234", 2)  =>  "13024"  ->  "32104"
    encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also 
implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not 
positive, return the first argument without changes.
*/
function encrypt(text, n) {
    if (n <= 0 || !text || !text.length) {
        return text;
    }
    
    let result = "";
    let other = "";
    
    for (let i = 0; i < text.length; ++i) {
        if (i %2 == 0) {
            other += text[i];
        } else {
            result += text[i];
        }
    }
    return encrypt(result + other, --n);
}

function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText || !encryptedText.length) {
        return encryptedText;
    }
    
    let first = encryptedText.slice(0, encryptedText.length / 2); 
    let second = encryptedText.slice(encryptedText.length / 2);  
    let result = "";
    
    for (let i = 0; i < encryptedText.length; i++) {
        if (i % 2) {
            result += first[0];
            first = first.slice(1);
        } else {
            result += second[0];
            second = second.slice(1);
        }
    }
    
    return decrypt(result, --n);
}