import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type NavigationItem = {
  name: string;
  href: string;
  isExpanded: boolean;
  icon: any;
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const NavigationItem = (props: NavigationItem) => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    if (pathname.startsWith(props.href)) setCurrent(true);
    else setCurrent(false);
  }, [pathname]);

  if (!props.isExpanded) {
    return (
      <li key={props.name}>
        <Link
          to={props.href}
          className={classNames(
            current
              ? "bg-gray-50 text-indigo-600"
              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          )}
        >
          <props.icon
            className={classNames(
              current
                ? "text-indigo-600"
                : "text-gray-400 group-hover:text-indigo-600",
              "h-6 w-6 shrink-0"
            )}
            aria-hidden="true"
          />
          {props.name}
        </Link>
      </li>
    );
  }

  return (
    <li key={props.name}>
      <Link
        to={props.href}
        className={classNames(
          current
            ? "bg-gray-50 text-indigo-600"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <props.icon
          className={classNames(
            current
              ? "text-indigo-600"
              : "text-gray-400 group-hover:text-indigo-600",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {props.name}
      </Link>
    </li>
  );
};
