/* 
https://www.codewars.com/kata/513e08acc600c94f01000001 
DESCRIPTION:
The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result 
in a hexadecimal representation being returned. Valid decimal values 
for RGB are 0 - 255. Any values that fall out of that range must be 
rounded to the closest valid value.

Note: Your answer should always be 6 characters long, 
the shorthand with 3 will not work here.

The following are examples of expected output values:
    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b){
    return hexToRgb(r) + hexToRgb(g) + hexToRgb(b)
}

const hexToRgb = (rgbValue) => {
    if (rgbValue <= 0) return '00'
    if (rgbValue >= 255) return 'FF' 
    
    firstHex = parseInt(rgbValue / 16) 
    secondHex = ((rgbValue / 16) - firstHex) * 16
    
    return getHexValue(firstHex) + getHexValue(secondHex)
}

const getHexValue = (digit) => {
    const rgbToHex = {
        '0': '0', 
        '1': '1',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F'
    }
    return rgbToHex[digit.toString()]
}