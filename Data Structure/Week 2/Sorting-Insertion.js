// insertion sorting
let array = [72,63,99,45,27,18,36,81,54]
insertionsorting(array)
console.log(array)

function insertionsorting(array) {
    for (let i = 1; i < array.length; i++) {
        nti = array[i];
        let j
        for (j = i-1 ; j >= 0 && array [j] >= nti; j--) {
            array [j+1] = array [j]
        }
        array[j+1] = nti
    }
}
