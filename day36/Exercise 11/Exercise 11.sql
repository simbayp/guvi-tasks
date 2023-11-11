SELECT role,count(role) FROM employees where role="Artist";
SELECT role,count(role) FROM employees group by role;
SELECT role,sum(Years_employed) FROM employees where role="Engineer";
