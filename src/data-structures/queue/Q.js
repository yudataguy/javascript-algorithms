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

  front(){ // take a look at the head of the queue
    if (!this.items[0]) return null
    return this.items[0]
  }

  enqueue(value){ // add value to the end of queue
    this.items.push(value)
    return this
  }

  dequeue(){ // remove from the front of queue
    const result = []
    for (let i = 0; i < this.items.length; i++){
      if (i !== 0) result.push(this.items[i])
    }
    this.items = result
    return this
  }

}

const qq = new Queue

qq.enqueue('new')
qq.enqueue('new2')
console.log(qq.isEmpty())

console.log(qq.printQueue())

console.log(qq.front())

console.log(qq.dequeue())
