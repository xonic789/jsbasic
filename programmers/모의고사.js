function solution(answers) {
    let answer = [];
    let points = [0, 0, 0];
    let patterns = [
       [1, 2, 3, 4, 5],
       [2, 1, 2, 3, 2, 4, 2, 5],
       [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,] 
    ];
    for (let i = 0; i < answers.length; i++){
        let correct = answers[i];
        if (isCorrect(patterns[0][i%5],correct)){
            points[0]++;
        }
        if (isCorrect(patterns[1][i%8],correct)){
            points[1]++; 
        }
        if (isCorrect(patterns[2][i%10],correct)){
            points[2]++;   
        }
    }

    let max = 0;
    for (let item of points){
        if (points[item] > max){
            max = points[item];
        }
    }

    for (let i = 0; i < points.length; i++){
        if (points[i] === max){
            answer.push(i + 1);
        }
    }

    
    return answer;
}

function isCorrect(answer,correct){
    if (answer === correct){
        return true;
    }
    return false;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));