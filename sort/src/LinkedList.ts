import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length() {
    if (!this.head) return 0;
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of Bounds");
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    throw new Error("Index out of Bounds");
  }

  compare(indexOne: number, indexTwo: number) {
    if (!this.head) throw new Error("List is empty");
    return this.at(indexOne).data > this.at(indexTwo).data;
  }

  swap(indexOne: number, indexTwo: number) {
    let indexOneNode = this.at(indexOne);
    let indexTwoNode = this.at(indexTwo);
    let temp = indexOneNode.data;
    indexOneNode.data = indexTwoNode.data;
    indexTwoNode.data = temp;
  }

  print() {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
