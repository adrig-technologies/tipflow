import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { MarketingConfig } from "~/types";

export const getMarketingConfig = async (): Promise<MarketingConfig> => {
  const dict = await getDictionary("en");
  return {
    mainNav: [
      {
        title: dict.marketing.main_nav_features,
        href: `/#features`,
      },
      {
        title: dict.marketing.main_nav_pricing,
        href: `/pricing`,
      },
      {
        title: dict.marketing.main_nav_blog,
        href: `/blog`,
      },
      {
        title: dict.marketing.main_nav_documentation,
        href: `/docs`,
      },
    ],
  };
};
