import { UserEdit } from "./View/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({
  name: "max",
  age: 21,
});

const root = document.getElementById("root");

if (root) {
  const userForm = new UserEdit(root, user);

  console.log(userForm);
  userForm.render();
}
