/*
https://www.codewars.com/kata/583710ccaa6717322c000105
DESCRIPTION:
This kata is about multiplying a given number by eight 
if it is an even number and by nine otherwise.
*/ 

export function simpleMultiplication(num: number): number {
    return num % 2 ? num * 9 : num * 8;
}