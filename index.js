class LLNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const a = new LLNode('A')
const b = new LLNode('B')
const c = new LLNode('C')
const d = new LLNode('D')

a.next = b
b.next = c
c.next = d

const One = new LLNode(1)
const Two = new LLNode(2)
const Three = new LLNode(3)
const Four = new LLNode(4)

One.next = Two
Two.next = Three
Three.next = Four

const llFind = (head, target) => {
    let curr = head
    while (curr !== null) {
        if (curr.value === target) return true
        curr = curr.next   
    }
    return false
}
console.log(llFind(a, 'D'))

const reverseLL = (head) => {
    let curr = head
    let prev = null
    
    while (curr !== null) {
        let next = curr.next
        
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
console.log(reverseLL(a))

const llGetNodeValue = (head, index) => {
    let curr = head
    let count = 0
    
    while (curr !== null) {
        if (count++ === index) return curr.value
        curr = curr.next
    }
    return null
}
console.log(llGetNodeValue(a, 2))

const llSum = (head) => {
    let curr = head
    let sum = 0

    while (curr !== null) {
        sum += curr.value
        curr = curr.next
    }

    return sum
}
console.log(llSum(One))

const llValues = (head) => {
    let curr = head
    let values = []

    while (curr !== null) {
        values.push(curr.value)
        curr = curr.next
    }
    return values
}
console.log(llValues(a))

const traversal = (head) => {
    let curr = head

    while (curr !== null) {
        console.log('curr', curr.value)
        curr = curr.next
    }
}
traversal(a)
