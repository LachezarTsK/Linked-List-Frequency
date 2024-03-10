
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct ListNode {
    int val;
    ListNode* next;

    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {

public:
    ListNode* frequenciesOfElements(ListNode* head) const {
        unordered_map<int, int> valueToFrequency;
        ListNode* current = head;

        while (current != nullptr) {
            ++valueToFrequency[current->val];
            current = current->next;
        }

        return createLinkedListForFrequencyOfValues(valueToFrequency);
    }

private:
    ListNode* createLinkedListForFrequencyOfValues(unordered_map<int, int>& valueToFrequency) const{
        ListNode* dummyNodePreceedingHead = new ListNode();
        ListNode* current = dummyNodePreceedingHead;

        for (const auto& [value, frequency] : valueToFrequency) {
            current->next = new ListNode(frequency);
            current = current->next;
        }

        return dummyNodePreceedingHead->next;
    }
};
