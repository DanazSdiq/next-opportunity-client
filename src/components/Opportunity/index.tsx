import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchOpportunityById } from "../../apis/fetchOpportunityById";
import {
  Badge,
  Markdown,
  Spinner,
  getDefaultPaddings,
  queryClient
} from "../../shared";
import { formatDistance } from "date-fns";
import { patchOpportunityIsViewed } from "../../apis/patchOpportunityIsViewed";

const getMarkButtonClass = (isViewed: boolean) =>
  !isViewed
    ? "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

export const Opportunity = () => {
  const { opportunity_id = "" } = useParams();
  const mutation = useMutation({
    mutationFn: (data: { id: string; isViewed: boolean }) =>
      patchOpportunityIsViewed(data.id, data.isViewed),
    onSuccess: ({ data }) => {
      queryClient.setQueryData(["opportunity", data.id], data);
    }
  });
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["opportunity", opportunity_id],
    queryFn: () => fetchOpportunityById(opportunity_id),
    enabled: opportunity_id.length > 0
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <div>Error</div>;
  }

  return (
    <div className={`min-h-screen ${getDefaultPaddings()}`}>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl tracking-wide">
            {data.title} at {data.organization_name}
          </h1>
          <div className="mt-2 text-slate-500 text-left">
            <span>
              posted:{" "}
              {formatDistance(new Date(data.created_at), new Date(), {
                addSuffix: true
              })}
            </span>
            <br />
            <span>
              updated:{" "}
              {data.updated_at
                ? formatDistance(new Date(data.updated_at), new Date(), {
                    addSuffix: true
                  })
                : "No updates"}
            </span>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="mr-2">
            <Badge
              text={data.commitment}
              colors="bg-green-50 text-green-700 ring-green-600/20"
            />
          </div>
          {data.labels.map((label: string) => (
            <span key={label} className="mr-2">
              <Badge
                text={label}
                colors="bg-indigo-50 text-indigo-700 ring-indigo-600/20"
              />
            </span>
          ))}
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-100 border-1 dark:bg-gray-700" />

      <div>
        <Markdown content={data.description} />
      </div>

      <div className="flex justify-center sticky top-[100vh]">
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-indigo-600 mt-14 mb-4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View Opportunity
        </a>
        <button
          onClick={() =>
            mutation.mutate({ id: data.id, isViewed: !data.is_viewed })
          }
          className={`${getMarkButtonClass(
            data.is_viewed
          )} rounded-md ml-10 px-3 py-2 mt-14 mb-4 text-sm font-semibold shadow-sm`}
        >
          {data.is_viewed ? "Make as unviewed" : "Mark as viewed"}
        </button>
      </div>
    </div>
  );
};
