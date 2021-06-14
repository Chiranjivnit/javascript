console.log('Iterators');
let arr =[100,200,300,400,500,600,700,800,900]
 let itrArr = arr[Symbol.iterator]();
 let togleItrArr = itrArr.next()

//  while(!togleItrArr.done){
//     console.log('itrArr',togleItrArr);
//      togleItrArr = itrArr.next();
//  }

//Custom iterator

const customIterator=(myArr)=>{
    let indx = 0;
    let done
    //indx < myArr.length ? done = false : done = true
    return{
        next:()=>{
            if(indx < myArr.length){
                return{
                    value: myArr[indx++],
                    done: false
                }
            }else{
                return{
                    value: myArr[indx++],
                    done: true
                }
            }
            
        }
    }
}

// function customIterator(myArr){
//     let indx = 0;
//     return{
//         next(){
//          return{
//              value:myArr[indx++],
//              done:false
//          }
//         }
//     }
// }

let myIterator = customIterator(arr)
//let newItr = customIterator(arr).next()
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
