select "genres"."name" as "Genre Name",
count(*) as "Count"
from "actors"
join "filmGenre" using ("")
join "genres" using ("genreId")
