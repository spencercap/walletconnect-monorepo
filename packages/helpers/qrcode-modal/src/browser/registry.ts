import { IAppRegistry, IAppEntry, IMobileRegistryEntry } from "@walletconnect/types";

const officialAlgorandWallet: IAppEntry = {
  // hex encoding of 32 random bytes
  id: "23138217b046ae8d9d07e62b3337fb288c4445f92f64be067809cd0a8f9454b9",
  name: "Algorand Wallet",
  homepage: "https://algorandwallet.com/",
  chains: [
    // need to change once a standard emerges, perhaps https://github.com/ChainAgnostic/CAIPs/pull/55
    "algorand",
  ],
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/algorand-wallet/id1459898525",
    android: "https://play.google.com/store/apps/details?id=com.algorand.android",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "algorand-wc:",
    universal: "",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "Algorand Wallet",
    colors: {
      // "Algorand Wallet green"
      primary: "rgb(26, 174, 152)",
      secondary: "",
    },
  },
};

export const registry: IAppRegistry = {
  [officialAlgorandWallet.id]: officialAlgorandWallet,
};

export function getAppLogoUrl(id: string): string {
  if (id === officialAlgorandWallet.id) {
    // TODO: return URL for Algorand Wallet
    return "";
  }
  return "";
}

export function formatMobileRegistryEntry(entry: IAppEntry, platform: "mobile" | "desktop" = "mobile"): IMobileRegistryEntry {
  return {
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    color: entry.metadata.colors.primary || "",
    logo: entry.id ? getAppLogoUrl(entry.id) : "",
    universalLink: entry[platform].universal || "",
    deepLink: entry[platform].native || "",
  };
}

export function formatMobileRegistry(registry: IAppRegistry, platform: "mobile" | "desktop" = "mobile"): IMobileRegistryEntry[] {
  return Object.values<any>(registry)
    .filter(entry => !!entry[platform].universal || !!entry[platform].native)
    .map((entry) => formatMobileRegistryEntry(entry, platform));
}
