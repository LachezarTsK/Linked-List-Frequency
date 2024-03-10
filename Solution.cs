
using System;

public class Solution
{
    public ListNode FrequenciesOfElements(ListNode head)
    {
        Dictionary<int, int> valueToFrequency = new Dictionary<int, int>();
        ListNode current = head;

        while (current != null)
        {
            if (!valueToFrequency.ContainsKey(current.val))
            {
                valueToFrequency.Add(current.val, 0);
            }
            ++valueToFrequency[current.val];
            current = current.next;
        }

        return CreateLinkedListForFrequencyOfValues(valueToFrequency);
    }

    private ListNode CreateLinkedListForFrequencyOfValues(Dictionary<int, int> valueToFrequency)
    {
        ListNode dummyNodePreceedingHead = new ListNode();
        ListNode current = dummyNodePreceedingHead;

        foreach (int frequency in valueToFrequency.Values)
        {
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
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}
