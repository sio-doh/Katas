/*
https://www.codewars.com/kata/563a5f4366fbf8cc6e00008b/
DESCRIPTION: 
Terminal game combat function
Create a combat function that takes the player's 
current health and the amount of damage received, 
and returns the player's new health.
*/

combat = (health, damage) => damage > health ? 0 : health - damage;