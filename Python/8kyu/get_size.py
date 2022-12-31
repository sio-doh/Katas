# https://www.codewars.com/kata/565f5825379664a26b00007c
# DESCRIPTION: 
# Write a function that returns the total surface 
# area and volume of a box as an array: 
# [area, volume]

def get_size(w, h, d):
    volume = d * w * h
    surface_area = 2*(d*w) + 2*(w*h) + 2*(d*h) 
    return [surface_area, volume]
