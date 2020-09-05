import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.setAgeHandler,
      "click:.update-name": this.setNameHandler,
      "click:.save-button": this.onSaveHandler,
    };
  }

  onSaveHandler = () => {
    this.model.save();
  };

  setAgeHandler = () => {
    this.model.setRandomAge();
  };

  setNameHandler = () => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
        <div>
        <input placeholder=${this.model.get("name")} />
        <button>Click Me </button>
        <button class="set-age">Set Random Age </button>
        <button class="update-name"> Update Name </button>
        <div> <button class="save-button"> save </biutton>
        </div>
        `;
  }
}
