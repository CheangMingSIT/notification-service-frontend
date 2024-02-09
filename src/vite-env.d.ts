/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHENTICATION_API: string;
  readonly VITE_NOTIFICATION_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
