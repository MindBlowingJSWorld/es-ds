
import Node from "../common/models/Node";
import Queue from "../common/interfaces/Queue";

/**
 * UseCase:  This is a queue, first in first out 
 * Nodes enter from "rear: side 
 * Nodes exist from "top: side 
 
 * Class Description:  This is array based queue implementation
 * Methods supported:  push, pop, isEmpty, isFull, peek
 * props Supported: length, isExpandable  
 */
export default class QueueImpl <T> implements Queue<T> {

    // top always remain on the top element
    private top: Node<T> | undefined;
    
    // rear always remain on the last element element
    private rear: Node<T> | undefined;

    // max length of the queue, if we want limited queue
    private maxLength: number = 0;

    // setting up isExpandable to decide if the queue has limited size or unlimited size
    private isExpandable: boolean = false;

    // keeps track of number of elements in the Queue
    public length: number = 0;

    constructor(maxLength: number, isExpandable?: boolean) {
        this.maxLength = maxLength;
        if(isExpandable) {
            this.isExpandable = isExpandable;
        }
    }

    // return top;
    getTop() {
        return this.top;
    }
    
    // Function to push element on queue
    push(data: T): void {
        const tempNode = new Node(data);
        //queue is empty
        if(!this.top && !this.rear) {
            this.top = tempNode;
            this.rear = this.top;
            this.length++;
        } else if(this.rear) {
            this.rear.next = tempNode;
            this.rear = tempNode;
            this.length++;
        }
    }

    // Function to pop element from the queue
    pop(): T  {
       if(!this.top) {
           throw new Error("queue is empty");
       }
       const currentNode = this.top;
       this.top = this.top.next;
       this.length--;
       return currentNode.data;
    }
    
    // Function to peek element from the queue, dont delete element
    peek(): T  {
        if(!this.top) {
            throw new Error("queue is empty");
        }
        const currentNode = this.top;
        return currentNode.data;
    }

    // Function to check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Function to check if the queue is full
    isFull(): boolean {
        return this.length == this.maxLength;
    }
}