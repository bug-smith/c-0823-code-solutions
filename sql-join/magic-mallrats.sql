select "customers"."firstName",
"customers"."lastName"
from "films"
JOIN "inventory" using ("filmId")
JOIN "rentals" using ("inventoryId")
JOIN "customers" using ("customerId")
where "films"."title" = 'Magic Mallrats';
