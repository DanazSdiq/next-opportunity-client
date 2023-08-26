import { fetch } from "../shared";

export const patchOpportunityIsViewed = (
  opportunityId: string,
  isViewed: boolean
) => {
  return fetch.patch(`/opportunities/${opportunityId}`, {
    is_viewed: isViewed
  });
};
