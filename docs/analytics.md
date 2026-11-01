# Google Analytics 4

The blog loads the Google tag once, after the page becomes interactive. It is
included in the root layout for all Chinese and English routes. Development
mode does not send analytics. An empty or invalid measurement ID disables it.
When enabled, the footer shows a small "Analytics by Google" link to Google's
explanation of data use on partner sites. Reports remain in your GA4 account.

The production workflow defaults to the supplied ID **G-EHZB1X2EVC**. No
repository variable is needed to deploy this configuration. To change it,
follow the steps below.

## Set up data collection

1. Open [Google Analytics](https://analytics.google.com/) and create a GA4 property.
2. Select your reporting time zone. Use China time if you want reports to follow
   your local day.
3. Add a Web data stream for `https://njzwj.github.io`, or your custom domain.
4. Copy the **Measurement ID**, in the form `G-XXXXXXXXXX`.
5. Keep **Enhanced measurement → Page views → Advanced settings → Page changes
   based on browser history events** enabled. This tracks Next.js navigation,
   including browser Back and Forward. Do not add a second page-view tracker.
6. In the GitHub repository, open **Settings → Secrets and variables → Actions →
   Variables**. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your measurement ID.
7. Run the **Deploy Next.js site to Pages** workflow, or push a change to `master`.
   The ID is included at build time, so changing the variable requires a new build.

The measurement ID is public. Data collection does not need a Google account
password, API secret, or service account key.

To disable production analytics, remove the measurement ID fallback from the
workflow and clear the repository variable. An unset or empty repository variable
alone still uses the configured fallback.

## Verify collection

1. Open the published site in a browser that allows Google Analytics requests.
2. Open **Reports → Realtime** in GA4.
3. Visit the home page, an article, About, and an English route using site links.
4. Check for `page_view` events and the expected page locations. Use Tag Assistant
   or the browser Network panel to confirm one event per page navigation.

Initial collection can take up to 30 minutes. Standard reports take longer than
Realtime. Collection starts after deployment; it cannot recover earlier visits.

For a local production preview, copy `.env.example` to `.env.local`, run `npm run build`,
and serve `out/` with a static file server. These visits also go to that property.
Leave the ID empty for previews that should not send data. `npm run dev` never
loads the tag.

## References

- [Google: Set up Analytics](https://support.google.com/analytics/answer/9304153)
- [Google: Find the measurement ID](https://support.google.com/analytics/answer/12270356)
- [Next.js: Tracking pageviews](https://nextjs.org/docs/14/app/building-your-application/optimizing/third-party-libraries#tracking-pageviews)
