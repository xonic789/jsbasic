class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }

}
class Hashchain{

    /* 
     *  This is HashTable Object class.
        Hash collision is implemented as a linked list using pointers.


        put O(1) (hash collision O(n))
        remove O(1) (hash collision O(n))
        get O(1) (hash collision O(n))
    */  
    constructor(size){
        
        // bucket으로 쓸 array를 소수로 초기화 하는 과정.
        if (!size){
            this.size = 13;
        }else {
            this.size = size;
        }
        this.array = new Array(size).fill(null);
    }
    
    put(key, value){
        let node = new Node(key, value);
        const hashKey = this.#hash(key);
        if (this.checkKey(hashKey)){
            return;
        }
        // 들어온 key index를 참조
        // null이나 undefined이면
        if (!this.array[hashKey]){
            this.array[hashKey] = node;
        }else{
            let item = this.array[hashKey].next;
            // next pointer가 null이라면
            if (!item){
                this.array[hashKey].next = node;
            }else {
                while (item){
                    if (!item.next){
                        item.next = node;
                        break;
                    }else {
                        item = item.next;
                    }
                }
            }
            
        }
    }

    #hash(item){
        if (typeof item === 'number'){
            console.log(`hashKey ${hashKey}`);
            return item % this.size;        
        }else if(typeof item === 'string' ){
            let sum = 0;
            for (let i = 0; i < item.length; i++){
                sum += item.charCodeAt(i); 
            }
            return sum % this.size;
        }else{
            console.log('해당 key는 number 또는 string이 아닙니다.');
            return -1;
        }
    }

    checkKey(key){
        return key === -1;
    }
 
    get(key){
        let hashKey = this.#hash(key);
        if (this.checkKey(hashKey)){
            return;
        }
        let item = this.array[hashKey];
        console.log(`get key : ${key}`);
        // 받아온 key로 array의 해당 index를 참조했을때 null이면
        if (!item){
            return null;
        // null이 아니면 있으므로 들어옴
        }else {
            // 해당 키가 array의 해당 index를 참조했을 때 파라미터로 넘어온 키가 같다면
            if (item.key === key){
                return item.value;
            // 같지 않으면 다음 노드에 있다는 이야기 이므로 선형탐색 실행.
            }else {
                let current = item.next;
                // function으로 중복코드 뺄 생각.
                while (current){
                    if (current.key === key){
                        return current.value;
                    }else{
                        current = current.next;
                    }
                }
            }
        }
    }

    remove(key){
        let hashKey = this.#hash(key);
        if (this.checkKey(hashKey)){
            return;
        }
        let item = this.array[hashKey];
        if (!item){
            console.log("해당 key는 존재하지 않습니다.");
            return;
        }else{
            if (key == item.key){
                this.array[hashKey] = null;
            }else{
                let current = item.next;
                while (current){
                    if (current.key === key){
                        item.next = null;
                        break;
                    }else {
                        current = current.next;
                    }
                }
            }
        }
    }


}

const hashChain = new Hashchain();

hashChain.put(0,'첫번째');
hashChain.put(13,'첫번째첫번째');
hashChain.put(26,'첫번째첫번째하이');
hashChain.put(2,'세번째');
hashChain.put(3,'네번째');
hashChain.put(4,'다섯번째');
console.log(`get ${hashChain.get(0)}`);
console.log(`get ${hashChain.get(13)}`);
console.log(`get ${hashChain.get(26)}`);

const hashChain2 = new Hashchain();

hashChain2.put('첫번째',1);
hashChain2.put('두번째',2);
hashChain2.put('세번째',3);
hashChain2.put('네번째',4);
hashChain2.put('다섯번째',5);

console.log(`get value is ${hashChain2.get('첫번째')}`);
console.log(`get value is ${hashChain2.get('두번째')}`);
console.log(`get value is ${hashChain2.get('세번째')}`);
console.log(`get value is ${hashChain2.get('네번째')}`);
console.log(`get value is ${hashChain2.get('다섯번째')}`);

hashChain2.remove('첫번째');
hashChain2.remove('두번째');

console.log(`get key ${hashChain2.get('첫번째')}`);
console.log(`get key ${hashChain2.get('두번째')}`);


