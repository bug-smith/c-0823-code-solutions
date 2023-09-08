/* exported setValue */
function setValue(object, key, value) {
  const obj = (object[key] = value);
  return obj;
}
