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

}

let ll = new LinkedList

ll.add('one')
ll.add('two')
ll.add('three')

console.log(ll)

ll.remove()

console.log(ll)

ll.prepand('newOne')

console.log(ll)