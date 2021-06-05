class StackNode{
    // 연결 노드.
    // *p 
    constructor(item){
        this.item = item;
        this.next = null;
    }
}

class Stack{
    // 생성자
    

    constructor(array){
            // 기본값 초기화
        this.length = 0;
        // top : 제일 마지막 데이터(pop할 노드)
        this.top = null;
        // 인스턴스를 생성할 때 배열이 들어온다면,
        // 생성자에 배열이 null이 아니거나 undefined 아니면
        if (array){
            for (let item of array){
                this.push(item);
            }
        }
    }
    /*
    * const stack = new Stack();
    * top : null
    * length : 0;
    * stack.push(1);
    * top = node
    * node.next = null
    * 
    */
    push(item){
        let node = new StackNode(item);
        // field.top이 null이거나 undefined이면 들어옴.
        if (!this.top){
            this.top = node;
            this.length++; 
        }else {
            if (typeof this.top.item !== typeof node.item){
                throw new Error("type error");
            }
            node.next = this.top;
            this.top = node;
            this.length++;
        }
    }

    /*
    * top -> node
    * 
    * 
    *
    *   */
    // 최근 들어온 것 삭제
    pop(){
        this.checkTop();
        let node = this.top;
        this.top = this.top.next;
        this.length--;
        return node.item;
        
    }

    checkTop(){
        // field.top이 null이거나 undefined이면 들어옴.
        if (!this.top){
            throw new Error("empty stack");
        }
    }

    // 참조
    peek(){
        return this.top.item;
    }
    
}

//var, let, const


function solution(board, moves) {
    var answer = 0;
    let stack = new Stack();
    
    
    for (let move of moves){
        for (let i = 0; i < board.length; i++){
            let doll = board[i][move - 1];
            if (doll !== 0){
                board[i][move - 1] = 0;
                stack.push(doll);
                if (stack.length >= 2){
                    if (stack.top.next.item === doll){
                        stack.pop();
                        stack.pop();
                        answer += 2;
                    }
                }
                break;
            }
        }
    }
    
    return answer;
}

console.log(solution(
    [
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]],
        [1,5,3,5,1,2,1,4]));