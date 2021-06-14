// take a array of elements, let's [1,2,3,4]. Find element from this array which
// gives output 5.

function show(arr, no) {
  let a = no;
  let b;
  let c;
  let d;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      b = arr[i];
      c = a - b;
      d = b + c;
    }
  }
  console.log(`a:${a} b:${b} c:${c} d:${d}`);
}
let fun = show([1, 2, 3, 4], 1);
console.log("fun", 100);

// Given two string "Army" and "Mary". Arrange these leter which return true.
//ex: amry === amry  true.

function check(word1, word2) {
  let wordRef = word1.toLowerCase().split("").sort().join("");
  let wordRef2 = word1.toLowerCase().split("").sort().join("");
  return wordRef === wordRef2;
}
let result1 = check("Army", "Mary");
console.log("result1", result1);

//sort array of string by last name
let arr1 = ["Chris Even", "Paul Rockers", "John Doe", "Johney Depp"];
// let res1 = arr1.sort().reverse();
// console.log("res1", res1);

let newArr1= arr1.sort((x, y) => {
  console.log(`x: ${x} `);
  console.log(`y: ${y}`);
  return x.split("")[0] > y.split("")[1];
});
console.log(newArr1);

// Take array of  objects and new propery "message: your age is age";
const obj1 = [
  { Fname: "chiru", Lname: "rout", age: 26 },
  { Fname: "sanu", Lname: "rout", age: 22 },
  { Fname: "mandakaini", Lname: "rout", age: 56 },
  { Fname: "Premanand", Lname: "rout", age: 66 },
];

let fltrObj1 = obj1.filter(fltr => fltr.age >26)
.map((itm,indx)=>{
   return {...itm,mesage:`your are ${itm.age} years old`}
})
console.log('fltrObj1',fltrObj1);

// Display the keys  of the above object
let keys1 = Object.keys(obj1)

console.log('keys',keys1);


//nested object convert into single object.
const userObj = {
  name: "Gaurav",
  address: {
    parmanet: {
      state: "Odisha",
      pin: "751003",
    },
    local: {
      state: "Pune",
      pin: "411032",
    }
  }
}

//testing

function testing1(){
  let newTestObj ={};
  return function innerTest(nestingObj,userString){
    for(userKey in nestingObj){
      console.log('userKey',userKey);
      
      if(typeof nestingObj[userKey] === 'object'){
        console.log('nestingObj[userKey]',nestingObj[userKey])
         return innerTest(nestingObj[userKey], userString + '_'+ userKey)
      }else{
        newTestObj[`User _ ${userKey}`] = `${nestingObj[userKey]}`
      }
      //console.log('newTestObj',newTestObj)
    }
    return newTestObj;
  }
  
}
let test1 = testing1()(userObj,'user')
//console.log(test1)

function convertSingleObj(){
  let newSingleObj = {};
  return function InnerConvertSingleObj(obj,str){
     for(objKey in obj){
       if(typeof(obj[objKey]) ==='object' ){
         //console.log(true);
         return InnerConvertSingleObj(obj[objKey],str + '_'+objKey)
       }else{
         //console.log(false);
         newSingleObj[str+'_'+objKey] = obj[objKey]
       }
     }
     return newSingleObj;
  }
}
 let calSingleObjFun = convertSingleObj();
 console.log(calSingleObjFun(userObj,"user"))



 function chainObjTest(){
   let newObj ={}
   return function innerChainObjTest(obj, usr){
     for (key in obj){
       if(typeof obj[key] === 'object'){
         return innerChainObjTest(obj[key],key);
       }else{
          newObj[usr + '_' + key] = obj[key];
       }
     }
      return newObj;
   }
 }
 let chainObjTest1= chainObjTest()
 console.log(chainObjTest1(userObj,'user'));


