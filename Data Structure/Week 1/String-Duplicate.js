// Duplicate String

function findduplicate(string) {
    let length = string.length
    let i = 0
    let arr = []
    let j=1
   
    while (i < length) {
        j = i + 1
        while (j < length) {
            if (string[i] == string[j]) {
                console.log("duplicate :",string[i]);  
            }
            j++
        }
        i++
    }
}

findduplicate("hello")