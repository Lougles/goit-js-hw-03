console.log("Task-1");
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addNewKey(NewKey, NewElement) {
    const key = Object.keys(this);
    console.log(key);
    key.push(NewKey);
  },
  updateHobby(newHobby) {
    // console.log("Start: ", this);
    this.hobby = newHobby;
  },
  updatePremium(newPremium) {
    this.premium = newPremium;
  },
};

user.addNewKey('mood');
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
