// REF: https://dev.to/kzuraw/how-to-type-nextjs-env-variables-in-typescript-50cg
declare namespace NodeJS {
  interface ProcessEnv {
    GRAPHQL_SCHEMA_URL: string;
  }
}
