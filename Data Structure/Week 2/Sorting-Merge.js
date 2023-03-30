// merge sorting

let array = [7,2,8,4,6,1,5,9,3]
console.log(mergesorting(array))

function mergesorting(array) {
    if (array.length < 2) {
        return array
    }
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergesorting(left),mergesorting(right))
}
function merge(left,right) {
    let full = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            full.push(left.shift())
        } else {
            full.push(right.shift())
        }
    }
    return[...full, ...left ,...right]
}