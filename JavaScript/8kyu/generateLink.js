/*
https://www.codewars.com/kata/57037ed25a7263ac35000c80
DESCRIPTION:
Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.
Example
    generate_link('matt c')
    http://www.codewars.com/users/matt%20c
reference
use this as a reference
https://www.w3schools.com/tags/ref_urlencode.asp
*/ 

function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}