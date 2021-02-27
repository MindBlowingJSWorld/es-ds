import ArrayQueueImpl from "../../src/queues/ArrayQueueImpl"
import {getRandomNumber} from "../common/utils";

/**
 * ArrayQueueImpl Tests
 */
describe("ArrayQueueImpl Tests", () => {

  let instance: ArrayQueueImpl<number>;
  const maxLength: number = 5;

  // populate data based on nodes
  const populateData = (numberOfNode: number): boolean => {
    if(numberOfNode > maxLength) {
        return false;
    }
    for(var i=0; i<numberOfNode; i++) {
        const data: number = getRandomNumber();
        instance.push(data);
        console.log(`Data Pushed in Queue: ${data}`);
    }
    return true;
  }

  // print all records from queue
  const printData = () => {
    console.log(`Data in the queue: [${instance.getDataItems().join(",")}]`); 
  };

  // Drain the queue
  const drainQueue = () => {
      do {
        const currentNode: any = instance.pop();
        console.log(`${currentNode}`);
      } while(!instance.isEmpty());
  };

  beforeEach(() => {
    instance = new ArrayQueueImpl<number>(maxLength);
    
  });

  it("Able to create ArrayQueueImpl", () => {
    expect(instance).toBeInstanceOf(ArrayQueueImpl)
  });

  it("Able to push and pop 5 elements",  () => {
    populateData(5);
    expect(instance.length).toBe(5);
    console.log(`Print Data after pushing data`);
    printData();
    console.log(`Print Data after draining data`);
    drainQueue();
    expect(instance.length).toBe(0);
  });

  it("Able to push 1 element and peek it",  () => {
    populateData(1);
    expect(instance.length).toBe(1);
    expect(instance.peek()).toBeTruthy();
    instance.pop();
    expect(instance.length).toBe(0);
  });

})
