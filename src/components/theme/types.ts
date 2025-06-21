import { BannerIconConfig } from "@/components/banner/types";

export type Theme = {
  components: {
    banner: {
      icons: BannerIconConfig;
    };
    spinner: {
      icon: React.ReactNode;
    };
  };
};
