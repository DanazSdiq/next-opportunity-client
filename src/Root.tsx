import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Skeleton } from "./components/Skeleton";
import { queryClient } from "./shared";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Skeleton>
        <Outlet />
      </Skeleton>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
