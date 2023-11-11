SELECT role,name,max(Years_employed) FROM employees;
SELECT *,avg(Years_employed) FROM employees group by role;
SELECT *,sum(Years_employed) FROM employees group by Building;
