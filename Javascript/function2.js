// Scope

function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}
let temp=outer(20);
console.log(temp(10))

// Change References

var n=10;
function change(){
    var n=20;
}
console.log(change())

var m={x:10}

function change(){
    var m={x:20}
}
console.log(m)

// Input Types

function inputTypes(obj){
    console.log(obj)
}
inputTypes(10)
inputTypes({name:"MERN"})

function inputTypes2({name}){
    console.log(name)
}
inputTypes2({name:"Hello"})
inputTypes2({phone:"Hello"}) //This is Undefined

function inputTypes3(a,b,...rest){
    console.log('a',a,'b',b);
    console.log('rest:',rest);
}
inputTypes3(1,2,3,4,5,6,7,8,9,10,11,12,13)

function inputTypes4(){
    console.log("arguments:",arguments);
}
inputTypes4()