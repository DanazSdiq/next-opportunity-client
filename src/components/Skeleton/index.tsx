import React from "react";
import { Navigations } from "./Navigations";

export const Skeleton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigations />

      <main className="lg:pl-72">{children}</main>
    </div>
  );
};
