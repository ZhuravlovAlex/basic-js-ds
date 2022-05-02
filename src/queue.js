const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const obj = {
      value: this.head.value,
      next: null
    };
    append(obj, this.head.next);

    return obj;

    function append(obj, current) {
      if (current) {
        obj.next = {
          value: current.value,
          next: null
        }
        append(obj.next, current.next);
      }
    }
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) this.head = new ListNode(value);
    else {
      let current = this.head;
      while(current.next) current = current.next;
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    //remove line with error and write your code here
    const item = this.head.value;
    this.head = this.head.next;
    return item;
  }
}

module.exports = {
  Queue
};
