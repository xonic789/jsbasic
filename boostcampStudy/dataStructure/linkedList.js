class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}

class LinkedList{

    constructor(array){
        console.log(array);
        this._head = null;
        this._length = 0;
        if (array){
            for (let item of array){
                this.add(item);
            }
        }
    }

    add(item){
        let node = new Node(item);
        if (!this._head){
            this._head = node;
        }else{
            let current = this._head;
            // O(n)
            while (current){
                // 현재 노드의 넥스트가 null 이라면
                if (!current.next){
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
    }

    remove(index){
        let i = 0;
        let current = this._head;
        if (index === 0){
            this._head = current.next;
        }else{
            // index가 head를 가리키는게 아니면.
            ++i; // 1
            // current가 null일 때까지.
            while (current){
                // current.next가 null이 아니면
                // current.next가 현재 인덱스를 말함.
                if (index === i){
                    if (!current.next.next){
                        current.next = null;
                    }else {
                        current.next = current.next.next;
                    }
                    break;
                }else {
                    current = current.next;
                    i++;
                }
            }
        }
    }



    indexOf(item){
        let index = 0;
        let current = this._head;
        // 선형탐색해서 index 리턴
        while (current){
            if (current.item === item){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    

}

let list = new LinkedList();

list.add('첫번째');
list.add('두번째');
list.add('세번째');
list.add('네번째');
list.remove(list.indexOf('두번째'));
let current = list._head;
while (current){
    console.log(current);
    current = current.next;
}