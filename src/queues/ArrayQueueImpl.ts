
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
export default class ArrayQueueImpl <T> implements Queue<T> {

    // top always remain on the top element
    private top: number = 0;
    
    // max length of the queue, if we want limited queue
    private maxLength: number = 0;

    // setting up isExpandable to decide if the queue has limited size or unlimited size
    private isExpandable: boolean = false;

    // keeps track of number of elements in the Queue
    public length: number = 0;

    // queueData to maintain the queue
    private queueData: Array<T> = [];

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
        this.queueData.push(data);
        this.length++;
    }

    // Function to pop element from the queue
    pop(): T  {
       if(this.length === 0) {
           throw new Error("queue is empty");
       }
       const data = this.queueData[this.top];
       this.queueData.splice(0, 1);
       this.length--;
       return this.queueData[this.top];
    }
    
    // Function to peek element from the queue, dont delete element
    peek(): T  {
       return this.queueData[this.top];
    }

    // Function to check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Function to check if the queue is full
    isFull(): boolean {
        return this.length == this.maxLength;
    }

    // get data items
    public getDataItems = (): any => {
        return this.getDataItems;
    }
}