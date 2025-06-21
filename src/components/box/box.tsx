import * as React from "react";

import { TagName } from "@/components/box/types";
import { forwardRef } from "@/components/utilities/react";

export const Box = forwardRef(function Box(
  { as = TagName, children, ...props },
  ref,
) {
  return React.createElement(as, { ref, ...props }, children);
});
