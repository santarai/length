class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    length() {
        var runner = this.head;
        var numNodes = 0;
        while(runner) {
            nodes++;
            runner = runner.next;
        }
        return numNodes;
    }
}