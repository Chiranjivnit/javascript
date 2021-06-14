console.log("bind method example @@@@@");

// Some example of bind method

const obj1 = { fName: "johnson", Lname: "nicol" };
const obj2 = { fName: "john", Lname: "Doe" };

function showUser(args) {
  console.log(`${this.fName} ${this.Lname}`);
  console.log(args);
}
showUser.bind(obj1, "He is 1st user")("Hero");
showUser.bind(obj2, "Here ur 2nd User")("Herion");

// Testig Function

function test(...args) {
  //here we need to spread the args or else won't get 2nd argument (string) value
  console.log("test func args", args);
}
test(obj1, "New Test");

//Lets See our custom bind (polyfill for bind method)

// Function.prototype.myBind = function (...args) {
//   let curentvalue = this;
//   let sliceArgs = args.slice(1);
//   console.log(args);
//   return function (arg2) {
//     curentvalue.call(args[0],[...sliceArgs, ...arg2]);
//   };
// };
// showUser.myBind(obj1, "Test")("Test");

Function.prototype.customBind = function (...args) {
  let curntFunc = this;
  let objFromArgs = args.slice(1);
  console.log(objFromArgs);
  return function (...args2) {
    curntFunc.apply(args[0], [...objFromArgs, ...args2]);
  };
};
showUser.customBind(obj1, "New Custom bind", "bind polyfill","test")();