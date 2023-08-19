import React from "react";
import { RouteObject } from "react-router-dom";
import { Opportunity } from "../../components/Opportunity";

export const opportunityWithIdRoute: RouteObject = {
  path: "/opportunities/:opportunity_id",
  element: <Opportunity />
};
