"use server";

import { CreateTodoDocument, CreateTodoMutationVariables } from "@/gql/graphql";
import { get404ErrorResponse } from "@/utils/error/get404ErrorResponse";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";
import { getUserNameCookieStore } from "@/utils/getUserNameCookieStore";

export async function createTodoAction(
  variables: Omit<CreateTodoMutationVariables, "userName">
) {
  const userNameCookieStore = await getUserNameCookieStore();
  if (!userNameCookieStore) {
    console.error("userNameCookieStore is not present");
    throw get404ErrorResponse("userNameCookieStore");
  }
  const { errors } = await apolloClient.mutate({
    mutation: CreateTodoDocument,
    variables: { ...variables, userName: userNameCookieStore.value },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
}
