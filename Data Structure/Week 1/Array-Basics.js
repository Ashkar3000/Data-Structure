// // lenght and traverse of an array
let array = [1,2,3,4,5]
console.log(array);
console.log("Length of Array:",array.length );
// console.log(array.indexOf(4));

//shift : remove first element
let sh =[1,2,3,4,5,6,7,8,9]
console.log("Remove First Element in an Array:",sh.shift());
console.log(sh);

//unshift : add first element
let unsh =[1,2,3,4,5,6,7,8,9]
console.log(unsh.unshift(77,75));
console.log("Add First Element in an Array:",unsh);

//pop :remove last element
let p =[1,2,3,4,5,6,7,8,9]
console.log(p.pop());
console.log("Remove Last Element in an Array:",p);

// //push : add last element 
let pu =[1,2,3,4,5,6,7,8,9]
console.log(pu.push(77,75));
console.log("Add Last Element in an Array:",pu); 

let ush =[1,2,3,4,5,6,7,8,9]
console.log("dddnnd",ush.splice(0,2));
console.log(ush);

//indexof :show the position of array element 
let i =[1,2,3,4,5,6,7,8,9]
console.log("Show the Position of Array Element from First:",i.indexOf(7));

//lastindexof
let li =[1,2,3,4,5,6,7,8,9]
console.log("Show the Position of Array Element from Last:",li.lastIndexOf(9));

//includes
let inc =[1,2,3,4,5,6,7,8,9]
console.log(inc.includes(7));
console.log(inc.includes(70));

//join :joining other elements in between two element
let jo =[1,2,3,4,5,6,7,8,9]
console.log(jo.join('-'));
console.log(jo.join(' ')); 

//reverse:reversing an array
let re =[1,2,3,4,5,6,7,8,9]
console.log("Reversed Array:",re.reverse()); 

//concat:adding two elements in another array
//concat(): makes no change in existing array values.
let co =[1,2,3,4,5,6,7,8,9]
console.log("ggggggggggggnnnnnnn",co.concat(10,11)); 

//forEach:method executes a provided function once for each array element.
var forarr =[10,20,30,40]
forarr.forEach(function (value,index) {
    console.log(value);
})

