import type { Config } from '../types/config.js';

export const config: Config = {
  token: process.env.TOKEN ?? '',
  serverUrl: process.env.SERVER_URL ?? '',
  anime: process.env.ANIME ?? '',
  anidbUrl: process.env.ANIDB_URL ?? ''
};
