class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }

    printStack() {
        let printStr = this.top == -1 ? "Empty Stack" : "Stack: " + this.arr[0];
        for(let i=1; i<=this.top; i++) {
            printStr += " , " + this.arr[i];
        }
        console.log(printStr);
    }

    size() {
        return this.top+1;
    }

    isEmpty() {
        return this.top == -1;
    }

    peek() {
        return this.arr[this.top];
    }

    push(data) {
        //Overflow condition needs to be checked here
        //In javascript we can avoid overflow condition
        if(this.top < this.arr.length) {
            this.arr[++this.top] = data;
        }
        else {
            console.log("Overflow. Cannot push");
        }
    }

    pop() {
        if(this.top == -1) {
            console.log("Underflow. Cannot pop");
        }
        else {
            return this.arr[this.top--];
        }
    }
}

module.exports = Stack;