https://www.codewars.com/kata/5a03b3f6a1c9040084001765 
DESCRIPTION:
Find the total sum of internal angles (in degrees) in an 
n-sided simple polygon. N will be greater than 2.

pragma solidity ^0.8.16;

contract Kata { 
    function angle(uint n) public pure returns (uint) { 
        require(n > 2, "Polygon must have at least 3 sides");
        return (n - 2) * 180;
    }
} 