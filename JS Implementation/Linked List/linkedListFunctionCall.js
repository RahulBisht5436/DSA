import { linkList } from "./baseLinkedList.js";
import { removeDuplicateElements ,AddTwoNumbers , numberGenerator,  reverseLinkedList ,  removeSpecificElements , evenOddLinkedList}  from "./addtionalFunctionality.js"

let customLinkedList = new linkList(1)
customLinkedList.addNode(2)

customLinkedList.addNode(3)
customLinkedList.addNode(4)
customLinkedList.addNode(5)




let customLinkedList2 = new linkList(6)
customLinkedList2.addNode(7)

customLinkedList2.addNode(8)
customLinkedList2.addNode(9)
customLinkedList2.addNode(1)


// customLinkedList.printLinkedList()

// console.log(reverseLinkedList(customLinkedList))
// evenOddLinkedList(customLinkedList).printLinkedList()

AddTwoNumbers(customLinkedList,customLinkedList2).printLinkedList()