// Remove a Alphabet from String

function removealphabet(str, alphabet) {
    let remove=''
    let length = str.length
    let i=0
 
    while (i < length-1) {
        if (str[i] != alphabet) {
            remove = remove + str[i]
            
        }
    i++
    }
    console.log(remove);   
}

removealphabet("hello","o")