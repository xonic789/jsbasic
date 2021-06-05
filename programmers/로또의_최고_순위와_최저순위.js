function solution(lottos, win_nums) {
    var answer = [0, 0];
    let count = 0;
    let best = 0;
    let worst = 0;
    sort(lottos);
    
    // best 체크
    for (let lotto of lottos){
        for (let winNum of win_nums){
            if (lotto === winNum){
                best++;
                worst++;
                break;
            }else if(lotto === 0){
                best++;
                break;
            }
        }
    }
    answer[0] = checkCount(best);
    answer[1] = checkCount(worst);
    
    
    return answer;
}

function checkCount(count){
    if (count === 6){
        return 1;
    }else if (count === 5){
        return 2;
    }else if (count === 4){
        return 3;
    }else if (count === 3){
        return 4;
    }else if (count === 2){
        return 5;
    }else {
        return 6;
    }
}
// 버블 정렬
function sort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]){
                let temp = 0;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}


console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]));
