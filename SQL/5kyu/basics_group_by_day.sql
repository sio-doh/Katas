-- https://www.codewars.com/kata/5811597e9d278beb04000038 
-- DESCRIPTION:
-- There is an events table used to track different key 
-- activities taken on a website. For this task you need 
-- to:
--     find the entries whose name equals "trained"
--     group them by the day the activity happened (the date part of the created_at timestamp) and their description's
--     the 2 aforementioned fields should be returned together with the number of grouped entries in a column called count
--     the result should also be sorted by day
-- "events" table schema
--     id (bigint)
--     name (text)
--     created_at (timestamp)
--     description (text)
-- expected result schema
--     day (date)
--     description (text)
    -- count (numeric)

SELECT DATE(created_at) AS day, description, COUNT(*)
FROM events 
WHERE name = 'trained' 
GROUP BY DATE(created_at), description;
