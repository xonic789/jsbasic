function binarySearchFindBy(key,array){
    let least = 0;
    let large = array.length - 1;
    
    // least는 배열의 제일 앞부분이며
    // large는 배열의 제일 뒷부분이다.
    // least가 large보다 커지거나 같아진다면, 
    // 더 이상 배열을 쪼갤 수 없기 때문에
    // 반복문을 종료한다.
    while (least <= large){
        // 해당 배열의 중간 부분을 계속해서 초기화한다.
        // 인덱스는 정수 타입 이므로, 반내림하여 초기화한다.
        let pc = Math.floor((least + large) / 2);
        // 배열의 중간 index가 key와 같다면 해당 함수를 리턴한다.
        if (array[pc] === key){
            return least;
        // 중간 부분보다 key가 크다면 배열의 중간 인덱스의 오른쪽 부분이기 때문에
        // least를 배열의 중간 부분 +1 하여 초기화 한다.
        }else if(array[pc] < key){
            least = pc + 1;
        // 윗 부분의 조건을 모두 만족하지 않을시
        // 배열의 중간 부분이 키 값보다 적을시
        // 배열의 중간 인덱스의 왼쪽 부분이기 때문에 
        // large를 배열의 중간 인덱스 -1 하여 초기화 한다.
        }else {
            large = pc - 1;
        }
    }

    //찾지 못할 경우 (반복문이 종료 될 경우) return -1한다.
    return -1;
}

array = [1, 2, 4, 6, 8, 9];

console.log(binarySearchFindBy(6,array));