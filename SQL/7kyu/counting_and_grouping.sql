-- https://www.codewars.com/kata/594633020a561e329a0000a2
-- DESCRIPTION:
-- Given a demographics table in the following format:
-- ** demographics table schema **
--     id
--     name
--     birthday
--     race
-- you need to return a table that shows a count of each 
-- race represented, ordered by the count in descending 
-- order as:
-- ** output table schema **
--     race
--     count

SELECT COUNT(d.race) AS count, d.race
FROM demographics d 
GROUP BY d.race 
ORDER BY count DESC;