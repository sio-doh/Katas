-- https://www.codewars.com/kata/582cb0224e56e068d800003c
-- DESCRIPTION:
-- Nathan loves cycling.
-- Because Nathan knows it is important to stay hydrated, 
-- he drinks 0.5 litres of water per hour of cycling.
-- You get given the time in hours and you need to return 
-- the number of litres Nathan will drink, rounded to the 
-- smallest value.
-- For example:
--     hours = 3 ----> liters = 1
--     hours = 6.7---> liters = 3
--     hours = 11.8--> liters = 5
-- You have to return 3 columns: id, hours and liters (not 
-- litres, it's a difference from the kata description)

SELECT *, FLOOR(hours * 0.5) AS liters  
FROM cycling;