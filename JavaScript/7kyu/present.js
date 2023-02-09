/*
https://www.codewars.com/kata/5805f0663f1f9c49be00011f
DESCRIPTION:
Your colleagues have been good enough(?) to buy you a 
birthday gift. Even though it is your birthday and not 
theirs, they have decided to play pass the parcel with 
it so that everyone has an even chance of winning. 
There are multiple presents, and you will receive 
one, but not all are nice... One even explodes and 
covers you in soil... strange office. To make up for 
this one present is a dog! Happy days! (do not buy 
dogs as presents, and if you do, never wrap 
them).
Depending on the number of passes in the game (y), and 
the present you unwrap (x), return as follows:
x == goodpresent --> return x with num of passes added 
to each charCode (turn to charCode, add y to each, turn 
back)
x == crap || x == empty --> return string sorted 
alphabetically
x == bang --> return string turned to char codes, each 
code reduced by number of passes and summed to a single 
figure
x == badpresent --> return 'Take this back!'
x == dog, return 'pass out from excitement y times' 
(where y is the value given for y).
*/

const present = (x, y) => 
    x == "goodpresent" ? x.split("")
                        .map(el => 
                            String.fromCharCode(el.charCodeAt() + y))
                        .join("") :
    x == "crap" ? "acpr" : 
    x == "empty" ? x : 
    x == "bang" ? x.split("")
                    .map(el => el.charCodeAt() - y)
                    .reduce((a, b) => a + b) :
    x == "badpresent" ? "Take this back!" : 
        "pass out from excitement " + y + " times";
