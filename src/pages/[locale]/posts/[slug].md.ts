import { type Locale } from '@/i18n';
import {
  createLocalizedStaticPaths,
  createPropsRouteHandler,
} from '@/lib/route-helpers';
import {
  createMarkdownResponse,
  getMarkdownStaticPaths,
} from '@/lib/markdown-endpoint';

export async function getStaticPaths() {
  return createLocalizedStaticPaths(getMarkdownStaticPaths);
}

export const GET = createPropsRouteHandler<{ locale: Locale; postId: string }, Response>(
  ({ postId }) => createMarkdownResponse(postId),
);
