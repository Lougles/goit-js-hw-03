console.log("Task-3");
const findBestEmployee = function (employees) {
  console.log("Отделы компании: ",employees);
  const value = Object.values(employees);
  const key = Object.keys(employees);
  let maxNum = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] > maxNum) {
      maxNum = value[i];
    }
  }
  let indexValue = value.indexOf(maxNum);
  return key[indexValue];
};

console.log("Самый продуктивный сотрудник: ",
  findBestEmployee({
    Nadin: 150,
    Kate: 219,
    Victoria: 220,
    Elizabeth: 147,
  }),
); // 
console.log("Самый продуктивный сотрудник: ",
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log("Самый продуктивный сотрудник: ",
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log("Самый продуктивный сотрудник: ",
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
console.log("==============================================================================");
