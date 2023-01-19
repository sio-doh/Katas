/*
https://www.codewars.com/kata/584703d76f6cf6ffc6000275 
DESCRIPTION:
Given a set of elements (integers or string characters, 
characters only in RISC-V), where any element may occur 
more than once, return the number of subsets that do 
not contain a repeated element.
Let's see with an example:
    set numbers = {1, 2, 3, 4}
The subsets are:
    {{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, 
    {2,4}, {3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, 
    {1,2,3,4}}
There are 15 subsets. As you can see, the empty set, 
{}, is not counted.
Let's see an example with repetitions of an element:
*/ 

const estSubsets = arr => 2 ** new Set(arr).size - 1;
