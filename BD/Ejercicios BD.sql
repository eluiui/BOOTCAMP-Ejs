--Muy faciles--

--ej 1--
SELECT * FROM MOVIES;

--ej 2--
SELECT * FROM Genres;

--ej 3--
SELECT * FROM studios WHERE studio_active=1;

--ej 4--
SELECT * FROM members ORDER BY member_id DESC LIMIT 20;

--ej 5--
SELECT MOVIE_DURATION, 
	   COUNT(*) AS total 
	FROM MOVIES 
	GROUP BY MOVIE_DURATION 
	ORDER BY total DESC 
	LIMIT 20;

--Faciles--

--ej 6--
SELECT * FROM Movies 
		WHERE movie_launch_date >='2000-01-01'
		AND movie_name 
		LIKE 'A%';
	
--ej 7--
SELECT * FROM actors 
	WHERE actor_birth_date 
	LIKE '%-06-%';

--ej 8--
SELECT * FROM actors 
	WHERE actor_birth_date NOT LIKE '%-06-%' 
	AND actor_dead_date IS NULL;

--ej 9--
SELECT director_name,
	   DATEDIFF(YEAR, director_birth_date, CURDATE()) AS años 
	FROM directors 
	WHERE DATEDIFF(YEAR, director_birth_date, CURDATE())<=50 
	and director_dead_date is null;

--ej 10--
SELECT director_name,
	   DATEDIFF(YEAR, director_birth_date, CURDATE()) AS años 
	FROM directors 
	WHERE DATEDIFF(YEAR, director_birth_date, CURDATE())<50 
	and director_dead_date is NOT null;

--ej 11--
SELECT director_name 
	FROM directors 
	WHERE DATEDIFF(YEAR, director_birth_date, CURDATE())<=40 
	and director_dead_date is null;

--ej 12--
SELECT AVG(DATEDIFF(YEAR, director_birth_date, CURDATE())) AS edad_media 
	FROM directors 
	WHERE director_dead_date IS NULL;
	
--ej 13--
SELECT AVG(DATEDIFF(YEAR, actor_birth_date, CURDATE())) AS edad_media 
	FROM actors 
	WHERE actor_dead_date IS NOT NULL;

--Media--

--ej 14--
SELECT movies.movie_name, 
	   studios.studio_name 
	FROM movies 
	JOIN studios ON movies.studio_id = studios.studio_id;

--ej 15--
SELECT * FROM members_movie_rental 
	WHERE MEMBER_rental_DATE 
	BETWEEN '2010-01-01' 
	AND '2015-12-31';

--ej 16--
SELECT COUNT(movies.movie_id) AS total_movies,
	   nationalities.nationality_name 
	FROM movies 
	JOIN nationalities ON movies.nationality_id = nationalities.nationality_id 
	GROUP BY nationalities.nationality_name;

-- ej 17--
SELECT * FROM movies 
	JOIN genres ON movies.genre_id = genres.genre_id 
	WHERE genres.genre_name = 'Documentary'; 

--ej 18--
SELECT movies.movie_name 
	FROM movies 
	JOIN directors ON movies.director_id = directors.director_id 
	WHERE directors.director_birth_date >= '1980-01-01' 
	AND directors.director_dead_date IS NULL;

--ej 19--
SELECT members.member_name, 
	   directors.director_name, 
	   members.member_town 
	FROM members 
	JOIN directors ON members.member_town = directors.director_birth_place;

--ej 20--
SELECT movies.movie_name, 
	   movies.movie_launch_date 
	FROM movies 
	JOIN studios ON movies.studio_id = studios.studio_id 
	WHERE studios.studio_active = 0;

--ej 21--
SELECT movies.movie_name, 
	   members_movie_rental.
	   member_rental_date 
	FROM members_movie_rental 
	JOIN movies ON members_movie_rental.member_movie_rental_id=movies.movie_id 
	ORDER BY members_movie_rental.member_rental_date DESC 
	LIMIT 10;

--ej 22--
SELECT directors.director_name, 
	   COUNT(movies.movie_id) AS total_pelis_antes_41 
	FROM directors 
	LEFT JOIN movies ON directors.director_id = movies.director_id 
	WHERE (YEAR(movies.movie_launch_date) - YEAR(directors.director_birth_date)) < 41 
	OR movies.movie_launch_date IS NULL 
	GROUP BY directors.director_id;

--ej 23--
SELECT directors.director_name, 
	   AVG(movies.movie_duration) AS media 
	FROM directors 
	LEFT JOIN movies ON directors.director_id = movies.director_id 
	GROUP BY directors.director_id;

--ej 24--
SELECT movies.movie_name, 
	   movies.movie_duration 
	FROM movies 
	JOIN members_movie_rental ON movies.movie_id = members_movie_rental.movie_id 
	WHERE members_movie_rental.member_rental_date >= '2017-01-25' 
	AND movies.movie_duration = (SELECT MIN(movie_duration) 
								FROM movies JOIN members_movie_rental 
	ON movies.movie_id = members_movie_rental.movie_id 
	WHERE members_movie_rental.member_rental_date >= '2017-01-25' );

--ej 25--
SELECT directors.director_name, 
	   COUNT(movies.movie_id) AS total_pelis 
	FROM directors 
	JOIN movies 
	ON directors.director_id = movies.director_id 
	WHERE (YEAR(movies.movie_launch_date) BETWEEN 1960 AND 1989) 
	   	   AND movies.movie_name 
	   	   LIKE '%The%' 
	       GROUP BY directors.director_id;

--Dificil--

