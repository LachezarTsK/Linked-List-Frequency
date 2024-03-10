
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public ListNode frequenciesOfElements(ListNode head) {
        Map<Integer, Integer> valueToFrequency = new HashMap<>();
        ListNode current = head;

        while (current != null) {
            valueToFrequency.put(current.val, valueToFrequency.getOrDefault(current.val, 0) + 1);
            current = current.next;
        }

        return createLinkedListForFrequencyOfValues(valueToFrequency);
    }

    private ListNode createLinkedListForFrequencyOfValues(Map<Integer, Integer> valueToFrequency) {
        ListNode dummyNodePreceedingHead = new ListNode();
        ListNode current = dummyNodePreceedingHead;

        for (int frequency : valueToFrequency.values()) {
            current.next = new ListNode(frequency);
            current = current.next;
        }

        return dummyNodePreceedingHead.next;
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {

    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
