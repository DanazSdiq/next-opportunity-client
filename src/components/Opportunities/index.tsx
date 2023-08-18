import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOpportunities } from "../../apis/fetchOpportunities";
import { OpportunityCard } from "./OpportunityCard";
import { Spinner } from "../../shared";

export const Opportunitise = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["opportunities"],
    queryFn: fetchOpportunities
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return <div>Error thrown while loading opportunities</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {data.map((opportunity) => (
          <OpportunityCard key={opportunity.id} {...opportunity} />
        ))}
      </div>
    </div>
  );
};