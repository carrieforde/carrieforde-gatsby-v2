import * as React from "react";

import {
  MergeFieldContextProps,
  MergeFieldProviderProps,
} from "@/components/merge-field/types";

const defaultMergeFieldContext: MergeFieldContextProps = {};

const MergeFieldContext = React.createContext<MergeFieldContextProps>(
  defaultMergeFieldContext,
);

export const MergeFieldProvider: React.FC<MergeFieldProviderProps> = ({
  data,
  children,
}) => {
  return (
    <MergeFieldContext.Provider value={data}>
      {children}
    </MergeFieldContext.Provider>
  );
};

export const useMergeField = () => {
  const context = React.useContext(MergeFieldContext);

  if (!context) {
    throw new Error("useMergeField must be used within a MergeFieldProvider");
  }

  return context;
};
