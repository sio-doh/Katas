// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// DESCRIPTION:
// Your task is to make a function that can take any non-negative 
// integer as an argument and return it with its digits in 
// descending order. Essentially, rearrange the digits to create 
// the highest possible number.
// Examples:
//     Input: 42145 Output: 54421
//     Input: 145263 Output: 654321
//     Input: 123456789 Output: 987654321

public class DescendingOrder {
    public static int sortDesc(final int num) {
        char[] chars = ("" + num).toCharArray(); 
        char temp = ' '; 
        for (int i = 0; i < chars.length; i++) {
            for (int j = 0; j < chars.length - 1 - i; j++) {
                if (chars[j] < chars[j + 1]) {
                    temp = chars[j]; 
                    chars[j] = chars[j + 1]; 
                    chars[j + 1] = temp;
                }
            }
        }
        String str = new String(chars);
        int maxToMin = Integer.parseInt(str); 
        return maxToMin;
    }
} 
