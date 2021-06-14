console.log('Function Currying @@@@@@');

function currying(x=0,y=0){
  if(y){
    return x +y;
  }
  return function (z=0){
      return x+z
  }
}
console.log(currying(4,3))
console.log(currying(4)(10))