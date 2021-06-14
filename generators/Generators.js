console.log('generators function');

function* generatorEx(){
    let i =0;
   while(true){
    yield ++i
   }
}
const cal = generatorEx()
console.log(cal.next());

// WAP to adding element from an array which returns 5.

function* myGenerator(arr){
    yield* arr
    yield "gjhsjg"
}
let arr = [1,2,3,4,5]
let call2 = myGenerator(arr);
for(let item of call2){
    console.log(item);
    if(call2[item] <5){
        
    }
   
}
