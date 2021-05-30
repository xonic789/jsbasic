function solution(n, lost, reserve) {
    let answer = 0;
    answer = n - lost.length;
    
    for (let i = 0; i < reserve.length; i++){
        for (let j = 0; j < lost.length; j++){
            if (reserve[i] === lost[j]){
                lost[j] = -99;
                reserve[i] = -90;
                answer++;
                break;
            }
        }
    }
    

    
    for (let i = 0; i < reserve.length; i++){
        for (let j = 0; j < lost.length; j++){
            if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]){
                lost[j] = -99;
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