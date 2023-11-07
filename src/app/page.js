import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const postList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {postList.map(({ slug, ...delegated }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          {...delegated}
        />
      ))}
    </div >
  );
}

export default Home;
