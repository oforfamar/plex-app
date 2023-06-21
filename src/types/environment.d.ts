declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      SERVER_URL: string;
      ANIME: string;
      ANIDB_URL: string;
    }
  }
}
