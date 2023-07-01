// https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407
// DESCRIPTION:
// I have four positive integers, A, B, C and D, where 
// A < B < C < D. The input is a list of the integers 
// A, B, C, D, AxB, BxC, CxD, DxA in some order. Your 
// task is to return the value of D.

function alphabet(ns) {
    let sorted = ns.sort((a, b) => a - b); 
    for (let i = 2; i < sorted.length; i++) {
        if (sorted[i] == sorted[0] * sorted[1]) {
            [sorted[i], sorted[4]] = [sorted[4], sorted[i]];
        } 
    } 
    if (sorted[2] > sorted[3]) {
        [sorted[2], sorted[3]] = [sorted[3], sorted[2]];
    } 
    for (let i = 3; i < sorted.length; i++) {
        if (sorted[i] == sorted[1] * sorted[2]) {
            [sorted[i], sorted[5]] = [sorted[5], sorted[i]];
        } 
    }
    for (let i = 4; i < sorted.length; i++) {
        if (sorted[i] == sorted[2] * sorted[3]) {
            [sorted[i], sorted[6]] = [sorted[6], sorted[i]];
        } 
    }
    return sorted[3];
}