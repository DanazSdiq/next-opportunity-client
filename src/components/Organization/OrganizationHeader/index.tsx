import React from "react";
import { getDefaultPaddings } from "../../../shared";
import { OrganizationDetails } from "../../../types/organizations";

export const OrganizationHeader = (props: {
  organization: OrganizationDetails;
}) => {
  const { organization } = props;

  return (
    <div className={getDefaultPaddings()}>
      <div className="flex justify-between">
        <div>
          <div className="text-xl font-bold">
            Organization: {organization.name}
          </div>
          <div className="mt-2 text-slate-600">
            Total Opportunities: {organization.total_opportunities}
          </div>
        </div>
        <div>
          <a
            className="inline-block mt-3.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            href={organization.main_url}
            target="_blank"
            rel="noreferrer"
          >
            View source of opportunities
          </a>
        </div>
      </div>
    </div>
  );
};
