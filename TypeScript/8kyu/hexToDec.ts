/*
https://www.codewars.com/kata/57a4d500e298a7952100035d
DESCRIPTION:
Complete the function which converts hex number (given 
as a string) to a decimal number.
*/

export function hexToDec(hexString:string):number {
    return parseInt(hexString, 16);
}