import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Skeleton } from "./components/Skeleton";
import { Opportunitise } from "./components/Opportunities";
import { queryClient } from "./shared";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Skeleton>
        <Opportunitise />
      </Skeleton>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
