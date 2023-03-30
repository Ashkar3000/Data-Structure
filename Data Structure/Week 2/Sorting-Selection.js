// selection sorting

let array = [77,22,88,44,66,11,55,99,33]
console.log(selectionsorting(array))

function selectionsorting(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let mini = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[mini]) {
                mini = j
            }
        }
            let temp = array[i]
            array[i] = array[mini]
            array[mini] = temp
        }
        return array
}