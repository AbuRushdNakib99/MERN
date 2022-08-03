// Named Function

function function1(){
    console.log(Date.now())
}
function1()


// Variable Function
const now=function(){
    console.log(Date.now())
}
now()

// Arrow Function
const arrowFunction=()=>{
    console.log("test")
}
arrowFunction()

// Inline Arrow Function

const calculation=(num,fn)=>{
    let result=0;
    for(index=0;index<num;index++){
        const temp=fn(index);
        result+=temp;
    }
    return result
}
const sum=calculation(10,(x)=>{
    return x+x
})
const multiply=calculation(10,(x)=>{
    return x*x;
})
console.log(multiply)
console.log(sum)

// Minimal Function
const square=(x)=>x*x;
console.log(square(10))

const square2=(x)=>{
    const fn=function(){
        return x*x;
    }
    return fn;
}
console.log(square2(10)())

// Self Executing Function
(()=>{return new Date();})()
console.log((10))

(function evaluateme(){console.log("this is test");return "hello"})
(function(){
    console.log("I Say Hello")
    console.log("I Say Hello Again")
})()