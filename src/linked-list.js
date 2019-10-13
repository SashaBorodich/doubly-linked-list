const Node = require('./node');

class LinkedList {
    constructor() {
			this.first = null;
			this.last = null;
			this.length = 0;
		}

    append(data) {
			const element = new Node(data);
			element.prev = this.last;

			if (this.length === 0) {
				this.first = element;
			} else {
				this.last.next = element;
			}

			this.last = element;

			this.length++;

			return this;
		}

    head() {
			return this.first.data;
		}

    tail() {
			return this.last.data;
		}

    at(index) {
			let el = this.first;

			for (let i = 0; i < this.length; i++) {
				if (index === i) {
					return el.data;
				}
				el = el.next;
			}
		}

    insertAt(index, data) {
			let el = this.first;
			let node;

			for (let i = 0; i < this.length; i++) {
				if (index === i) {
					node = new Node(data);
					node.prev = el.prev;
					node.next = el.prev.next;
					
					el.prev.next = node;
					el.prev = node;
					this.length++;
					return this;
				}
				el = el.next;
			}
			
		}

    isEmpty() {
			return (this.length > 0) ? false : true;
		}

    clear() {
			let el = this.first;

			for (let i = 0; i < this.length; i++) {
				if (i > 0) {
					el.prev.next = null;
				}
				el.data = null;
				el.prev = null;

				el = el.next;
			}
			this.length = 0;

			return this;
		}

    deleteAt(index) {
			let el = this.first;

			for (let i = 0; i < this.length; i++) {
				if (index === i && i !== 0) {
					el.next.prev = el.prev;
					el.data = null;
				}
				if (index === i && i > 0) {
					el.next.prev = el.prev;
					el.prev.next = el.next;
					el.data = null;
				} 
					el = el.next;
			}
			this.length--;

			return this;
		}

    reverse() {
			let el = this.last;

			for (let i = this.length; i > 0; i--) {
				
				let elNext = el.next;

				el.next = el.prev;

				if (i === this.length) {
					el.prev = null;
					this.first = el;
				} else {
					el.prev = elNext;
				}

				if (i === 1) {
				} else {
					el = el.next;
				}
			}
			this.last = el;

			return this;
		}

    indexOf(data) {
			let el = this.first;

			for (let i = 0; i < this.length; i++) {
				if (data === el.data) {
					return i;
				}
				el = el.next;
			}

			return -1;
		}
}

module.exports = LinkedList;
