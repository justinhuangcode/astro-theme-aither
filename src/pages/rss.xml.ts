import { createRssResponse } from '@/lib/site-content';
import { createRootRouteHandler } from '@/lib/route-helpers';

export const GET = createRootRouteHandler(createRssResponse);
