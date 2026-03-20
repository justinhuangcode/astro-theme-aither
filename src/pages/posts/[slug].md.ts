import { createRootStaticPaths } from '@/lib/route-helpers';
import { getMarkdownStaticPaths, createMarkdownResponse } from '@/lib/markdown-endpoint';

export const getStaticPaths = createRootStaticPaths(getMarkdownStaticPaths);

export function GET({ props }: { props: { postId: string } }) {
  return createMarkdownResponse(props.postId);
}
