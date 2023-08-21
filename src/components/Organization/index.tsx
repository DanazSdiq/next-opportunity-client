import React from "react";
import { useParams } from "react-router-dom";
import { Spinner, getDefaultPaddings } from "../../shared";
import { useQuery } from "@tanstack/react-query";
import { fetchOrganizationOpportunities } from "../../apis/fetchOrganizationOpportunities";
import { OrganizationDetails } from "../../types/organizations";
import { Opportunity } from "../../types/opportunity";
import { OpportunityCard } from "../Opportunities/OpportunityCard";
import { OrganizationHeader } from "./OrganizationHeader";

export const Organization = () => {
  const { organization_id = "" } = useParams();
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["organization", organization_id],
    queryFn: () => fetchOrganizationOpportunities(organization_id),
    enabled: organization_id.length > 0
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <div>Error buddy</div>;
  }

  const {
    organization,
    opportunities
  }: { organization: OrganizationDetails; opportunities: Opportunity[] } = data;

  return (
    <div>
      <OrganizationHeader organization={organization} />

      <hr className="h-px bg-gray-200 border-0" />

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 ${getDefaultPaddings()}`}
      >
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            {...opportunity}
            href={`/organizations/${organization_id}/opportunities/${opportunity.id}`}
          />
        ))}
      </div>
    </div>
  );
};
