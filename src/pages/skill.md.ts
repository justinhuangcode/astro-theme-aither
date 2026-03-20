import { createSkillResponse } from '@/lib/agent-protocol';

export function GET() {
  return createSkillResponse();
}
