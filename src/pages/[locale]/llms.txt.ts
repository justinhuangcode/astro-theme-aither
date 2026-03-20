import {
  createLocaleOnlyStaticPaths,
  createLocaleRouteHandler,
} from '@/lib/route-helpers';
import { createLlmsResponse } from '@/lib/site-content';

export const getStaticPaths = createLocaleOnlyStaticPaths;
export const GET = createLocaleRouteHandler((locale) =>
  createLlmsResponse(locale, 'summary'),
);
