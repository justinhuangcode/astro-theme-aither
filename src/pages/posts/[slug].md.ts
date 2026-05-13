import { createRootStaticPaths } from '@/lib/route-helpers';
import { getMarkdownStaticPaths, createMarkdownResponse } from '@/lib/markdown-endpoint';

export const getStaticPaths = createRootStaticPaths(getMarkdownStaticPaths);

export function GET({ props }: { props: { markdownBody: string } }) {
  return createMarkdownResponse(props.markdownBody);
}
