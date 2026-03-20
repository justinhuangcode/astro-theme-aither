import { createLlmsResponse } from '@/lib/site-content';
import { createRootRouteHandler } from '@/lib/route-helpers';

export const GET = createRootRouteHandler((locale) =>
  createLlmsResponse(locale, 'summary'),
);
