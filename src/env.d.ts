/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_INVITE_BOT_URL: string;
  readonly PUBLIC_DISCORD_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
