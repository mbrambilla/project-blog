import React from 'react';

import { BLOG_TITLE } from '@/constants';
import styles from './homepage.module.css';

export const metadata = {
  title: BLOG_TITLE,
};

async function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        404 Not Found
      </h1>
      <p>This page does not exist.  Please check the URL and try again.</p>
    </div >
  );
}

export default NotFound;
