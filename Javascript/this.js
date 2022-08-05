let name2="awesomeness2"

let c1={
    name:"MERN",
    lang:"Javascript",

    getDetails:function(){
        name="MERN2"
        return `Names:${name} ${this.name} ${name2}`
    },
    getDetails2:()=>{
        name="MERN3"
        return `Names2:${name} ${this.name} ${name2}`
    },
    getDetails3:function(){
        let name="MERN4"
        return{
            name:"MERN5",
            getDetails4:function(){
                return `Names ${name} ${this.name} ${name2}`
            }
        }
    }
}
console.log(c1.getDetails())
console.log(c1.getDetails2())
console.log(c1.getDetails3())
console.log(c1.getDetails3().getDetails4())