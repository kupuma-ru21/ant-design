"use server";

import { SignUpDocument, SignUpMutationVariables } from "@/gql/graphql";
import { get500ErrorResponse } from "@/utils/error/get500ErrorResponse";
import { apolloClient } from "@/utils/graphql";

export async function signUpAction(
  parameter: SignUpMutationVariables["input"]
) {
  const { errors } = await apolloClient.mutate({
    mutation: SignUpDocument,
    variables: { input: parameter },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
}
