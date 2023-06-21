import fetch from 'cross-fetch';
import { config } from '../config/index.js';

export const update = async (): Promise<void> => {
  try {
    const queryObject: Record<string, string> = {
      type: '4',
      id: '6954',
      includeExternalMedia: '1',
      'title.value':
        'A Town That Welcomes Pirates? Setting Foot on Whisky Peak!',
      'titleSort.value':
        'A Town That Welcomes Pirates? Setting Foot on Whisky Peak!',
      'summary.value':
        'A violent snow storm batters the crew of the Going Merry, but once the Straw Hats arrive at Whisky Peak, the locals invite them to a raucous celebration.',
      'originallyAvailableAt.value': '2001-04-15',
      'titleSort.locked': '1',
      'originallyAvailableAt.locked': '1',
      'X-Plex-Token': config.token
    };
    const qs = new URLSearchParams(queryObject);

    const requestUrl = `${
      config.serverUrl
    }/library/sections/2/all/?${qs.toString()}`;
    const requestOptions = {
      method: 'PUT',
      headers: {
        accept: 'application/json'
      }
    };

    console.log({ requestUrl, requestOptions });

    const response = await fetch(requestUrl, requestOptions);
    const res = await response.text();

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
