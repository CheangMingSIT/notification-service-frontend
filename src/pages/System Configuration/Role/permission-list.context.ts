import { createContext } from "react";

interface Resource {
  permissionId: number;
  resource: string;
  operation: string;
}
[];
export const roleContext = createContext<Resource[]>([]);
