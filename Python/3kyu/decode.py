# https://www.codewars.com/kata/52cf02cd825aef67070008fa
# DESCRIPTION 
# General Patron is faced with a problem , his intelligence has 
# intercepted some secret messages from the enemy but they are 
# all encrypted. Those messages are crucial to getting the jump 
# on the enemy and winning the war. Luckily intelligence also 
# captured an encoding device as well. However even the 
# smartest programmers weren't able to crack it though. So the 
# general is asking you , his most odd but brilliant programmer.
# You can call the encoder like this.
#     encode("Hello World!")
# Our cryptoanalysts kept poking at it and found some 
# interesting patterns.
#     print(
#     encode("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
#     print(
#     encode("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"))
#     print(encode("!@#$%^&*()_+-"))
#     a,b,c = "", "", ""
#     for w in "abcdefghijklmnopqrstuvwxyz":
#         a += encode(  "" + w)[0]
#         b += encode( "_" + w)[1]
#         c += encode("__" + w)[2]
#     print(a)
#     print(b)
#     print(c)
# We think if you keep on this trail you should be able 
# to crack the code! You are expected to fill in the decode 
# function. Good luck ! General Patron is counting on you! 

def decode(s):
    key = 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'
    decrypted_message = ''
    i = 0
    for character in s:
        i += 1
        if character not in key:
            decrypted_message += character
            continue
        idx = (key.index(character) - i) % 66
        decrypted_message += key[idx]
    return decrypted_message