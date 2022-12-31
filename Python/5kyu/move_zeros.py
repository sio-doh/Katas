# https://www.codewars.com/kata/52597aa56021e91c93000cb0
# DESCRIPTION: 
# Write an algorithm that takes an array and moves all of 
# the zeros to the end, preserving the order of the 
# other elements.
#     move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    new_lst = []
    count = 0 
    for i in lst: 
        if (i == 0): 
            count += 1 
            continue 
        new_lst.append(i)
    for i in range(count): 
        new_lst.append(0)
    return new_lst