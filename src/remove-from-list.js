const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let index;
  do {
    index = getIndex(k);
    l = remove(index);
  } while(index >= 0);

  return l;

  function getIndex(elem) {
    let current = l;
    let index = 0;

    while (current) {
      if (current.value === elem) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  
  function remove(position) {
  if (position < 0) return l;
  if (position === 0) {
    l = l.next;
    return l;
  }

  let current = l;
  let index = 0;

  while(index !== position - 1) {
    current = current.next;
    index++;
  }

  const _node = current.next;
  current.next = _node.next;

  return l;
    
  
}

 
}


  

module.exports = {
  removeKFromList
};
