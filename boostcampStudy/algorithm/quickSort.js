let array = [1,5,2,3,7,8,9,4];
// 정렬을 수행할 함수
function quickSort(array, start, end){
    let pivot = partition(array, start, end);
    
    // 왼쪽으로 나눴을 때 (피봇보다 작은 배열) 시작인덱스가 끝 인덱스보다 작을때
    // 시작인덱스가 끝 인덱스보다 크거나 같을때는 배열의 길이가 하나이기 때문에 수행하지 않음
    if (start < pivot - 1){
        quickSort(array, start, pivot - 1);
    }
    if (pivot < end){
        quickSort(array, pivot, end);
    }
}

// 피봇을 기준으로 왼쪽과 오른쪽으로 나눠 피봇인덱스를 리턴할 함수
// 피봇은 배열 인덱스의 중간으로 설정.
// start와 end 배열 포인터를 피봇값과 비교하며, 서로 당기듯이 증가 시켜나가다가
// start가 피봇 값보다 클 때, end가 pivot 값보다 작을 때, 서로 자리를 바꿔준다.
// 결국 start가 end보다 크거나 같을 때, start를 기준으로 배열이 나뉘게 됨.
function partition(array, start, end){
    let pivot = array[Math.floor((start + end) / 2)];
    while (start <= end){
        while (array[start] < pivot) start++;
        while (array[end] > pivot) end--;
        if (start <= end){
            swap (array, start, end);
            start++;
            end--;
        }
    }
    return start;
}

function swap (array, start, end){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
}

console.log(array);
quickSort(array, 0, array.length-1);
console.log(array);
 



