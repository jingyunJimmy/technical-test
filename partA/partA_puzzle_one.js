const LinkedList = require('./linked_list').LinkedList;

// A function that returns the 5th element from the tail (or end) of a singly linked list of integers.
function fifth_element_from_tail(list) {
    // start from the head
    let temp = list.head;
    while (temp) {
        // detect the next 5 nodes
        let detect = temp;
        let count = 0;
        while (detect && count < 5) {
            detect = detect.next;
            count++;
        }
        if (!detect && count === 5) {
            return temp.data;
        }

        // move to the next node
        temp = temp.next;
    }
    return null;
}

function main() {
    const list_1 = new LinkedList([]);
    console.log(fifth_element_from_tail(list_1));  // null

    const list_2 = new LinkedList([1, 2]);
    console.log(fifth_element_from_tail(list_2));  // null

    const list_3 = new LinkedList([1, 2, 3, 4, 5]);
    console.log(fifth_element_from_tail(list_3));  // 1

    const list_4 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(fifth_element_from_tail(list_4));  // 5

    const array = Array.from({length: 99999}, (_, index) => index + 1)
    const list_5 = new LinkedList(array);
    console.log(fifth_element_from_tail(list_5));  // 99995
}

main()