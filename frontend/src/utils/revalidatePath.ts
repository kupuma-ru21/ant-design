"use server";

import { revalidatePath as revalidatePathBase } from "next/cache";

export async function revalidatePath(path: string, type: "layout" | "page") {
  revalidatePathBase(path, type);
}
