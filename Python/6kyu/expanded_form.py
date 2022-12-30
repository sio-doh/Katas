# https://www.codewars.com/kata/5842df8ccbd22792a4000245
# DESCRIPTION:
# Write Number in Expanded Form
# You will be given a number and you will need to return it 
# as a string in Expanded Form: 
# https://www.mathsisfun.com/definitions/expanded-notation.html 
# For example:
#     expanded_form(12) # Should return '10 + 2'
#     expanded_form(42) # Should return '40 + 2'
#     expanded_form(70304) # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.
# If you liked this kata, check out part 2!! 
# https://www.codewars.com/kata/write-number-in-expanded-form-part-2

def expanded_form(num):
    num = str(num) 
    st = '' 
    for j, i in enumerate(num): 
        if i != '0': 
            st += ' + {}{}'.format(i, len(num[j+1:])*'0') 
    return st.strip(' + ')