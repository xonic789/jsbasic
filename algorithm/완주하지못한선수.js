function solution(participant, completion) {
    var answer = '';
    let tempArray = {};
    participant.sort();
    completion.sort();

    for (let name of participant){
        if (!tempArray[name]){
            tempArray[name] = 1;
        }else{
            tempArray[name]++;
        }
    }

    for (let name of completion){
        if (tempArray[name]){
            tempArray[name]--;
        }
    }

    for (let name of participant){
        if (tempArray[name] >= 1){
            answer = name; 
        }
    }

    return answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));
