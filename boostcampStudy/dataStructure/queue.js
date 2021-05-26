class QueueNode{
    constructor(item){
       this.item = item;
       this.next = null; 
    }
}

class Queue{
    
    constructor(array){
        console.log(array);
        this.length = 0;
        // dequeue
        this.front = null;
        // enqueue
        this.rear = null;
        if(array){
            for (let item of array){
                this.enqueue(item);
            }
        }
    }

    enqueue(item){
        let node = new QueueNode(item);
        let current = this.front;
        // javascript boolean
        // C : false 0 true 1;
        // NULL, Undefined 
        // python : 0 이 아닌 수는 다 True
        // 
        if (!current){
            this.front = node;
            this.rear = node;
            this.length++;
        }else{
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }

    dequeue(){
        if (!this.front){
            throw new Error("empty queue");
        }
        let node = this.front;
        this.front = this.front.next;
        this.length--;
        return node.item;
    }

    frontItem(){
        this.checkFront();
        return this.front.item;
    }

    rearItem(){
        this.checkFront();
        return this.rear.item;
    }

    checkFront(){
        if(!this.front){
            throw new Error("empty queue");
        }
    }
}

const queue = new Queue([4,5,6]);


queue.enqueue(1);
let current = queue.front;
while (current){
    console.log(current.item);
    current = current.next;
}
console.log(`front : ${queue.frontItem()}`);
console.log(`rear : ${queue.rearItem()}`);
console.log(`queue dequeue ${queue.dequeue()}`)
queue.enqueue(2);
console.log(`front : ${queue.frontItem()}`);
console.log(`rear : ${queue.rearItem()}`);
console.log(`queue dequeue ${queue.dequeue()}`)
queue.enqueue(3);
console.log(`front : ${queue.frontItem()}`);
console.log(`rear :  ${queue.rearItem()}`);
console.log(`queue dequeue ${queue.dequeue()}`)
console.log(`queue dequeue ${queue.dequeue()}`)
console.log(`queue dequeue ${queue.dequeue()}`)
console.log(`queue dequeue ${queue.dequeue()}`)
