"use server";

import { TodoDocument, TodoQueryVariables } from "@/gql/graphql";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";

export async function getTodoAction(variables: TodoQueryVariables) {
  const { error, data } = await apolloClient.query({
    query: TodoDocument,
    variables,
  });
  if (error) throw get500ErrorResponse(error);
  return { todo: data.todo };
}
