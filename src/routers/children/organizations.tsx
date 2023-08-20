import React from "react";
import { RouteObject } from "react-router-dom";
import { Organizations } from "../../components/Organizations";

export const organizations: RouteObject = {
  path: "/organizations",
  element: <Organizations />
};
