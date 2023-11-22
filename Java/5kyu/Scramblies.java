// https://www.codewars.com/kata/55c04b4cc56a697bb0000048
// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns 
// true if a portion of str1 characters can be rearranged 
// to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation 
// or digits will be included.
// Performance needs to be considered.

import java.util.HashMap; 
import java.util.Map;

public class Scramblies { 

    public static boolean scramble(String str1, String str2) { 
    
    Map<Character, Integer> charMap = new HashMap<>();
    
    for (char c : str1.toCharArray()) {
        if (charMap.containsKey(c)) {
            charMap.put(c, charMap.get(c) + 1);
        } else {
            charMap.put(c, 1);
        }
    }
    
    for (char c: str2.toCharArray()) {
        if (!charMap.containsKey(c)) {
            return false;
        }
        if (charMap.get(c) == 1) {
            charMap.remove(c);
        } else {
            charMap.put(c, charMap.get(c) - 1);
        }
    }
    return true;
    }
}
