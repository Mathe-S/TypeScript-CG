import { User } from "./models/User";

const user = new User({ id: 2 });

user.set({ name: "Doe" });

user.save();
