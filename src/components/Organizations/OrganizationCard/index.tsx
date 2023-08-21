import React from "react";
import { OrganizationDetails } from "../../../types/organizations";

type OrganizationCardProps = OrganizationDetails & {
  onClick: () => void;
};

export const OrganizationCard = (props: OrganizationCardProps) => {
  return (
    <div
      key={props.id}
      className="flex justify-between items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
    >
      <div>
        <div className="font-medium">{props.name}</div>
        <div className="text-slate-500">
          total opportunities: {props.total_opportunities}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="rounded-md text-sm font-medium text-gray-900 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={props.onClick}
        >
          Expand Opportunities
        </button>
      </div>
    </div>
  );
};
