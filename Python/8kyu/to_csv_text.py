# https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
# DESCRIPTION:
# Create a function that returns the CSV representation 
# of a two-dimensional numeric array.
# Example:
# input: 
#     [[ 0, 1, 2, 3, 4 ],
#      [ 10,11,12,13,14 ],
#      [ 20,21,22,23,24 ],
#      [ 30,31,32,33,34 ]] 
    
# output:
#      '0,1,2,3,4\n'
#     +'10,11,12,13,14\n'
#     +'20,21,22,23,24\n'
#     +'30,31,32,33,34'
# Array's length > 2.
# More details here: 
# https://en.wikipedia.org/wiki/Comma-separated_values

def to_csv_text(array):
    csvStr = ""
    for arr in array:
        for x in range(len(arr) - 1):
            csvStr += str(arr[x]) + ","
        csvStr += str(arr[-1]) 
        csvStr += "\n" 
    return csvStr[:-1]
