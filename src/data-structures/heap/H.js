class Heap {
  constructor(){
    this.capacity = 10
    this.size = 0
    this.items = []
  }

  // helpter functions
  swap(valueOne, valueTwo){

  }




  // end of helper functions

  peek(){ // get the top of heap
    if (this.size === 0) return null
    return this.items[0]
  }

  poll(){ // remove the 1st element from items
    if (this.size === 0) return null
    const item = this.items[0]
    this.items[0] = this.items[-1]
    this.size--
    this.heapifyDown()
    return item
  }

  add(value){ // add an element to the end of items
    this.items[this.size] = value
    this.size++
    this.heapifyUp()
  }

  heapifyUp(){

  }

  heapifyDown(){

  }
}