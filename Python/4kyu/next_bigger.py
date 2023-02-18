# https://www.codewars.com/kata/55983863da40caa2c900004e
# DESCRIPTION:
# Create a function that takes a positive integer and 
# returns the next bigger number that can be formed by 
# rearranging its digits. For example:
#     12 ==> 21
#     513 ==> 531
#     2017 ==> 2071
# nextBigger(num: 12)   // returns 21
# nextBigger(num: 513)  // returns 531
# nextBigger(num: 2017) // returns 2071
# If the digits can't be rearranged to form a bigger 
# number, return -1 (or nil in Swift):
#     9 ==> -1
#     111 ==> -1
#     531 ==> -1
#     nextBigger(num: 9)   // returns nil
#     nextBigger(num: 111) // returns nil
#     nextBigger(num: 531) // returns nil

def next_bigger(n):
    number = [int(i) for i in str(n)] 
    pos = len(number) - 1 
    next_biggest = float("inf") 
    next_biggest_counter = float("inf") 
    if (len(number) == 1 or number == sorted(number, reverse = True)): return -1
    # from the most-right digit, find first digit 'k' that is smaller than digit in front of it 
    for i in range(len(number) -1, 0, -1):
        if (number[i] > number[i-1]):
            pos -= 1 
            break 
        pos -= 1
    # from k, find next biggest integer 
    for i in range(pos, len(number)): 
        if (number[i] > number[pos] and number[i] < next_biggest): 
            next_biggest = number[i]
            next_biggest_counter = i 
    # swap k and next biggest integer 
    number[pos],number[next_biggest_counter] = number[next_biggest_counter],number[pos]
    # sort from k+1 to the end of the list
    number2 = number[pos+1:]
    number2.sort()
    for i in range(len(number2)): 
        number[i+pos+1] = number2[i]
    number = [str(x) for x in number]
    s = "".join(number)
    return int(s)