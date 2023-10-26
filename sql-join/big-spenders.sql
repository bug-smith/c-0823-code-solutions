select "payments"."amount" as "Customer Payment",
"customers"."firstName" as "Customer First Name",
"customers"."lastName" as "Customer Last Name"
from "payments"
join "customers" using ("customerId")
ORDER BY "amount" desc
limit 10;
