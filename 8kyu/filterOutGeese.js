/* 
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7 
DESCRIPTION:
Write a function that takes a list of strings as an argument and 
returns a filtered list containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, 
which is pre-populated in your solution:
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as 
in the initial array passed to your function, albeit with the 'geese' removed. 
Note that all of the strings will be in the same case as those provided, 
and some elements may be repeated.
*/ 
function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"] 
    // filter birds -> for every bird that is not contained in 'geese'
    // we return true -> add it to the result
    const filtered = birds.filter(function (bird) {
        return !geese.includes(bird)
    })
    return filtered 
}; 