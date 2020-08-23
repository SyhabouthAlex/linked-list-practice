/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    }
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  };

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    }
    else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      this.length++;
    };
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) {
      throw new Error;
    };
    if (this.head === this.tail) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp.val;
    }
    let current = this.head;
    while (current !== null) {
      if (current.next === this.tail) {
        let temp = current.next;
        temp.next = null;
        current.next = null;
        this.tail = current;
        this.length--;
        return temp.val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error;
    };
    let newHead = this.head.next;
    let temp = this.head;
    temp.next = null;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length) {
      throw new Error;
    };
    let current = this.head;
    let currentIdx = 0;
    while (current !== null) {
      if (current.next === null && currentIdx < idx) {
        throw new Error;
      }
      else if (currentIdx === idx) {
        return current.val;
      }
      else {
        currentIdx++;
        current = current.next;
      };
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) {
      throw new Error;
    };
    let current = this.head;
    let currentIdx = 0;
    while (current !== null) {
      if (currentIdx === idx) {
        current.val = val;
        return;
      }
      else {
        currentIdx++;
        current = current.next;
      };
      if (current === null && currentIdx <= idx) {
        throw new Error;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error;
    };
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    let current = this.head;
    let currentIdx = 0;
    while (current !== null) {
      if (currentIdx === idx - 1) {
        let temp = current.next;
        current.next = new Node(val);
        current.next.next = temp;
        if (idx === this.length) {
          this.tail = current.next;
        }
        this.length++;
        return;
      }
      else {
        currentIdx++;
        current = current.next;
      };
      if (current === null && currentIdx <= idx) {
        throw new Error;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length) {
      throw new Error;
    };
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail.next = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    let current = this.head;
    let currentIdx = 0;
    while (current !== null) {
      if (currentIdx === idx - 1) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = null;
        this.length--;
        return current.next;
      }
      else {
        currentIdx++;
        current = current.next;
      };
      if (current === null && currentIdx <= idx) {
        throw new Error;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    };
    let current = this.head;
    let sum = 0;
    let amount = 0;
    while (current !== null) {
      sum += current.val;
      amount++;
      current = current.next;
    }
    return sum / amount;
  }
}

module.exports = LinkedList;
