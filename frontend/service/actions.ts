"use server";

import { BACKEND_URL } from "@/constants";
import { getSession } from "@/lib/session";
import { Post } from "@/types/post-types";
import { redirect } from "next/navigation";

export const getAllPosts = async () => {
  const response = await fetch(`${BACKEND_URL}/post`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  const result = await response.json();

  return result;
};

export const getPostById = async (id: number) => {
  const session = await getSession();
  const response = await fetch(`${BACKEND_URL}/post/${id}`, {
    headers: {
      authorization: `Bearer ${session?.accessToken}`,
    },
  });

  if (response.status === 401) {
    redirect("/auth/sign-in");
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID ${id}`);
  }

  const result = await response.json();
  return result;
};

export const getPreviewPost = async (): Promise<Post> => {
  const response = await fetch(`${BACKEND_URL}/post/preview`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  const result = await response.json();
  return result;
};
