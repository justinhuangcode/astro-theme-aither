import {
  createLocaleOnlyStaticPaths,
  createLocaleRouteHandler,
} from '@/lib/route-helpers';
import { createSubscribeResponse } from '@/lib/agent-protocol';

export const getStaticPaths = createLocaleOnlyStaticPaths;
export const GET = createLocaleRouteHandler(createSubscribeResponse);
