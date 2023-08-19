import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
import { opportunitiesRoute } from "./children/opportunities";
import { opportunityWithIdRoute } from "./children/opportunityWithId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [opportunitiesRoute, opportunityWithIdRoute]
  }
]);
