function insertionSort(array){
    let n = array.length;
    let j = 0;


    // 배열의 1 인덱스부터 시작해 점점 크기를 키워나가는 정렬.
    // 항상 그 이전 요소들은 정렬이 돼있다 가정함.
    // 하나의 요소의 위치를 찾는 정렬
    for (let i = 1; i < n; i++){
        let key = array[i];
        // array[j]가 key값보다 크다면, for문을 중단한다.
        for (j = i - 1; j >=0 && array[j] > key; j--){
            array[j+1] = array[j];
        }
        // 위치가 결정 난 뒤
        array[j+1] = key;
    }

    return array;
}

console.log(insertionSort([5,3,2,7,8,1]));