class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this._length = 0;
        this._head = null;
        this._tail = null;
    }

    enqueue(data){
        // head 큐의 가장 첫번째 노드
        // tail 큐의 가장 마지막 노드
        const node = new Node(data);
        let current = this._head;
        // head가 null이나 undefined면 들어옴.
        if (!current){
            this._head = node;
            this._tail = node;
            this._length++;
        // head가 null이 아닐 때 들어와서
        // 해야 할 것은 tail을 갱신해야한다.
        // head의 next를 새로 들어온 node와 연결하고, tail을 갱신한다.
        }else {
               this._tail.next = node;
               this._tail = node;
               this._length++; 
            }
        }

    dequeue(){
        if (this._length === 0 ) return;
        const current = this._head;
        this._head = this._head.next;
        this._length--;
        return current.data;
    }

    indexOf(data){
        let current = this._head;
        let index = 0;
        while (current){
            if (current.data === data){
                return index;
            }else {
                current = current.next;
                index++;
            }
        }
    }

    dataOf(index){
        let current = this._head;
        let currentIndex = 0;
        // index일 때까지 반복문 수행
        while (currentIndex <= index){
            if (currentIndex === index){
                return current.data;
            }else {
                current = current.next;
                currentIndex++;
            }
        }
    }
}


const test1 = new Queue();
test1.enqueue('첫번째');
console.log(test1._length);
test1.enqueue('두번째');
console.log(test1._length);
test1.enqueue('세번째');
console.log(test1._length);
console.log(test1.indexOf('세번째'));
console.log(test1.dataOf(2));

while (test1._length){
    console.log(test1.dequeue());
}
