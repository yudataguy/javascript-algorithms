class Heap {
  constructor(){
    this.capacity = 10
    this.size = 0
    this.items = []
  }

  // helpter functions
  swap(indexOne, indexTwo){
    [this.items[indexOne], this.items[indexTwo]] = [this.items[indexTwo], this.items[indexOne]]
  }

  getLeftChildIndex(parentIndex){
    return (2 * parentIndex) + 1
  }

  getRightChildIndex(parentIndex){
    return (2 * parentIndex) + 1
  }

  getParentIndex(childIndex){
    return Math.floor((childIndex - 1) / 2)
  }

  hasLeftchild(parentIndex){
    return this.getLeftChildIndex(parentIndex) < this.items.length
  }

  hasRightChild(parentIndex){
    return this.getRightChildIndex(parentIndex) < this.items.length
  }

  hasParnet(childIndex){
    return this.getParentIndex(childIndex) >= 0
  }

  leftChild(parentIndex){
    return this.items[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex){
    return this.items[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex){
    return this.items[this.getParentIndex(childIndex)]
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

  isEmpty(){
    return !this.size
  }

  heapifyUp(customIndex){
    let currentIndex = customIndex || this.items.legnth - 1

    while(
      this.getParentIndex(currentIndex) && (this.parent(currentIndex) < this.items[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }

  }

  heapifyDown(customIndex){
    let currentIndex = customIndex || this.items.legnth - 1

    while(this.hasLeftchild(currentIndex)){
      if (
        this.hasParent(currentIndex) && (this.leftChild(currentIndex) > this.rightChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }
    

      if (this.items[currentIndex] < this.items[nextIndex]) break

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex

    }
  }

  remove(item){
    

  }

  find(item){
    const foundItemIndicies = []

    for (let i = 0; i < this.items.length; i++){
      if(item === this.items[i]) foundItemIndicies.push(i)
    }

    return foundItemIndicies

  }
}