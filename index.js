
// Array
// Object
// Set
// Map
// WeakMap, WeakSet

// Linked List
// [value, next] -> [value, next] -> [value, next]
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) { // adding last element to list
    const node = new Node(data)

    if (this.tail) { // checking if last element exist we need to assign previous last element value of next element
      this.tail.next = node
    }

    if (!this.head) {  // checking if there is not head then linked list with one element
      this.head = node // and it element will be a head and tail at the same time
    }

    this.tail = node
  }

  prepend(data) {
    const node = new Node(data, this.head)

    this.head = node

    if (!this.tail) {  // checking if there is not tail then linked list with one element
      this.tail = node // and it element will be a tail and head at the same time
    }
  }

  insertAfter (afterEl, data) {
    const found = this.find(afterEl)

    if(!found) {
      throw new Error('There is not any such data in this Linked List')
    }

    const node = new Node(data, found.next)
    found.next = node
  }

  find (data) {
    if (!this.head) {
      throw new Error('List is empty')
    }

    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
  }

  remove (data) {
    if (!this.head) {
      throw new Error('List is empty')
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }

    if (this.tail.data === data) {
      this.tail = current
    }
  }

  toArray () {
    const output = []
    let current = this.head
    while (current) {
      output.push(current)
      current = current.next
    }

    return output
  }
}

const list = new LinkedList();
list.prepend('It head')
list.append('Hi')
list.append('Hi 2')
list.prepend('It is new head')
list.append('Hi 3')
//list.append('Hi 4')
list.append('Hi 5')
list.insertAfter('Hi 3', 'Hi 4')
list.insertAfter('Hi 5', 'To delete')
list.append('Hi 6')
list.remove('To delete')

console.log(list.toArray())
console.log(list.find('Hi 3'))
