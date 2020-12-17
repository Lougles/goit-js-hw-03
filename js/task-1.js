console.log("Task-1");
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addNewKey({NewElem, NewValue}) {
    this[NewElem] = NewValue;
  },
  updateHobby(newHobby) {
    // console.log("Start: ", this);
    this.hobby = newHobby;
  },
  updatePremium(newPremium) {
    this.premium = newPremium;
  },
};

user.addNewKey({NewElem:'mood', NewValue: 'happy' });
console.log(user);
// user.updateHobby('skydiving');
// user.updatePremium(false);
// console.log("End: ",user);
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log("Key: ",key);
//   console.log("element: ",user[key]);
// }

console.log("==============================================================================");
