"use server";

import { BACKEND_URL } from "@/constants";
import { createSession } from "@/lib/session";
import { AuthFormState } from "@/types/auth-types";
import {
  SignInFormSchema,
  SignUpFormSchema,
} from "@/validation/auth-validation";
import { redirect } from "next/navigation";

export async function signUp(
  state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const validationFields = SignUpFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success) {
    return { error: validationFields.error.flatten().fieldErrors };
  }

  const response = await fetch(`${BACKEND_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    redirect("/auth/sign-in");
  } else {
    return {
      message:
        response.status === 409 ? "User already exists" : "Registration failed",
    };
  }
}

export async function signIn(
  state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const validationFields = SignInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success)
    return { error: validationFields.error.flatten().fieldErrors };

  const response = await fetch(`${BACKEND_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    const result = await response.json();
    await createSession({
      user: {
        id: result.id,
        firstName: result.name,
      },
      accessToken: result.accessToken,
    });
    redirect("/blog");
  } else {
    return {
      message:
        response.status === 401 ? "Invalid credentials" : response.statusText,
    };
  }
}
