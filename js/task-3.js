console.log("Task-2");
const findBestEmployee = function(employees) {
  const value = Object.values(employees);
  const key = Object.keys(employees);
  let maxNum = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] > maxNum) {
      maxNum = value[i];
    }
  }
  console.log(maxNum);
  for (let i = 0; i < key.length; i += 1){
    if (key[i] === maxNum) {
      console.log("qwerty");
      return key[i];
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
console.log("==============================================================================");
