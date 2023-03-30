class heapSort{
    sort(array) {
    let length = array.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
        this.heapify(array, length, i);    
    for (let i = length - 1; i > 0; i--){
        [array[0], array[i]] = [array[i], array[0]];
        this.heapify(array, i, 0);
    }
    return array;
}

heapify(arr, length, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    if (left < length && arr[left] > arr[largest]) largest = left;
    if (right < length && arr[right] > arr[largest]) largest = right;
    if (largest != index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];     
        this.heapify(arr, length, largest);
    }
}
}
const m = new heapSort();

console.log(m.sort([12, 11, 13, 5, 6, 7]));