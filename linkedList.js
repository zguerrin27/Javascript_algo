class Node{
  constructor(element){
    this.element = element
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
  }

  add(element){
    let node = new Node(element)
    let current;
    if(this.head === null){
      this.head = node
    } else {
      current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
  }

  insertAt(element, index){
    let node = new Node(element)
    let current, prev;

    current = this.head;
    if(index === 0){
      node.next = this.head
      this.head = node
    } else {
      let it = 0
      while(it < index){
        it++
        prev = current
        current = current.next
      }
      node.next = current
      prev.next = node
    }
  }

  


}

let list1 = new LinkedList()
list1.add(10)
list1.add(20)
console.log(list1)