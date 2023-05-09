import Chat from "@/components/Chat";
import { User } from "@/types/User";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const currentUser: User = {
    id: "01",
    name: "",
    image: "",
    messages: [],
    friends: [],
    email: "",
  };

  const friend: User = {
    id: "02",
    name: "",
    image: "",
    messages: [],
    friends: [],
    email: "",
  };

  return (
    <div className="w-full h-full">
      <div className="w-1/5 m-8 border-2 p-2">
        <Chat CurrentUser={currentUser} Friend={friend} />
      </div>
    </div>
  );
};

export default Home;
