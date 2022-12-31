-- https://www.codewars.com/kata/58113a64e10b53ec36000293
-- DESCRIPTION: 
-- For this challenge you need to create a SELECT statement 
-- that will contain data about departments that had a sale 
-- with a price over 98.00 dollars. This SELECT statement 
-- will have to use an EXISTS to achieve the task.
-- departments table schema
--     id
--     name
-- sales table schema
--     id
--     department_id (department foreign key)
--     name
--     price
--     card_name
--     card_number
--     transaction_date
-- resultant table schema
--     id
--     name
-- NOTE: Your solution should use pure SQL. Ruby is used 
-- within the test cases to do the actual testing. Do not: 
-- alias tables as this can cause a failure. 

SELECT id, name 
FROM departments 
WHERE EXISTS (
    SELECT department_id 
    FROM sales 
    WHERE departments.id = sales.department_id AND
    price > 98.0);
