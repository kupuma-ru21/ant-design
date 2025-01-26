"use server";

import { LoginDocument, LoginMutationVariables } from "@/gql/graphql";
import { get404ErrorResponse } from "@/utils/error/get404ErrorResponse";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";
import { cookies } from "next/headers";

export async function loginAction(parameter: LoginMutationVariables["input"]) {
  const { errors, data } = await apolloClient.mutate({
    mutation: LoginDocument,
    variables: { input: parameter },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  if (!data) throw get404ErrorResponse("data");
  const cookieStore = await cookies();
  cookieStore.set("userName", data.login);
}
