/*

*/ 

function nextPrime(n) {
    if (++n < 2) {
        return 2;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return nextPrime(n);
        }
    } 
    return n;
}