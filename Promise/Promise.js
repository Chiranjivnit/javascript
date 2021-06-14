// promise with object constructor
const promiseExample = () => {
  return new Promise((resolve, reject) => {
    // here we are creating the function constructor
    setTimeout(() => {
      let arr = [1, 2, 3, 4];
      //console.log(arr)
      resolve(arr);
    }, 3000);
  });
};

// promiseExample().then((res)=>{
//     console.log('res',res);
// })

// Promise with normal function
const promiseExample2 = new Promise((resolve, reject) => {
  // object constructor
  setTimeout(() => {
    let usrObj = { fName: "chiru", lName: "Rout" };
    //resolve(usrObj);
    setTimeout(
      (obj1) => {
        console.log(`2nd settimeOut ${obj1.fName}`);
        let arr = [1, 2, 3];
        setTimeout(
          () => {
            console.log("arr", arr);
            resolve(`arr print${arr}`);
          },
          5000,
          arr
        );
      },
      3000,
      usrObj
    );
  }, 3000);
});


const promiseExample3=(promiseobj3)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log(`promiseobj3: ${promiseobj3}`)
        },3000)
       resolve(`owaooo.... Promise resolved response ${promiseobj3}`);
    })
}

promiseExample2.then((res) => {
    console.log("example2", res);
    return promiseExample3(res)
  }).then((respn)=>{
      console.log('respn',respn);
  })
