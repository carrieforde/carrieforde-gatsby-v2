import parse from 'html-react-parser';
import * as React from 'react';

import { useMergeField } from '@/components/merge-field/merge-field-provider';
import { MergeFieldProps } from '@/components/merge-field/types';
import {
  processMergeField,
  searchContent,
} from '@/components/merge-field/utils';

export const MergeField: React.FC<MergeFieldProps> = ({ text }) => {
  const data = useMergeField();
  const processed = processMergeField(text, data);

  if (searchContent(processed)) {
    return <MergeField text={processed} />;
  }

  return <>{parse(processed)}</>;
};
