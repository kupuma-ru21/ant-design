"use server";

import { UpdateTodoDocument, UpdateTodoMutationVariables } from "@/gql/graphql";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";

export async function updateTodoAction(variables: UpdateTodoMutationVariables) {
  const { errors } = await apolloClient.mutate({
    mutation: UpdateTodoDocument,
    variables,
  });
  if (errors) throw get500ErrorResponse(errors[0]);
}
