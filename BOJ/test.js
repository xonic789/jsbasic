function solution(array){
    let answer = [];
    let n = array.length;
    

    for (let i = 0; i < n; i++){
        let cnt = 1;
        if (array[i] === -1){
            continue;
        }
        for (let j = i + 1; j < n; j++){
            if (array[i] === array[j]){
                array[j] = -1;
                cnt++;     
            }
        }
        if (cnt !== 1){
            answer.push(cnt);
        }
    }

    if (answer.length === 0){
        answer.push(-1);
    }

    return answer;
}



console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));