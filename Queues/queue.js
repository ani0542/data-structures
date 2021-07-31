class Queue {
    constructor(size) {
        this.arr = [];
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    printQueue() {
        if(this.front == -1) {
            console.log("Queue is empty");
            return;
        }
        let output = [];
        for(let i=this.front; i<=this.rear; i++) {
            output.push(this.arr[i]);
        }
        console.log("Queue : " + output);
    }

    isEmpty() {
        if(this.front == -1 && this.rear == -1) {
            return true;
        }
        return false;
    }

    enqueue(data) {
        if(this.rear == -1) {
            this.front = 0;
            this.arr[++this.rear] = data;
        }
        else if(this.rear+1 < this.size) {
            this.arr[++this.rear] = data;
        }
        else {
            console.log("Cannot enqueue. Queue is full");
        }
    }

    dequeue() {
        let returnVal = null;
        if(this.front == -1) {
            console.log("Cannot dequeue. No data");
        }
        else if(this.front < this.rear) {
            returnVal = this.arr[this.front++];
        }
        else if(this.front == this.rear) {
            returnVal = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }

        //re-structure data
        if(this.front > this.size/2){
            let ctr = 0;
            while(this.front <= this.rear) {
                this.arr[ctr++] = this.arr[this.front++];
            }
            this.front = 0;
            this.rear = ctr-1;
        }

        return returnVal;
    }
}

module.exports = Queue;