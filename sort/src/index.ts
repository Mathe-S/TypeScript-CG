import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharctersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("efawefawSWD");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(2);
linkedListCollection.add(-1);
linkedListCollection.add(0);
linkedListCollection.sort();
linkedListCollection.print();
