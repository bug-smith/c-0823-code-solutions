select "addresses"."line1" as "Address Line",
"cities"."cityId" as "City Name",
"addresses"."district" as "Address District"
"countries"."name" as "Country Name"
from "addresses"
join "cities" using ("cityId");
join "countries" using ("countryId")
