
function frequenciesOfElements(head: ListNode | null): ListNode | null {
    const valueToFrequency: Map<number, number> = new Map();
    let current: ListNode = head;

    while (current !== null) {
        if (!valueToFrequency.has(current.val)) {
            valueToFrequency.set(current.val, 0);
        }
        valueToFrequency.set(current.val, valueToFrequency.get(current.val) + 1);
        current = current.next;
    }

    return createLinkedListForFrequencyOfValues(valueToFrequency);
};


function createLinkedListForFrequencyOfValues(valueToFrequency: Map<number, number>): ListNode {
    let dummyNodePreceedingHead: ListNode = new ListNode();
    let current: ListNode = dummyNodePreceedingHead;

    for (let frequency of valueToFrequency.values()) {
        current.next = new ListNode(frequency);
        current = current.next;
    }

    return dummyNodePreceedingHead.next;
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
