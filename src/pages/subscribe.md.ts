import { createSubscribeResponse } from '@/lib/agent-protocol';
import { createRootRouteHandler } from '@/lib/route-helpers';

export const GET = createRootRouteHandler(createSubscribeResponse);
