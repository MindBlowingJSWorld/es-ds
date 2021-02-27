
export default interface Queue <T> {
    // Function to push element on queue
    push(data: T): void;

    // Function to pop element from the queue
    pop(): T ;

    // Function to peek element from the queue, dont delete element
    peek(): T;

    // Function to check if the queue is empty
    isEmpty(): boolean;

    // Function to check if the queue is full
    isFull(): boolean;
}