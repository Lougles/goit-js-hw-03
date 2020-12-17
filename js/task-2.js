console.log("Task-2");
const countProps = function (obj) {
  const keys = Object.keys(obj);
  const count = keys.length;
  return count;
};


console.log("Количество ключей: ",countProps({ name: 'Vova', age: 26, isOnline: true, Hobby: 'short clips'}));

console.log("Количество ключей: ",countProps({})); // 0

console.log("Количество ключей: ",countProps({ name: 'Mango', age: 2 })); // 2

console.log("Количество ключей: ", countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log("==============================================================================");
