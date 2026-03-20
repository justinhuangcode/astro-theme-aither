import {
  createLocaleOnlyStaticPaths,
  createLocaleRouteHandler,
} from '@/lib/route-helpers';
import { createAboutMarkdownResponse } from '@/lib/site-content';

export const getStaticPaths = createLocaleOnlyStaticPaths;
export const GET = createLocaleRouteHandler(createAboutMarkdownResponse);
