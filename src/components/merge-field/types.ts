import * as React from "react";

export type ExtractedMergeField = {
  search: string;
  fieldName: string;
  defaultValue?: string;
};

export type MergeFieldContextProps = Record<string, any>;

export type MergeFieldProviderProps = React.PropsWithChildren<{
  data: MergeFieldContextProps;
}>;

export type MergeFieldProps = {
  text: string;
};
