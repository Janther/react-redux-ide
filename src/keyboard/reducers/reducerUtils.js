export function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  const newObject = { ...oldObject, ...newValues };
  return newObject;
};

export function insertItemInArray(array, index, item) {
  const updatedItems = [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
  return updatedItems;
};

export function updateItemInArray(array, index, updateItemCallback) {
  const updatedItems = [
    ...array.slice(0, index),
    updateItemCallback(array[index]),
    ...array.slice(index + 1),
  ];
  return updatedItems;
};
