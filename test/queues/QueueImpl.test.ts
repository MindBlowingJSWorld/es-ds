import QueueImpl from "../../src/queues/QueueImpl"
import Node from "../../src/common/models/Node"
import {getRandomNumber} from "../common/utils";

/**
 * QueueImpl Tests
 */
xdescribe("QueueImpl Tests", () => {

  let instance: QueueImpl<number>;
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
    let current: any = instance.getTop();
    const dataItems = [];
      do {
        dataItems.push(`${current.value}`);
        current = current.next;
      } while(current);
      console.log(`Data in the queue: [${dataItems.join(",")}]`);  
  };

  // Drain the queue
  const drainQueue = () => {
      do {
        const currentNode: any = instance.pop();
        console.log(`${currentNode}`);
      } while(!instance.isEmpty());
  };

  beforeEach(() => {
    instance = new QueueImpl<number>(maxLength);
    
  });

  it("Able to create QueueImpl", () => {
    expect(instance).toBeInstanceOf(QueueImpl)
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
