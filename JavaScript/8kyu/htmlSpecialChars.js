/*
https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
DESCRIPTION:
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous 
Web Developer (choose one) who owns a(n) 
simple/clean/slick/beautiful/complicated/professional/business 
website (choose one or more) which contains form fields so 
visitors can send emails or leave a comment on your website with 
ease. However, with ease comes danger. Every now and then, a 
hacker visits your website and attempts to compromise it through 
the use of XSS (Cross Site Scripting). This is done by injecting 
script tags into the website through form fields which may 
contain malicious code (e.g. a redirection to a malicious website 
that steals personal information).
Mission
Your mission is to implement a function that converts the 
following potentially harmful characters:
    1. < --> &lt;
    2. > --> &gt;
    3. " --> &quot;
    4. & --> &amp;
*/ 

function htmlspecialchars(formData) {
    return formData.replace(/[<>"&]/g, replacerFunction => ({'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'})[replacerFunction]);
}