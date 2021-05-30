function solution(n, lost, reserve) {
    let answer = 0;
    reserve = reserve.filter(it => !lost.includes(it));
    
    lost = lost.filter(it => !reserve.includes(it));
    
    answer = n - lost.length;
    for (let i = 0; i < reserve.length; i++){
        for (let j = 0; j < lost.length; j++){
            if (reserve[i] - 1 === lost[j]){
                lost[j] = -2;
                answer++;
                break;
            }else if(reserve[i] + 1 === lost[j]) {
                lost[j] = -2;
                answer++;
                break;
            }
        }
        if (lost[lost.length - 1] === -2){
            break;
        }
    }

    
    
    
    return answer;
}

console.log(solution(5,[2,4],[1,3,5]));