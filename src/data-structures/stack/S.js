class Stack{
  constructor(){
    this.items = []
  }

  // push 
  // pop
  // isEmpty
  // peek
  // to array
  // to string

  push(value){
    this.items = [value, ...this.items]
    return this
  }

  pop(){
    const result = []
    for (let i = 1; i < this.items.length; i++){
      result.push(this.items[i])
    }
    this.items = result
    return this
  }

  isEmpty(){
    return this.items.length === 0 ? true : false
  }

  front(){
    if (this.isEmpty()) return null
    return this.items[0]
  }
  
}

const ss = new Stack

ss.push('hello')
ss.push('world')
ss.push('three')

ss.pop()

console.log(ss.isEmpty())

console.log(ss.front())

console.log(ss.items)