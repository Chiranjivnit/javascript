
let x = () => {
  console.log(`hiiiii...`);
};
let y = () => {
  console.log("awesome.....");
};
const callBack = (x, y) => {
  console.log("line 3");
  x();
  y();
  setTimeout(() => {
    console.log(`1st setTimeOut`);
    let callBackObj = { fName: "chiru", lName: "Rout" };
    setTimeout(
      (obj) => {
        console.log(`2nd setTimeOut fName@ ${obj.fName} LName@ ${obj.lName}`);
        let callBackObj2 = { fName: "sanu", lName: "rout" };
        setTimeout(
          (obj2) => {
            console.log(
              `3rd setTimeOut fName@ ${obj2.fName} lName@ ${obj2.lName}`
            );
          },
          3000,
          callBackObj2
        );
      },
      3000,
      callBackObj
    );
  }, 3000);
  console.log("line 10");
};
callBack(x, y);
