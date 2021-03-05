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



//============================================================================

function mergeLinkedLists(l1, l2, k){
  let l3 = new Node(null, null);
  let current = l3;
  
    while(l1 && l2){
      if(l1.val <= l2.val){
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;

      }
      current = current.next;
    }
  
    if(l1 === null){current.next = l2}
    if(l2 === null){current.next = l1}

  return l3.next
  
}