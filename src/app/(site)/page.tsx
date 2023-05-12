"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const Home = (props: Props) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [session.status]);

  return (
    <div>
      <h1>Home</h1>
      <button className="p-4 bg-gray-800 rounded-lg text-neutral-50" onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default Home;
