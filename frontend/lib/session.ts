"use server";

import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type Session = {
  user: {
    id: string;
    firstName: string;
  };
  accessToken: string;
};

const secretSessionKey = process.env.SESSION_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretSessionKey);

export async function createSession(payload: Session) {
  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as Session;
  } catch (error) {
    redirect("/auth/sign-in");
  }
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
