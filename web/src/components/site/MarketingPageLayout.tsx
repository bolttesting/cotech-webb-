import type { ReactNode } from "react";
import { MarketingRouteEffects } from "./MarketingRouteEffects";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteScripts } from "./SiteScripts";

type Props = {
  children: ReactNode;
  /** When set, replaces the default site header. Pass `null` to hide. */
  header?: ReactNode | null;
  /** When set, replaces the default site footer. Pass `null` to hide. */
  footer?: ReactNode | null;
};

/** Marketing pages: site chrome + animation stack. Override header/footer when needed. */
export function MarketingPageLayout({ children, header, footer }: Props) {
  const headerNode = header === undefined ? <SiteHeader /> : header;
  const footerNode = footer === undefined ? <SiteFooter /> : footer;

  return (
    <>
      {headerNode}
      {children}
      {footerNode}
      <SiteScripts />
      <MarketingRouteEffects />
    </>
  );
}
