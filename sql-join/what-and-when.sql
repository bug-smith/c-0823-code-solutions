select "f"."releaseYear" as "Release Year",
"genres"."name" as "Film Genre"
from "films" as "f"
JOIN "filmGenre" using ("filmId")
JOIN "genres" using ("genreId")
where "title" = 'Boogie Amelie';
