import React from "react";
import { RouteObject } from "react-router-dom";
import { Organization } from "../../components/Organization";
import { Opportunity } from "../../components/Opportunity";

export const organizationWithIdRoute: RouteObject = {
  path: "/organizations/:organization_id/opportunities",
  element: <Organization />
};

export const organizationWithIdWithOpportunitiesRoute: RouteObject = {
  path: "/organizations/:organization_id/opportunities/:opportunity_id",
  element: <Opportunity />
};
