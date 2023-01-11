/*
https://www.codewars.com/kata/5899f1df27926b7d000000eb/
DESCRIPTION: 
Your task: Given a number of rings, return the MINIMUM 
number of moves needed to move all the rings from one 
tower to another.
Reference: 
https://www.mathsisfun.com/games/towerofhanoi.html 
Note
This problem may seem very complex, but in reality 
there is an amazingly simple formula to calculate 
the minimum number. Just Learn how to solve the 
problem via the above link (if you are not familiar 
with it), and then think hard. Your solution should 
be in no way extraordinarily long and complex. The 
kata ranking is for figuring out the solution, but 
the coding skills required are minimal.
*/

function towerOfHanoi(rings) {
    return 2 ** rings - 1;
}