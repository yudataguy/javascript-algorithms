// Queue

class Queue{
  constructor(){
    this.items = []
  }

  //enqueue(item)
  //dequeue()
  //front()
  //isEmpty()
  //printQueue()

  isEmpty(){
    return this.items.length === 0 ? true : false
  }

  printQueue(){
    let str = ""
    this.items.forEach(item => str += item + " ")
    return str
  }

}

const qq = new Queue

console.log(qq.isEmpty())

console.log(qq.printQueue())