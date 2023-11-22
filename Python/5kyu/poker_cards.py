# https://www.codewars.com/kata/52ebe4608567ade7d700044a
# DESCRIPTION:
# Consider a deck of 52 cards, which are represented by a 
# string containing their suit and face value.
# Your task is to write two functions encode and decode 
# that translate an array of cards to/from an array of 
# integer codes.
#     function encode :
#         input : array of strings (symbols)
#         output : array of integers (codes) sorted in ascending order
#     function decode :
#         input : array of integers (codes)
#         output : array of strings (symbols) sorted by code values
#     ['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
#     [0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
# The returned array must be sorted from lowest to highest 
# priority (value or precedence order, see below).
# Card suits:
#     name    |  symbol   |  precedence
#     ---------------------------------
#     club          c            0
#     diamond       d            1
#     heart         h            2
#     spade         s            3
# 52-card deck:
#     c     |     d     |    h     |    s
#     ----------------------------------------
#     0: A      13: A      26: A      39: A
#     1: 2      14: 2      27: 2      40: 2
#     2: 3      15: 3      28: 3      41: 3
#     3: 4      16: 4      29: 4      42: 4
#     4: 5      17: 5      30: 5      43: 5
#     5: 6      18: 6      31: 6      44: 6
#     6: 7      19: 7      32: 7      45: 7
#     7: 8      20: 8      33: 8      46: 8
#     8: 9      21: 9      34: 9      47: 9
#     9: T      22: T      35: T      48: T
#     10: J      23: J      36: J      49: J
#     11: Q      24: Q      37: Q      50: Q
#     12: K      25: K      38: K      51: K
# My other kata about poker :
# https://www.codewars.com/kata/52ef1c60a863b919ef00025f

codes = {0: "Ac", 13: "Ad", 26: "Ah", 39: "As",
        1: "2c", 14: "2d", 27: "2h", 40: "2s",
        2: "3c", 15: "3d", 28: "3h", 41: "3s",
        3: "4c", 16: "4d", 29: "4h", 42: "4s",
        4: "5c", 17: "5d", 30: "5h", 43: "5s",
        5: "6c", 18: "6d", 31: "6h", 44: "6s",
        6: "7c", 19: "7d", 32: "7h", 45: "7s",
        7: "8c", 20: "8d", 33: "8h", 46: "8s",
        8: "9c", 21: "9d", 34: "9h", 47: "9s",
        9: "Tc", 22: "Td", 35: "Th", 48: "Ts",
        10: "Jc", 23: "Jd", 36: "Jh", 49: "Js",
        11: "Qc", 24: "Qd", 37: "Qh", 50: "Qs",
        12: "Kc", 25: "Kd", 38: "Kh", 51: "Ks"}

def encode(cards): 
    for x in range(len(cards)):
        for k, v in codes.items():
            if cards[x] == v: cards[x] = k
    return sorted(cards)

def decode(cards):
    cards = sorted(cards)
    for x in range(len(cards)):
        cards[x] = codes[cards[x]]
    return cards
