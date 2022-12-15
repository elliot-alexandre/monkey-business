import { split } from "lodash";
import { serialize } from "next-mdx-remote/serialize";

/**
 *
 * @Todo Changing the MDX renderer.
 *
 */

export function mdxToArray(Mdx: string | any): string[] {
  return split(Mdx, /\n+/g);
}

export async function transformToMarkdown(text: string | any) {
  return await serialize(text);
}
