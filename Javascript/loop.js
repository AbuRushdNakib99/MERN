// Classical Loops:
// for loop,while loop

for(let index=0;index<=10;index++){
    console.log(index)
}

let x=10;
while(x>0){
    console.log(x)
    x--;
}

// Break and Continue
let n=10;
while(n>0){
    n--;
    if(n%2==0){
        console.log("EVEN");
        continue;
    }
    console.log("Odd:",n)
    
}

// For in 

var j={
    "name":"MERN",
    "type":"Course",
    "language":"Javascript"
}

for(let k in j){
    console.log(k,":",j[k])
}

let arr=[10,20,30];
for(let name of arr){
    console.log(name)
}