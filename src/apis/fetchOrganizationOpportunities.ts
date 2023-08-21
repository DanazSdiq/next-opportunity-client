import { fetch } from "../shared";

export const fetchOrganizationOpportunities = async (
  organization_id: string
) => {
  const response = await fetch.get(
    `/organizations/${organization_id}/opportunities`
  );

  return response.data;
};
