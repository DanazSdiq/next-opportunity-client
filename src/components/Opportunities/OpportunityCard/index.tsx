import React from "react";
import { Opportunity } from "../../../types/opportunity";
import { Link } from "react-router-dom";
import { Badge } from "../../../shared";

type OpportunityCardProps = Opportunity & { href: string };

export const OpportunityCard = (props: OpportunityCardProps) => {
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
            <Badge
              text={props.commitment}
              colors="bg-green-50 text-green-700 ring-green-600/20"
            />
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <Link
            to={props.href}
            className="rounded bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
            Expand opportunity
          </Link>
        </div>
      </div>
    </div>
  );
};
