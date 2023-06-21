import fetch from 'cross-fetch';
import { config } from '../config/index.js';

export const library = async (): Promise<void> => {
  try {
    const qs = new URLSearchParams({
      'X-Plex-Token': config.token
    });
    // get all libraries
    // const requestUrl = `${config.serverUrl}/library/sections/?${qs.toString()}`;

    // get contents of specific library
    // const requestUrl = `${
    //   config.serverUrl
    // }/library/sections/2/all?${qs.toString()}`;

    // get all children of show (either episodes or seasons depending on used key)
    // const requestUrl = `${
    //   config.serverUrl
    // }/library/metadata/3163/children?${qs.toString()}`;

    const requestUrl = `${
      config.serverUrl
    }/library/metadata/6952?${qs.toString()}`;

    const requestOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };

    console.log({ requestUrl, requestOptions }, '\n\n\n');

    const response = await fetch(requestUrl, requestOptions);
    const res = await response.json();

    console.log(res.MediaContainer.Metadata);
    // console.log(res.MediaContainer.Metadata[0]);

    // console.log(res.MediaContainer.Directory);
    // console.log(res.MediaContainer.Metadata);
  } catch (error) {
    console.log(error);
  }
};
