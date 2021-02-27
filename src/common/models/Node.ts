/**
 * Class Description: Simple Node with Data T, can have next property
 */
export default class Node <T> {
    private value: T ;
    private nextNode?: Node<T> ;

    constructor(value: T, next?: Node<T> | undefined) {
        this.value = value;      
        this.next = next;      
    }

    // setter method for data
    set data(value: T) {
        this.value = value;
    }

    //getter method for data
    get data(): T {
        return this.value;
    }
    
    // setter method for next
    set next(value: Node<T> | undefined) {
        this.nextNode = value;
    }

    //getter method for next
    get next():  Node<T> | undefined {
        return this.nextNode;
    }
}