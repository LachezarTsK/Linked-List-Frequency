
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var frequenciesOfElements = function (head) {
    const valueToFrequency = new Map();
    let current = head;

    while (current !== null) {
        if (!valueToFrequency.has(current.val)) {
            valueToFrequency.set(current.val, 0);
        }
        valueToFrequency.set(current.val, valueToFrequency.get(current.val) + 1);
        current = current.next;
    }

    return createLinkedListForFrequencyOfValues(valueToFrequency);
};

/**
 * @param {Map<number, number>} valueToFrequency
 * @return {ListNode}
 */
function createLinkedListForFrequencyOfValues(valueToFrequency) {
    let dummyNodePreceedingHead = new ListNode();
    let current = dummyNodePreceedingHead;

    for (let frequency of valueToFrequency.values()) {
        current.next = new ListNode(frequency);
        current = current.next;
    }

    return dummyNodePreceedingHead.next;
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
/**
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
