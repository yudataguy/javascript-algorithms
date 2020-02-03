import MinHeap from '../heap/MinHeap'

export default class PriorityQueue extends MinHeap {
  constructor(){
    super()
    this.priorities = new Map()

  }

  add(item, priority = 0){
    this.priorities.set(item, priority)
    super.add(item)
    return this
  }

  remove(item){
    super.remove(item)
    this.priorities.delete(item)
    return this
  }

  findByValue(item){
    return this.find(item)
  }

  hasValue(item){
    return this.findByValue(item)
  }

  changePriority(item, priority){
    this.remove(item)
    this.add(item, priority)
    return this
  }

  comparePriority(a, b){
    if (this.priorities.get(a) === this.priorities.get(b)){
      return 0
    }
    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1
  }
}