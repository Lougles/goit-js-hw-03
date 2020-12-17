console.log("Task-5");
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const tempArr = [];
  for (let i = 0; i < arr.length; i += 1){
    console.log("Елементы: ",arr[i][prop]);
    const temp = arr[i][prop];
    temp ? tempArr.push(temp) : ''
  }
  return tempArr;
};

console.log("Результат: ",getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log("Результат: ",getAllPropValues(products, 'price'));

console.log("Результат: ",getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log("Результат: ",getAllPropValues(products, 'category')); // []

console.log("==============================================================================");
