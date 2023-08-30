/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const finalDescription =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return finalDescription;
}
