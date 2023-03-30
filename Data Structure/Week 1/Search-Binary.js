const array = [1,2,3,5,6,8,10]

let x = 8

function bser(array , x ) {
    let l = 0
    let r = array.length - 1 
    
    while (r >= l) {
        let mid =Math.floor((l + r) /2)
        // console.log(mid);
        if (array[mid] == x) {
            return mid
        }
        if (array[mid] > x ) {
            r = mid - 1 

        } else {

            l = mid + 1 
        }
    }
    return -1 
}

result = bser(array , x )

if (result == -1) {
    console.log("Elment is not Found");
}else{
    console.log("Element is in Index: ",result);
}

