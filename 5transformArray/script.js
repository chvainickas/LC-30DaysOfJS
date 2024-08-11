var map = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }

  return newArray;
};
