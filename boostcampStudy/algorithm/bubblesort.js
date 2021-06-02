function bubbleSort(array){
    let n = array.length;
    
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            let temp = 0;
            if(array[i] > array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

array = [1, 8, 3, 99, 13, 42];


console.log(bubbleSort(array));