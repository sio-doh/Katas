/*
https://www.codewars.com/kata/634d0f7c562caa0016debac5
DESCRIPTION:
Given two Arrays in which values are the power of each 
soldier, return true if you survive the attack or false 
if you perish.
CONDITIONS

Each soldier attacks the opposing soldier in the same 
index of the array. The survivor is the number with the 
highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) 
the non-empty value soldier survives.
To survive the defending side must have more survivors 
than the attacking side.
In case there are the same number of survivors in both 
sides, the winner is the team with the highest initial 
attack power. If the total attack power of both sides 
is the same return true.
The initial attack power is the sum of all the values 
in each array.
EXAMPLES
attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true
attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false
attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true
*/ 

function hasSurvived(attackers, defenders) {
    let countA = 0, 
        countD = 0;
    for (let i = 0; i < attackers.length || i < defenders.length; i++) {
        if (attackers[i] > defenders[i] || defenders[i] == undefined) {
            countA++;
        } else if (defenders[i] > attackers[i] || attackers[i] == undefined) {
            countD++;
        }
    } 
    if (countA == countD) {
        let sumA = attackers.reduce((a, b) => a + b, 0), 
            sumD = defenders.reduce((a, b) => a + b, 0)
        if (sumA > sumD) {
            return false;
        }
        return true;
    }
    return countD > countA;
}