import { env } from "@/env.mjs";

export const siteConfig = {
  title: "Next.js Starter",
  description:
    "A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Husky, lint-staged and more. Get up and running quickly with this ready-to-use boilerplate.",
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID ?? "",
};
