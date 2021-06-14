console.log('call Method');

const obj1={
    Fname:'chiru',
    Lname:'Rout'
}

function showObj(){
 console.log(this.Fname)
}
console.log(showObj.call(obj1))