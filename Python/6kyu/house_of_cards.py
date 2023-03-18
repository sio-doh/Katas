

import math

def house_of_cards(floors): 
    print(floors)
    if floors <= 0: 
        raise ValueError("Floors should be greater than 0")
    card_count = 0
    for f, t in zip(range(1, floors + 2), reversed(range(1, floors + 2))):
        if t != 1: 
            card_count += 2 * t + (t - 1)
        else: 
            card_count += 2 * t
    return card_count
