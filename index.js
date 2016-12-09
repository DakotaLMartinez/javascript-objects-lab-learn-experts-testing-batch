const recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({[key]: value}, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({},object);
  delete newObj[key]
  return newObj;
}