--ej 26--
SELECT movies.movie_name, 
	   nationalities.nationality_name, 
	   directors.director_name 
	FROM movies 
	JOIN nationalities ON movies.nationality_id = nationalities.nationality_id 
 	JOIN directors ON directors.director_id = movies.director_id 
 	ORDER BY directors.director_name;

--ej 27--
SELECT movies.movie_name, 
	   actors.actor_name 
	FROM movies 
	JOIN movies_actors 
	ON movies.movie_id = movies_actors.movie_id 
	JOIN actors ON movies_actors.actor_id = actors.actor_id 
	ORDER BY movies.movie_name, actors.actor_name;

--ej 28--
SELECT directors.director_name 
	FROM directors JOIN movies ON directors.director_id = movies.director_id 
	JOIN members_movie_rental ON movies.movie_id = members_movie_rental.movie_id 
	GROUP BY directors.director_id 
	ORDER BY COUNT(members_movie_rental.movie_id) DESC 
	LIMIT 1;

--ej 29--
SELECT studios.studio_name, 
	   Sum(awards.award_win) AS total_premios 
	FROM studios JOIN movies ON studios.studio_id = movies.studio_id 
	JOIN awards ON awards.movie_id = movies.movie_id 
	GROUP BY studios.studio_id;

--ej 30--
SELECT actors.actor_name, 
	   SUM(awards.award_almost_win) AS premios_no_ganados 
	FROM actors 
	JOIN movies_actors ON actors.actor_id = movies_actors.movie_actors_id 
	JOIN movies ON movies_actors.movie_id = movies.movie_id 
	JOIN awards ON awards.movie_id = movies.movie_id 
	GROUP BY actors.actor_id 
	ORDER BY premios_no_ganados DESC;

--ej 31--
SELECT COUNT(DISTINCT actors.actor_id) AS actores, 
	   COUNT(DISTINCT directors.director_id) AS directores 
	FROM movies JOIN MOVIES_ACTORS ON movies.movie_id = MOVIES_ACTORS.movie_id 
	JOIN actors ON MOVIES_ACTORS.MOVIE_ACTORS_id = actors.actor_id 
	JOIN directors ON movies.director_id = directors.director_id 
	JOIN studios ON movies.studio_id = studios.studio_id 
	WHERE studios.studio_active = 0;

--ej 32--
SELECT 
	members.member_name, 
	members.member_town, 
	members.member_phone 
	FROM members 
	JOIN members_movie_rental ON members.member_id = members_movie_rental.member_id 
	JOIN movies ON members_movie_rental.member_movie_rental_id = movies.movie_id 
	JOIN awards ON awards.movie_id = movies.movie_id 
	GROUP BY members.member_id, members.member_name, members.member_town, members.member_phone 
	HAVING SUM(awards.award_nomination) > 150 AND SUM(awards.award_win) < 50 
	ORDER BY members.member_name;

--ej 33--
SELECT directors.director_name, 
	   movies.movie_name, 
	   movies.movie_launch_date, 
	   directors.director_dead_date 
	FROM directors 
	JOIN movies ON directors.director_id = movies.director_id 
	WHERE directors.director_dead_date IS NOT NULL 
	AND movies.movie_launch_date > directors.director_dead_date;

--ej 34--
UPDATE directors 
	SET director_dead_date = DATEADD(year, 1, (
   		SELECT MAX(movies.movie_launch_date) 
    		FROM movies 
   			WHERE movies.director_id = directors.director_id 
    		AND movies.movie_launch_date > directors.director_dead_date
		))
	WHERE director_dead_date IS NOT NULL 
	AND EXISTS (
    	SELECT 1 FROM movies 
   		WHERE movies.director_id = directors.director_id 
    	AND movies.movie_launch_date > directors.director_dead_date
);


--Berserk mode--

--Ej 35--
SELECT directors.director_name, 
       genres.genre_name, 
       COUNT(movies.movie_id) AS total_peliculas
	FROM directors
	JOIN movies ON directors.director_id = movies.director_id
	JOIN genres ON movies.genre_id = genres.genre_id
	GROUP BY directors.director_id, genres.genre_name
	HAVING COUNT(movies.movie_id) = (
        SELECT 
            MAX(subconsulta.total_peliculas)
        FROM (
            SELECT COUNT(movie_id) AS total_peliculas
            FROM movies
            WHERE director_id = directors.director_id
            GROUP BY genre_id
        ) AS subconsulta
   	 )
	ORDER BY directors.director_name;

--Ej 36--
SELECT studios.studio_name,
       nationalities.nationality_name, 
       COUNT(movies.movie_id) AS total_peliculas
	FROM studios
	JOIN  movies ON studios.studio_id = movies.studio_id
	JOIN nationalities ON movies.nationality_id = nationalities.nationality_id
	GROUP BY studios.studio_id, nationalities.nationality_name
	HAVING COUNT(movies.movie_id) = (
        SELECT  MAX(subconsulta.total_peliculas)
        	FROM (SELECT COUNT(m.movie_id) AS total_peliculas
            	FROM movies m
            	WHERE m.studio_id = studios.studio_id
            	GROUP BY m.nationality_id
        	) AS subconsulta
    	)
	ORDER BY studios.studio_name;

--Ej 37--
SELECT members.member_name, 
       members.member_phone, 
       movies.movie_name, 
       MIN(members_movie_rental.member_rental_date) AS Fecha
	FROM members
	JOIN members_movie_rental ON members.member_id = members_movie_rental.member_id
	JOIN movies ON members_movie_rental.member_movie_rental_id = movies.movie_id 
	JOIN nationalities ON CAST(RIGHT(members.member_phone, 1) AS INTEGER) = nationalities.nationality_id 
GROUP BY 
    members.member_name, members.member_phone, movies.movie_name
ORDER BY Fecha ASC;
