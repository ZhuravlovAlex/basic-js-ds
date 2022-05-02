const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this._root) return null;
    return this._root;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this._root = _add(this._root, data);

    function _add(node, data) {
      if (!node) return new Node(data);

      if (data < node.data) node.left = _add(node.left, data);
      else node.right = _add(node.right, data);

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return _has(this._root, data);

    function _has(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) return  _has(node.left, data)
      return _has(node.right, data)
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return _find(this._root, data);

    function _find(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data < node.data) return  _find(node.left, data)
      return _find(node.right, data)
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this._root = _remove(this._root, data);

    function _remove(node, data) {
      if (!node) return null;
      if (data < node.data) node.left = _remove(node.left, data);
      else if (data > node.data) node.right = _remove(node.right, data);
      else {
        if (!node.left) {
          const temp = node.right;
          node = null;
          return temp;
        }
        if (!node.right) {
          const temp = node.left;
          node = null;
          return temp;
        }

        const temp = _min(node.right);
        node.data = temp.data;
        node.right = _remove(node.right, temp.data)

      }

      return node;
    }

    function _min(node) {
      if (!node) return null;

      let current = node;
      while(current.left) current = current.left;
      return current;
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this._root) return null;

    let current = this._root;
    while(current.left) current = current.left;
    return current.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this._root) return null;
    
    let current = this._root;
    while(current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};