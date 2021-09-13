import { createClient } from 'microcms-js-sdk';

import { Client } from '../types/client';

export const client: Client = createClient({
  serviceDomain: 'hatorilab',
  apiKey: process.env.API_KEY,
});
