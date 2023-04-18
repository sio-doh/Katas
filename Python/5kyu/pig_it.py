# https://www.codewars.com/kata/520b9d2ad5c005041100000f 
# DESCRIPTION:
# Move the first letter of each word to the end of it, then 
# add "ay" to the end of the word. Leave punctuation marks 
# untouched.
# Examples
#     pig_it('Pig latin is cool') # igPay atinlay siay oolcay
#     pig_it('Hello world !')     # elloHay orldway !

import string 

def pig_it(text):
    pig_latin = ""
    for word in text.split():
        if word not in string.punctuation:
            pig_latin += word[1:] + word[0] + "ay "
        else: 
            pig_latin += word
    return pig_latin.strip()
