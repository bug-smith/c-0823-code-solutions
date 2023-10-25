select "c"."firstName" as "First Name", "c"."lastName" as "Last Name",
SUM("payments"."amount") as "Total Price"
from "customers" as "c"
join "payments" using ("customerId")
group by "c"."firstName", "c"."lastName"
order by "Total Price" DESC
