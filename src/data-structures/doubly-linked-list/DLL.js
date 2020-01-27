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

  prepend(element){ // insert node at the head of DLL

    const newNode = new Node(element)

    const current = this.head
    current.previous = newNode
    newNode.next = current

    this.head = newNode

    this.size++
    return this
  }

  delete(element){
    // remove element, change the previous - current - next relation
    // next.previous = previous, previous.next = next 

    let current = this.head
    let next = current.next
    let previous
    if (this.head.element === element){
      this.head = next
      this.head.previous = null
    } else {
      while (current.element !== element){
        previous = current
        current = next
        next = current.next
      }

      next.previous = previous
      previous.next = next

      this.size--
      return this
    }
  }

  fromArray(elArray){
    elArray.forEach(el => this.append(el))
    return this
  }

  toArray(){
    let theArray = []

    let current = this.head 
    while (current){
      theArray.push(current.element)
      current = current.next
    }
    return theArray
  }

  reverse(){
    let current = this.head
    let previous, next

    while (current){
      next = current.next
      previous = current.previous

      current.next = previous
      current.previous = next

      previous = current
      current = next
    }

    this.head = previous
    return this
  }

}

const newDLL = new DoublyLinkedList()

newDLL.append('one')
newDLL.append('two')
newDLL.prepend('newOne')

newDLL.delete('one')

newDLL.fromArray(['three', 'two', 'one'])

newDLL.reverse()

console.log(newDLL)
