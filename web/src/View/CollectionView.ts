import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;
  render() {
    this.parent.innerHTML = "";
    const templateElements = document.createElement("template");

    for (let model of this.collection.model) {
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);
      templateElements.content.append(itemParent);
    }

    this.parent.append(templateElements.content);
  }
}
