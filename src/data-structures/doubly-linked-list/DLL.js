class Node {
  constructor(element){
    this.element = element
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  append(element){ // add one to the end of DLL
    const newNode = new Node(element)

    if (this.head === null){
      this.head = newNode
    } else {
      let current = this.head
      let previous
      while (current.next){
        previous = current
        current = current.next
      }

      current.next = newNode
      newNode.previous = current
    }
    this.size++
    return this
  }

  push(element){ // insert node at the head of DLL

    const newNode = new Node(element)

    const current = this.head
    current.previous = newNode
    newNode.next = current

    this.head = newNode

    this.size++
    return this
  }

}

const newDLL = new DoublyLinkedList()

console.log(newDLL.append('one')) 

console.log(newDLL.append('two'))

console.log(newDLL.push('newOne'))