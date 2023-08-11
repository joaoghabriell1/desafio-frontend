import { Company } from "./company";
import { Address } from "./address";

export interface User {
  id: number;
  name: string;
  username: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
