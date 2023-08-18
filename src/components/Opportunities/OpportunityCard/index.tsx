import React from "react";
import { Opportunity } from "../../../types/opportunity";

export const OpportunityCard = (props: Opportunity) => {
  return (
    <div className="mb-6 w-full">
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">
              {props.title}
            </dt>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {props.commitment}
            </dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a
            href={`/opportunities/${props.id}`}
            className="rounded bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
            Expand opportunity
          </a>
        </div>
      </div>
    </div>
  );
};
