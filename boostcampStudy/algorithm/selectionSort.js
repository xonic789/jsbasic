function selectionSort(array){
    let n = array.length;


    // 제일 작은 숫자를 배열에서 선택해 배열의 0인덱스부터 채워나가는 정렬
    // time complexity O(n^2)
    for (let i = 0; i < n-1; i++){
        let min = i;
        
        for (let j = i + 1; j < n; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }
        swap(i,min);
    }

    return array;


    function swap(i,j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

console.log(selectionSort([5,6,2,1,9,3]));