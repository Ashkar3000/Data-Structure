const set = new Set([1,2,3])

set.add(4) // to add a value
set.add(5) 
console.log(set.has(2)); //cheack a value
set.delete(5) //delete a value 
console.log("Size of Set:",set.size); // cheak the size of the set
// set.clear() //clear all values in aset
console.log(set);
for (let item of set) {
    console.log(item); 
}