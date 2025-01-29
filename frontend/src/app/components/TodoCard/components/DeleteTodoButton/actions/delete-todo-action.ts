"use server";

import { DeleteTodoMutationVariables, DeleteTodoDocument } from "@/gql/graphql";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";

export async function deleteTodoAction(
  variables: Omit<DeleteTodoMutationVariables, "userName">
) {
  const { errors } = await apolloClient.mutate({
    mutation: DeleteTodoDocument,
    variables,
  });
  if (errors) throw get500ErrorResponse(errors[0]);
}
