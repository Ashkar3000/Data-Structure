const array = [1,2,3,5,6,8,10]

let x = 8

function lser(array , x) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == x) {
            return index
        }
    }
    return -1
}

result = lser(array , x)

if (result == -1) {
    console.log("Element is not Found");
}else{
    console.log("Element is in Index: ",result);
}

