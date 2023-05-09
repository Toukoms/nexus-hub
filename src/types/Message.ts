import { User } from "./User";

export type Message = {
  id: string;
  text: string;
  date: string;
  sender: User;
  receiver: User;
};
