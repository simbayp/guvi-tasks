SELECT director,count(id) as "Movies" FROM movies group by director;
SELECT director,sum(Domestic_sales+International_sales) as "Total Sales" FROM movies inner join Boxoffice on id=Movie_id group by director;
