import { getCurrentUser } from "@saasfly/auth";
import { AppleCardsCarouselDemo } from "~/components/apple-card/apple-cards-carousel-demo";
import { AppleCardsCarouselDemo1 } from "~/components/apple-card1/apple-cards-carousel-demo";
import { GoogleGeminiEffectDemo } from "~/components/google-gemini-effect-demo";
import { LampDemo } from "~/components/lamp-effect/lamp-demo";

import { PricingCards } from "~/components/price/pricing-cards";
import { PricingFaq } from "~/components/price/pricing-faq";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";

export const metadata = {
  title: "Features",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  // const user = await getCurrentUser();
  const dict = await getDictionary(lang);
  let subscriptionPlan;

  // if (user) {
  //   subscriptionPlan = await trpc.stripe.userPlans.query();
  // }
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">

      <LampDemo />
    </div>
  );
}
