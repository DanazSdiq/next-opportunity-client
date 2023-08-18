import React from "react";
import { Navigations } from "./Navigations";

export const Skeleton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigations />

      <main className="lg:pl-72">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{children}</div>
      </main>
    </div>
  );
};
