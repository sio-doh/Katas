# https://www.codewars.com/kata/5839c48f0cf94640a20001d3
# DESCRIPTION:
# Given an array arr of strings, complete the function by calculating 
# the total perimeter of all the islands. Each piece of land will be 
# marked with 'X' while the water fields are represented as 'O'. 
# Consider each tile being a perfect 1 x 1 piece of land. Some 
# examples for better visualization:
#     ['XOOXO',
#     'XOOXO',
#     'OOOXO',
#     'XXOXO',
#     'OXOOO'] 
# should return: "Total land perimeter: 24".
# Following input:
#     ['XOOO',
#     'XOXO',
#     'XOXO',
#     'OOXX',
#     'OOOO']
# should return: "Total land perimeter: 18"

def land_perimeter(arr):
    total_perimeter = 0 
    for i in range(len(arr)):
        for j in range(len(arr[i])): 
            if arr[i][j] == "X":
                total_perimeter += 4 
                if j > 0 and arr[i][j-1] == "X":
                    total_perimeter -= 1 
                if j < (len(arr[i])-1) and arr[i][j+1] == "X":
                    total_perimeter -= 1
                if i > 0 and arr[i-1][j] == "X":
                    total_perimeter -= 1
                if i < (len(arr)-1) and arr[i+1][j] == "X": 
                    total_perimeter -= 1
    return f'Total land perimeter: {total_perimeter}'
