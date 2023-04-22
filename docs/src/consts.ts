export const SITE = {
  title: "Squid",
  description:
    "Easiest way to start a typesafe nodejs app along with preconfigured eslint, prettier, husky, lint-staged, jest, ts-jest, ts-node, nodemon, and more.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/crabstudio/squid/blob/main/docs/images/squid.png?raw=true",
    alt:
      "Create Squid app logo" + " as a red squid with a transparent background",
  },
  twitter: "xenseee",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/crabstudios/squid`;

export const COMMUNITY_INVITE_URL = `https://github.com/crabstudio/squid/discussions`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Create Squid App": [
      { text: "Introduction", link: "en/squid" },
      { text: "Why Squid?", link: "en/whysquid" },
    ],
    "Getting Started": [
      { text: "Installation", link: "en/installation" },
      { text: "Configuration", link: "en/otherconfig" },
    ],
    Contributing: [
      { text: "Contributing", link: "en/contribution" },
      { text: "Code of Conduct", link: "en/codeofconduct" },
      { text: "License", link: "en/license" },
    ],
  },
};
