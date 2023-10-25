select "addresses"."line1" as "Address Line",
"cities"."cityId" as "City Name",
"addresses"."district" as "Address District"
from "addresses"
join "cities" using ("cityId");
