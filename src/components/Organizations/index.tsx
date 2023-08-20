import React from "react";
import { Spinner, getDefaultPaddings } from "../../shared";
import { useQuery } from "@tanstack/react-query";
import { fetchOrganizationsDetails } from "../../apis/fetchOrganizationsDetails";
import { OrganizationDetails } from "../../types/organizations";
import { OrganizationCard } from "./OrganizationCard";

export const Organizations = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["opportunities"],
    queryFn: fetchOrganizationsDetails
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return <div>Error thrown</div>;
  }

  return (
    <div
      className={`${getDefaultPaddings()} grid grid-cols-1 gap-4 md:grid-cols-2`}
    >
      {data.map((detail: OrganizationDetails) => (
        <OrganizationCard key={detail.id} {...detail} />
      ))}
    </div>
  );
};
