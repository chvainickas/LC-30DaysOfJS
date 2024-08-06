var createCounter = function (init) {
  let number = init;
  function increment(num) {
    init++;
    return init;
  }
  function reset() {
    init = number;
    return init;
  }
  function decrement(num) {
    init--;
    return init;
  }
  return { increment, decrement, reset };
};
