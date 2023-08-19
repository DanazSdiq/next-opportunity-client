import React from "react";
import { RouteObject } from "react-router-dom";
import { Opportunitise } from "../../components/Opportunities";

export const opportunitiesRoute: RouteObject = {
  path: "/opportunities",
  element: <Opportunitise />
};
