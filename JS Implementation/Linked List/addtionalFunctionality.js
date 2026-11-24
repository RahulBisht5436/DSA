
import { linkList, Node } from "./baseLinkedList.js";
function reverseLinkedList(linkedList) {
    if (linkedList.getSize() == 0 || linkedList.getSize() == 1) return
    let previousNode = linkedList.head
    let currNode = linkedList.head.next
    if (linkedList.getSize == 2) {
        currNode.next = previousNode
        linkedList.head = currNode
        return linkedList
    }
    let nextNode = linkedList.head.next.next
    while (currNode.next != null) {
        currNode.next = previousNode
        previousNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    currNode.next = previousNode;
    linkedList.head.next = null
    linkedList.head = currNode
    return linkedList

}


// revsereLinkedList = reverseLinkedList(customLinkedList)



function cloneLinkedList(linkedList) {
    const newList = new linkList();
    let curr = linkedList.head;
    if (!curr) return newList;

    newList.head = new Node(curr.value);
    let newCurr = newList.head;
    curr = curr.next;

    while (curr) {
        newCurr.next = new Node(curr.value);
        newCurr = newCurr.next;
        curr = curr.next;
    }
    return newList;
}


function checkCirlcularLinkedList(linkedList) {
    if (linkedList.getSize() > 2) {
        return false
    }
    pointerSlow = linkedList.head
    pointerFast = linkedList.head

    do {
        pointerSlow = pointerSlow.next
        pointerFast = pointerFast.next.next
        if (pointerFast == null || pointerFast.next == null) {
            return false
        }
    } while (pointerSlow !== pointerFast);
    return true


}


function getCenteralNode(linkedList) {
    let slow = linkedList.head
    let fast = linkedList.head
    let count = 1
    do {
        slow = slow.next
        fast = fast.next.next
        count += 1


    } while (fast.next != null && fast.next.next != null)

    return [slow, count]
}


function palidromeLinkedList(linkedList) {
    if (!linkedList.head || !linkedList.head.next) return true;

    // 1. Find the middle node (e.g., node 20 in [10, 30, 20, 10], or node 30 in [10, 20, 30, 20, 10])
    let slow = linkedList.head;
    let fast = linkedList.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Standard 3-pointer reversal starting from 'slow'
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // 3. Compare from both ends until the reversed half ('secondHead') finishes
    let firstHead = linkedList.head;
    let secondHead = prev;
    while (secondHead !== null) {
        if (firstHead.value !== secondHead.value) {
            return false;
        }
        firstHead = firstHead.next;
        secondHead = secondHead.next;
    }

    return true;
}

function removeSpecificElements(linkedList,value){
    if (linkedList.head == null) return false
    if(linkedList.head.next == null && linkedList.head.value == value ) return null
    let currNode = linkedList.head
    let prevElement = new Node()
    prevElement.next = linkedList.head
    let nextElement = currNode.next
    while(currNode != null){
        console.log(currNode.value,"=====================")

        if (currNode.value == value){
             if (linkedList.head == currNode) linkedList.head = linkedList.head.next 
            prevElement.next = nextElement
            currNode = nextElement
            nextElement = currNode?.next
           
        }else{
            prevElement = currNode
            currNode = nextElement
            nextElement = currNode?.next 
        }
    }
    console.log(`==========Changes for the removed Element : ${value} =============`)
    linkedList.printLinkedList()
    return linkedList

}


function removeDuplicateElements(linkedList){
    if ( linkedList.head == null || linkedList.head.next == null ) return linkedList
    
    let currNode = linkedList.head
    while(currNode.next){
        if(currNode.value == currNode.next.value && currNode.next.next == null){
            currNode.next =null
            return linkedList
        }
        else if(currNode.value == currNode.next.value){
            currNode.next = currNode.next.next
        }else{
            currNode= currNode.next
        }
        
    }
    
    return linkedList
}

function evenOddLinkedList(linkedList){
    if(linkedList.head == null || linkedList.head.next == null || linkedList.head.next.next == null ) return linkedList
    let SentianlNode1 = new Node()
    let SentianlNode2 = new Node()
    SentianlNode1.next = linkedList.head
    SentianlNode2.next = linkedList.head.next
    let H1HeadPointer  = linkedList.head
    let H2HeadPointer = linkedList.head.next
    let temp = linkedList.head.next.next
    while(temp != null && temp.next != null){
        H1HeadPointer.next = temp
        H1HeadPointer = temp
        H2HeadPointer.next = temp.next
        H2HeadPointer = temp.next
        temp = temp.next.next
    }
    if(temp != null && temp.next == null){
        H1HeadPointer.next = temp
        H1HeadPointer = temp
    }
    H1HeadPointer.next =  SentianlNode2.next
    linkedList.head = SentianlNode1.next
    H2HeadPointer.next = null
    return linkedList

}

function numberGenerator(linkedList){
    let currNode = linkedList.head 
    let power = 0 
    let sum = 0 
    while(currNode !== null){
        // console.log(`${currNode.value} * ${10 ** power} + ${sum } `)
        sum = currNode.value *  (10 ** power) + sum
        power+=1
        currNode= currNode.next
    }
    return sum
}

function AddTwoNumbers(L1,L2){
    let sum1 = numberGenerator(L1)
    console.log(sum1)
    let sum2 = numberGenerator(L2)
    console.log(sum2)
    let sum = sum1 + sum2
    console.log(sum)
    let linkedList = new linkList(1)
    while(sum > 0 ){
        linkedList.addNode(sum%10)
        sum = Math.floor(sum/10)
    }
    linkList.removeAtHead
    return linkedList

}

export { numberGenerator , removeSpecificElements ,  reverseLinkedList , cloneLinkedList , checkCirlcularLinkedList , getCenteralNode , palidromeLinkedList ,removeDuplicateElements , evenOddLinkedList , AddTwoNumbers}