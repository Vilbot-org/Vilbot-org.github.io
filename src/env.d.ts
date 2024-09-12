/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_INVITE_BOT_URL: string;
  readonly PUBLIC_DISCORD_URL: string;
  readonly PUBLIC_GITHUB_REPO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
