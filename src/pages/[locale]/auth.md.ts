import {
  createLocaleOnlyStaticPaths,
  createLocaleRouteHandler,
} from '@/lib/route-helpers';
import { createAuthResponse } from '@/lib/agent-protocol';

export const getStaticPaths = createLocaleOnlyStaticPaths;
export const GET = createLocaleRouteHandler(createAuthResponse);
