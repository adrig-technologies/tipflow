import { Suspense } from "react";

import { getCurrentUser } from "@saasfly/auth";

import { ModalProvider } from "~/components/modal-provider";
import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";
import type { Locale } from "~/config/i18n-config";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("en");
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar
          items={
            (await getMarketingConfig()).mainNav
          }
          scroll={true}
          user={user}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>
      <ModalProvider dict={dict.login} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        dict={dict.common}
      />
    </div>
  );
}
