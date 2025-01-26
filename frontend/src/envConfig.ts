import { LoadedEnvFiles, loadEnvConfig } from "@next/env";
import path from "path";

const projectDir = path.resolve(__dirname, "../../../../..");
const { loadedEnvFiles } = loadEnvConfig(projectDir);

export const ENV = {
  GRAPHQL_SCHEMA_URL: getEnvVariable("GRAPHQL_SCHEMA_URL", loadedEnvFiles),
};

function getEnvVariable(
  envName: string,
  loadedFiles: LoadedEnvFiles
): string | undefined {
  for (const file of loadedFiles) {
    const lines = file.contents.split("\n");
    for (const line of lines) {
      const [key, value] = line.split("=").map((str) => str.trim());
      if (key === envName) return value;
    }
  }
  return undefined;
}
