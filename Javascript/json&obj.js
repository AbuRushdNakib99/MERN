var s='10'
console.log(s)

var s={"name":"MERN"}
console.log(s)
// console.log(JSON)

// var s1=JSON.parse(s)
// console.log(s1)
// s1.phone=123
// s2=JSON.stringify(s1)
// console.log(s2.length)

var s1={
    fn: function(){
        return new Date();
    },
    name:"Hello",
    phone:123
}
console.log(s1)
var s2=JSON.stringify(s1)
console.log(s2)
console.log(s2.length)