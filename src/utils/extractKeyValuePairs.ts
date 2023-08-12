import { User } from "../types/user";

function extractKeyValuePairs(obj: User, parentKey = ""): [string, string][] {
  const result: [string, any][] = [];

  for (const [key, value] of Object.entries(obj)) {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (key !== "id" && key !== "company" && key !== "address") {
      if (typeof value === "object" && !Array.isArray(value)) {
        const nestedPairs = extractKeyValuePairs(value, currentKey);
        result.push(...nestedPairs);
      } else {
        result.push([currentKey, value]);
      }
    }
  }

  return result;
}

export { extractKeyValuePairs };
