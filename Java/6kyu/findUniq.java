// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// DESCRIPTION:
// There is an array with some numbers. All numbers are equal 
// except for one. Try to find it!
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//     findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about 
// performance.

import java.util.Arrays; 

public class Kata { 

    public static double findUniq(double arr[]) { 
        Arrays.sort(arr);
        return arr[0] == arr[1] ? arr[arr.length-1]:arr[0];
    }
}
