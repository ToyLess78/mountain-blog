import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      de: "/pfadnamen",
      pl: "/pfadnamen",
    },
  },
});
