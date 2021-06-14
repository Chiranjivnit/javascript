
const everythingObjTest=()=>{
    console.log('everythingObjTest called')
}
everythingObjTest();
everythingObjTest.check = 'my name is object'
console.log('new property for this function',everythingObjTest.check)
console.log(typeof(everythingObjTest.check))
console.log(typeof(everythingObjTest))