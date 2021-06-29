class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(array){
        this.head = null;
        for (const nb of array) {
            this.insertAtEnd(nb);
        }
    }
}

LinkedList.prototype.isEmpty = function(){
    return this.head == null;
}

LinkedList.prototype.insertAtEnd = function(data){
    // A newNode object is created with property data and next=null

    let newNode = new Node(data);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
    let tail = this.head;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}

LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}

LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return null;
    }
    // if only one node in the list
    if(!this.head.next){
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while(tail.next !== null){
        previous = tail;
        tail = tail.next;
    }

    previous.next = null;
    return this.head;
}

module.exports = {
    LinkedList
}