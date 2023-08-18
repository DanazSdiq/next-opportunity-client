import { fetch } from "../shared";
import { Opportunity } from "../types/opportunity";

export const fetchOpportunities = async (): Promise<Opportunity[]> => {
  const response = await fetch.get("/opportunities");

  return response.data;
};
