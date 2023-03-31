/*
https://www.codewars.com/kata/5d2659626c7aec0022cb8006
DESCRIPTION:
Wikipedia: https://en.wikipedia.org/wiki/Baum%E2%80%93Sweet_sequence
The Baum–Sweet sequence is an infinite automatic sequence of 0s and 
1s defined by the rule:
bn = 1 if the binary representation of n contains no block of 
consecutive 0s of odd length;
bn = 0 otherwise;
for n ≥ 0.
Define a generator function baum_sweet that sequentially generates 
the values of this sequence.
It will be tested for up to 1 000 000 values.
Note that the binary representation of 0 used here is not 0 but the 
empty string ( which does not contain any blocks of consecutive 0s ).
*/ 

function* baumSweet() {
    for (let i = 0; i < 1000000; i++) {
        yield i.toString(2).split(/1+/).every(el => el.length % 2 == 0 || i == 0) ? 1 : 0;
    }
}