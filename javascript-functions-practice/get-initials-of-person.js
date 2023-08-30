/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstNameInitials = person.firstName.charAt(0);
  const lastNameInitials = person.lastName.charAt(0);
  return firstNameInitials + lastNameInitials;
}
getInitialsOfPerson();
