// bubble sorting

let array = [73,64,91,46,28,19,37,82,55]
bubblesorting(array)
console.log(array)

function bubblesorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array [i] > array [j]) {
                let temp = array [i]
                array [i] = array [j]
                array[j] = temp
            }
        }
    }
}
