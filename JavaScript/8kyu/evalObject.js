/*
https://www.codewars.com/kata/55c933c115a8c426ac000082 
DESCRIPTION:
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He 
uses Switch/Cases to evaluate the given properties of 
an object, can you fix timmy's function?
*/ 

function evalObject(value) {
    var result = 0;
    switch(value.operation) {
        case'+': return result = value.a + value.b; 
        case'-': return result = value.a - value.b;
        case'/': return result = value.a / value.b;
        case'*': return result = value.a * value.b;
        case'%': return result = value.a % value.b;
        case'^': return result = Math.pow(value.a, value.b);
    }
    return result;
}
