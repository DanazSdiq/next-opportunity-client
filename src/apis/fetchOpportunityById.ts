import { fetch } from "../shared";

export const fetchOpportunityById = async (opportunityId: string) => {
  const result = await fetch.get(`/opportunities/${opportunityId}`);
  return result.data;
};
