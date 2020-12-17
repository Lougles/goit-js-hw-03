console.log("Практика, задание 1");
const febo = function (amount, resArr = [0, 1]) {
  resArr.push(
    resArr[resArr.length - 2] + resArr[resArr.length - 1]);
   if (resArr.length < amount) {
    return febo(amount, resArr);
  } else {
    return resArr;
  }
}

const enter = prompt("Количество рекурсий фибоначи?");
console.log(febo(enter));


