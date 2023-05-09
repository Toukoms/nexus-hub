import { User } from "@/types/User";
import React from "react";

type Props = {
  CurrentUser: User;
  Friend: User;
};

function Chat({ CurrentUser, Friend }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex text-[var(--white)]">
        <img
          src={"next.svg"}
          alt={`friend_${Friend.id}`}
          className="w-12 h-12 p-2 mr-2 col object-center object-scale-down bg-gray-500 rounded-full"
        />
        {/*TODO: <img src={Friend.image} alt={`friend_${Friend.id}`} /> */}

        <div className="flex flex-col">
          <h3 className="font-semibold">Richards Hendrics</h3>{" "}
          {/* TODO: Change to friend's username */}
          {/* TODO: Find the latest message between currentUser and his friend*/}
          <span className="">Hello world</span>
        </div>
      </div>

      <div className="bg-white w-6 h-6 rounded-full flex justify-center items-center">
        <span className={`text-center font-semibold text-sm text-[var(--primary-color)]`}>
          1
        </span>
      </div>
    </div>
  );
}

export default Chat;
