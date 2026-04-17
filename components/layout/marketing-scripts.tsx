import Script from "next/script";

const analyticsId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const linkedinTagId = process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID;

export function MarketingScripts() {
  return (
    <>
      {analyticsId ? (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
      ) : null}
      {analyticsId ? (
        <Script id="ga-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}');`}
        </Script>
      ) : null}
      {gtmId ? <Script id="gtm-script" strategy="afterInteractive">{`window.gtmId='${gtmId}'`}</Script> : null}
      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">{`window.metaPixelId='${metaPixelId}'`}</Script>
      ) : null}
      {linkedinTagId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">{`window.linkedinTagId='${linkedinTagId}'`}</Script>
      ) : null}
    </>
  );
}
