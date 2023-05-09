import { Message } from "./Message";

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  messages: Message[];
  friends: User[];
};
