/*
https://www.codewars.com/kata/56968ce7753513604b000055
DESCRIPTION:
Your task is to calculate the maximum possible height 
of a perfectly square pyramid (the number of complete 
layers) that we can build, given n number of cubes as 
the argument.
    The top layer is always only 1 cube and is always 
        present.
    There are no hollow areas, meaning each layer must 
        be fully populated with cubes.
    The layers are thus so built that the corner cube 
        always covers the inner 25% of the corner cube 
        below it and so each row has one more cube than 
        the one below it.
If you were given only 5 cubes, the lower layer would 
have 4 cubes and the top 1 cube would sit right in the 
middle of them, where the lower 4 cubes meet.
If you were given 14 cubes, you could build a pyramid 
of 3 layers, but 13 wouldn't be enough as you would be 
missing one cube, so only 2 layers would be complete 
and some cubes left over!
What is the tallest pyramid possible we can build from 
the given number of cubes? Simply return the number of 
complete layers.
Examples
    4  -->  1
    5  -->  2
    13  -->  2
    14  -->  3
*/

function pyramidHeight(n) {
    let blocks = 0, 
    count = -1; 
    for (let i = 1; blocks <= n; i++) {
        blocks += i * i; 
        count++;
    }
    return count;
}
