import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prismaClient from "@/../lib/prismadb";
import errorResponse from "@/constants/errorResponse";

export async function POST(reqest: Request) {
  const res = NextResponse;
  try {
    const { lastName, firstName, email, password } = await reqest.json();

    const userAlreadyExist = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist) {
      return res.json(errorResponse.ERR_USER_ALREADY_EXISTS.error, {
        status: errorResponse.ERR_USER_ALREADY_EXISTS.status,
      });
    }

    const hashedPassword = await hash(password, 12);

    const user = await prismaClient.user.create({
      data: {
        name: lastName,
        firstName: firstName,
        email: email,
        hashedPassword: hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    console.log(user);

    return res.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return res.json(errorResponse.ERR_INTERNAL_SERVER_ERROR.error, {
      status: errorResponse.ERR_INTERNAL_SERVER_ERROR.status,
    });
  }
}
