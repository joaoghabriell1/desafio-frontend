import { Address } from "../types/address";
import { Company } from "../types/company";

function extractKeyValuePairsFromUserAddressAndCompany(
  obj: Address | Company
): [string, string][] {
  const result: [string, any][] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      const nestedPairs = extractKeyValuePairsFromUserAddressAndCompany(value);
      result.push(...nestedPairs);
    } else {
      result.push([key, value]);
    }
  }
  return result;
}

export { extractKeyValuePairsFromUserAddressAndCompany };
