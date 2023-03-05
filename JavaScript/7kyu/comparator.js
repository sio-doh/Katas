/*
https://www.codewars.com/kata/57dd3a06eb0537b899000a64
DESCRIPTION:
Oh No!
The song sheets have been dropped in the snow and the 
lines of each verse have become all jumbled up.
Task
You have to write a sorting function which can organize 
the lines back into their correct order, otherwise 
Christmas will be cancelled!
Reminder: Below is what the final verse should look 
like
    On the 12th day of Christmas my true love gave to me
    12 drummers drumming,
    11 pipers piping, 
    10 lords a leaping, 
    9 ladies dancing, 
    8 maids a milking,
    7 swans a swimming, 
    6 geese a laying, 
    5 golden rings, 
    4 calling birds,
    3 French hens, 
    2 turtle doves and 
    a partridge in a pear tree.
Background
A Java comparator function is described as below. Other 
languages are similar:
https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html
int compare(T o1, T o2) Compares its two arguments for order. 
Returns a negative integer, zero, or a positive integer as the 
first argument is less than, equal to, or greater than the second.
*/ 

var comparator = (a, b) =>
    a[0] == "O" || b[0] == "a" ? -1 :
    a[0] == "a" || b[0] == "O" ? 1 :
    Number.parseInt(a) > Number.parseInt(b) ? -1 : 1
