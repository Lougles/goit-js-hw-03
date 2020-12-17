console.log("Task-6");
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  const tempArr = [];
  for (let i = 0; i < allProducts.length; i += 1){
    if (allProducts[i].name === productName) {
          console.log("Цена: ",allProducts[i].price, "Количество: ", allProducts[i].quantity);
      const temp = allProducts[i].quantity * allProducts[i].price;
      tempArr.push(temp);
    }
  }
  return tempArr;
};

console.log("Результат: ",calculateTotalPrice(products, 'Захват')); 

console.log("Результат: ",calculateTotalPrice(products, 'Радар')); // 5200

console.log("Результат: ", calculateTotalPrice(products, 'Дроид')); // 2800

console.log("==============================================================================");
