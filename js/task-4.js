console.log("Task-4");
const countTotalSalary = function (employees) {
  console.log("Все работники: ", employees);
  const value = Object.values(employees);
  let temp = 0;
  for (let i = 0; i < value.length; i += 1){
    temp += value[i];
  }
  return temp;
};

console.log("Общая зарплата: ",
  countTotalSalary({
    Vova: 380,
    Alina: 350,
    Alfred: 600,
    David: 500,
  }),
); 
console.log("Общая зарплата: ",countTotalSalary({})); // 0

console.log("Общая зарплата: ",
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log("Общая зарплата: ",
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
console.log("==============================================================================");
