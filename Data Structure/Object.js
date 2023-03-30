const obj ={
    name:"ashkar",
    age: 25,
    'key-three':true,
    sayMyName:function () {
       console.log(this.name,this.age);
    }
}
obj.hobby = 'football'
//delete obj.hobby

// console.log(obj);
// console.log("name :"+obj.name);
// console.log("age :"+obj.age);
// console.log("name :"+obj['name']);
// console.log("age :"+obj['age']);
obj.sayMyName()
