'use client';

import { PageError } from '@/ui/page/page404';
import { type ComponentType } from 'react';

export default async function StaticPage({ params }: { params: { filename: string } }) {
  try {
    const { default: Page } = await import(`./${params.filename}.mdx`) as { default: ComponentType };
    return (
      <article className={'prose prose-lg'}>
        <Page/>
      </article>
    );
  } catch (err) {
    return <PageError/>;
  }
}