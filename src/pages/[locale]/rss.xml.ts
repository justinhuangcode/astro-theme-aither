import {
  createLocaleOnlyStaticPaths,
  createLocaleRouteHandler,
} from '@/lib/route-helpers';
import { createRssResponse } from '@/lib/site-content';

export const getStaticPaths = createLocaleOnlyStaticPaths;
export const GET = createLocaleRouteHandler(createRssResponse);
