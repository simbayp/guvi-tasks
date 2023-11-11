SELECT title,(Domestic_sales+International_sales)/1000000 as "Total Sales" FROM movies left join Boxoffice on id=Movie_id;
SELECT title,(rating*10) FROM movies left join Boxoffice on id=Movie_id;
SELECT title,year FROM movies where year%2=0;
