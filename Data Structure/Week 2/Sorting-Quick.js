// quick sorting 

let array = [71,62,98,44,26,17,35,89,53]
console.log(quicksorting(array))
 
function quicksorting(array) {
    if (array.length<2) {
        return array
    }
    let pivot = array[array.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        } 
    }
    return [...quicksorting(left),pivot,...quicksorting(right)]
}