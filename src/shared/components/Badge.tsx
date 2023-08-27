import React from "react";

type BadgeColors =
  | "bg-green-50 text-green-700 ring-green-600/20"
  | "bg-indigo-50 text-indigo-700 ring-indigo-600/20"
  | "bg-rose-400 text-white ring-rose-600/20";

export const Badge = (props: { text: string; colors: BadgeColors }) => {
  return (
    <dd
      className={`inline-flex items-center rounded-md ${props.colors} px-2 py-1 text-xs font-medium ring-1 ring-inset`}
    >
      {props.text}
    </dd>
  );
};
