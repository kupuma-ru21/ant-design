import { cookies } from "next/headers";

export const getUserNameCookieStore = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("userName");
};
