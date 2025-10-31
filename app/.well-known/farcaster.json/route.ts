import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
    accountAssociation: {
    "header": "eyJmaWQiOjk0ODUyMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDY1NzI2QzQ4NjdjZmJEZDgyZTI4MzRGNzQxNUJkOUQ0NmJjODUzQ0YifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC10ZW1wbGF0ZS1xM3htLnZlcmNlbC5hcHAifQ",
    "signature": "IQw6whCCcWA7EFIUAIX2bmc59ZA3hXNHhGYanbORjn84kQe3Iy9wskR6ZLE8kLEjZH2gZOyvXg10nEUvXbc5kxs="
  },
    frame: {
      version: "1",
      name: "CedlicZan Farcaster MiniApp",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
