import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(
      new Eventing(),
      new Attributes<UserProps>(attr),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}
