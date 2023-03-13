
# https://www.codewars.com/kata/5208fc3cb613bc725f000142/
# The function must return the truncated version of the given 
#   string up to the given limit followed by "..." if the result 
#   is shorter than the original. Return the same string if 
#   nothing was truncated.
# Example:
#   solution('Testing String', 3) --> 'Tes...'
#   solution('Testing String', 8) --> 'Testing ...'
#   solution('Test', 8)           --> 'Test'

def solution(st, limit): 
    return st[:limit] + "..." if len(st) > limit else st