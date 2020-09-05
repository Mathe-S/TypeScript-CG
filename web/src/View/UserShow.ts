import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template() {
    return `
        <div>User Name is ${this.model.get("name")}</div>
        <div>User Age is ${this.model.get("age")}</div>
        `;
  }
}
