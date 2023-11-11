SELECT name,role FROM employees where Building is null;
SELECT * FROM Buildings left join employees on Building=Building_name where role is null;
