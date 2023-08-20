import { fetch } from "../shared";

export const fetchOrganizationsDetails = async () => {
  const result = await fetch.get("/organizations");
  return result.data;
};
