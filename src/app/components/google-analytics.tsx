import Script from "next/script";
import { ANALYTICS_ENABLED, GA_MEASUREMENT_ID } from "@/lib/site";

export default function GoogleAnalytics() {
  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
    </>
  );
}
