-- https://www.codewars.com/kata/580d08b5c049aef8f900007c
-- DESCRIPTION: 
-- For this kata we will be using the DVD Rental database: 
-- https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/
-- You are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent ordered from highest to lowest. Total number of payments has also been requested.
-- The query should output the following columns:
--     customer_id [int4]
--     email [varchar]
--     payments_count [int]
--     total_amount [float]
-- and has the following requirements:
-- only returns the 10 top customers, ordered by total amount spent from highest to lowest

SELECT p.customer_id, c.email, COUNT(*) payments_count, SUM(amount)::float total_amount 
FROM payment p 
JOIN customer c on p.customer_id = c.customer_id 
GROUP BY p.customer_id, c.email 
ORDER BY total_amount DESC
LIMIT 10;
