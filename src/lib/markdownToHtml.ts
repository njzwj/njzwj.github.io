import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeFigure from '@microflash/rehype-figure';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeKatex, {
      output: 'mathml',
    })
    .use(rehypeFigure)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString().replaceAll('<img ', '<img loading="lazy" decoding="async" ');
}
