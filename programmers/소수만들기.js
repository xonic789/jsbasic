function solution(nums) {
    var answer = 0;
    let sums = [];
    

    // 모든 경우의 수를 모두 더 한다.
    for (let i = 0; i < nums.length; i++){
        let sum = 0;
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                sum = nums[i] + nums[j] + nums[k];
                sums.push(sum);
            }
        }
    }
    
    for (let sum of sums){
        if (isPrime(sum)){
            answer++;
        }
    }
    
    return answer;
}

function isPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));