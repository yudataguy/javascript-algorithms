class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0
  }

  add(element){ // add new node to the end of linked list
    const node = new Node(element)

    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }

  remove(){ // remove node from the end of linked list
    let current, previous

    if (this.head === null) {
      return
    } else {
      previous = this.head
      current = this.head.next

      while (current.next) {
        previous = current
        current = current.next
      }

      previous.next = null
    }

    this.size--

  }

  prepand(element){ // add value to the head of linked list
    const node = new Node(element)

    if (this.head == null){
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    
    this.size++

  }

  insertAt(element, index){
    const node = new Node(element)

    if (index < 0 || index > this.size ){
      return false
    } else {
      
      let current, previous

      current = this.head

      if (index === 0){
        node.next = this.head
        this.head = node
      } else {
        let curIndex = 0
        while (curIndex < index){
          curIndex++
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }

      this.size++
    }
  }

  removeAt(index){

    if (index < 0 || index > this.size){
      return false
    } else {
      let current, previous
      current = this.head

      if (index === 0){
        this.head = this.head.next
      } else {
        let curIndex = 0
        while (curIndex < index){
          curIndex++
          previous = current
          current = current.next 
        }
        previous.next = current.next
      }

      this.size--
    }
  }

  removeElement(element){
    
    let previous
    let current = this.head
    while (current !== null){
      if (current.element === element){
        if (!previous) this.head = current.next
        else previous.next = current.next
        this.size--
        return current.element
      }
      previous = current
      current = current.next
    }
    return false
  }

}

// Test

let ll = new LinkedList

ll.add('one')
ll.add('two')
ll.add('three')

ll.insertAt('new1', 1)

console.log(ll)

// ll.insertAtAt('false', -1)

ll.removeAt(1)

// console.log(ll)

const result = ll.removeElement('two')

console.log(ll)
console.log("Removed: ", result)

// ll.prepand('newOne')

// console.log(ll)