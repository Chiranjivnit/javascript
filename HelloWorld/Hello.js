
console.log(this)

var x = 10;

function a(){
    console.log(this)
    b();
    var x = 10;
    function b(){
        console.log(x,'b function');
    }
}

console.log(x);
a();