class HashTable{
  constructor(){
    this.table = {}
  }

  //hash(key)
  //set
  //delete
  //get
  //has(key)
  //get(key)

  hash(key){ // return the hashed key value
    let hash = 0
    let char
    if(key.length === 0) return hash
    for (let i = 0; i <key.length; i++){
      char = key.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash |= 0
    }
    return hash
  }

  set(key, value){
    const hashedKey = this.hash(key)
    // use linked list to setup duplicate key
    let bucket = this.table[hashedKey]
    
    if (!bucket){
      bucket = []
      this.table[hashedKey] = bucket
    }

    
    
  }
}

const hashes = new HashTable

console.log(hashes.set('apple', 234))

console.log(hashes.set('apple', 20342))