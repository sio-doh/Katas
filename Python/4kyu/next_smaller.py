# https://www.codewars.com/kata/5659c6d896bc135c4c00021e
# DESCRIPTION:
# Write a function that takes a positive integer and returns 
# the next smaller positive integer containing the same 
# digits.
# For example:
#     next_smaller(21) == 12
#     next_smaller(531) == 513
#     next_smaller(2071) == 2017
# Return -1 (for Haskell: return Nothing, for Rust: return 
# None), when there is no smaller number that contains the 
# same digits. Also return -1 when the next smaller number 
# with the same digits would require the leading digit to 
# be zero.
#     next_smaller(9) == -1
#     next_smaller(135) == -1
#     next_smaller(1027) == -1  # 0721 is out since we don't write numbers with leading zeros
# some tests will include very large numbers.
# test data only employs positive integers.
# The function you write for this challenge is the inverse 
# of this kata: "Next bigger number with the same digits."
# https://www.codewars.com/kata/next-bigger-number-with-the-same-digits 

def next_smaller(n):
    number = [int(i) for i in str(n)]
    next_smallest = float("-inf")
    next_smallest_counter = float("-inf")
    pos = len(number) - 1 
    if (len(number) == 1 or number == sorted(number)): 
        return -1
    # first number, k, that is greater than previous digit
    for i in range(len(number)-1,0,-1):
        if (number[i] < number[i-1]): 
            pos -= 1 
            break 
        pos -= 1
    # next smallest number starting from k+1 to the end of the list 
    for i in range(pos, len(number)): 
        if (number[i] < number[pos] and number[i] > next_smallest): 
            next_smallest = number[i]
            next_smallest_counter = i
    # swap k and the next smallest number 
    number[pos], number[next_smallest_counter] = number[next_smallest_counter], number[pos]
    # sort from the index where you found k+1 to the end of the list 
    numbers2 = number[pos+1:]
    numbers2.sort(reverse = True) 
    for i in range(len(numbers2)):
        number[i+pos+1] = numbers2[i] 
    number = [str(x) for x in number]
    s = "".join(number) 
    return int(s) if s[0] != "0" else -1