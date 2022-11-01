/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824 
DESCRIPTION:
You work in the best consumer electronics corporation, and your boss wants to find out 
which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, 
order them according to their original positions in the input list.
*/
function top3(products, amounts, prices) { 
    // change to array of objects 
    const rev = products.map((product, i) => {
        return {
            name: product, 
            revenue: amounts[i] * prices[i], 
            index: i
        }
    }) 

    // sort by revenue 
    const sorted = rev.sort((a, b) => {
        return b.revenue - a.revenue || a.index - b.index
    })   
    
    // get the names of the first three objects 
    return sorted.slice(0, 3).map(product => {
        return product.name
    })
} 

top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])