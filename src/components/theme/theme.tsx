import * as React from 'react';

import { IconCircleCheck } from '@/components/icons/icon-circle-check';
import { IconCircleExclamation } from '@/components/icons/icon-circle-exclamation';
import { IconCircleInfo } from '@/components/icons/icon-circle-info';
import { IconCircleNotch } from '@/components/icons/icon-circle-notch';
import { Theme } from '@/components/theme/types';

export const theme: Theme = {
  components: {
    banner: {
      icons: {
        default: null,
        info: <IconCircleInfo />,
        error: <IconCircleExclamation />,
        warning: <IconCircleExclamation />,
        success: <IconCircleCheck />,
      },
    },
    spinner: {
      icon: <IconCircleNotch />,
    },
  },
};
