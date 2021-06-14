console.log('Map Polifyl Examples');

Array.prototype.customMap = function(callBack){
 let newArr = [];
//  console.log('callBack',callBack);
//  console.log('this',this);
 for(let i =0; i<this.length;i++){
    //  console.log('this[i]',this[i]);
    //  console.log('i',i)
     newArr.push(callBack (this[i],i,this));
 }
 return newArr;
}

let arrOfObj =[1,2,3,4]

let CustomMap = arrOfObj.customMap((itm,indx)=>console.log(itm));
console.log('CustomMap',CustomMap)