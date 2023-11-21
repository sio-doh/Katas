# https://www.codewars.com/kata/59c03f175fb13337df00002e
# DESCRIPTION:
# Make me a window. I'll give you a number (N). You return a window.

# Rules:
# The window will always be 2 x 2.
# The window needs to have N number of periods across and N 
#     number of periods vertically in each pane.
# Example:
#     N = 3

#     ---------
#     |...|...|
#     |...|...|
#     |...|...|
#     |---+---|
#     |...|...|
#     |...|...|
#     |...|...|
#     ---------
# Note: there should be no trailing new line characters 
#     at the end.

def make_a_window(num): 
    window_part = ""
    for x in range(num):
        dots = "." * num
        window_part += f"|{dots}|{dots}|\n"
    dashes = "-" * num 
    middle = f"|{dashes}+{dashes}|\n"
    dashes_outside = "-" * (num*2+3)
    return f"{dashes_outside}\n{window_part}{middle}{window_part}{dashes_outside}"
