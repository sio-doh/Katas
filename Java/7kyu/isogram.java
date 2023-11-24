// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// DESCRIPTION:
// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only 
// letters is an isogram. Assume the empty string is an 
// isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//     isIsogram "Dermatoglyphics" = true
//     isIsogram "moose" = false
//     isIsogram "aba" = false

public class isogram {
    public static boolean  isIsogram(String str) {
        char[] chars = str.toLowerCase().toCharArray(); 
        for (int i = 0; i < chars.length - 1; i++) {
            for (int j = i + 1; j < chars.length; j++) {
                if (chars[i] == chars[j]) {
                    return false;
                }
            }
        }
        return true;
    } 
}
