import { MarketingRouteEffects } from "./MarketingRouteEffects";
import { SiteScripts } from "./SiteScripts";

type Props = {
  html: string;
};

/** Legacy body HTML (server-rendered) + deferred animation scripts. */
export function LegacyHtmlPage({ html }: Props) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <SiteScripts />
      <MarketingRouteEffects />
    </>
  );
}
