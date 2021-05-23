class Stack{
    length = 0;
    _arr = [];
    constructor() {
    }

    push(item){
        this._arr[this.length++] = item;
    }
    
    pop(){
       if (this.checkLength()) return;
        const item = this.peek();
        this._arr.length = --this.length;
        return item;
    }

    peek(){
        if (this.checkLength()) return;
        return this._arr[this.length - 1];
    }

    checkLength(){
        return this.length === 0;
    }
}

const test1 = new Stack();
test1.push('첫번째');
test1.push('두번째');
console.log("시작 길이 " + test1.length);
console.log(`peek ${test1.peek()}`);
console.log(`길이 ${test1._arr.length}`);
console.log(`pop ${test1.pop()}`);
console.log(`길이 ${test1._arr.length}`);

console.log(test1.peek());
console.log(`길이 ${test1._arr.length}`);
console.log(test1.pop());
console.log(test1._arr.length);
console.log(test1.length);

