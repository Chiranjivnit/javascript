setTimeout(function x(){
  console.log("timer log")
},5000);

function z(yParameter){
    console.log("z log");
    yParameter();
}
z(function y(){
    console.log("y log")
})