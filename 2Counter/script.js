var createCounter = function (n) {
  counter = n - 1;
  return function () {
    counter++;
    return counter;
  };
};
