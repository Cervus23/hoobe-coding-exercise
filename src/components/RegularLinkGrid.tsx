import data from '@/data/pageData.json';
import React from 'react';
import BaseFeaturedLink from '@/components/BaseFeaturedLink';
import BaseEmbeddedLink from '@/components/BaseEmbeddedLink';
import styles from '@/styles/RegularLinkGrid.module.scss';

const { content } = data;

export default function RegularLinkGrid() {
  return (
    <ul className={styles.regularLinkGrid}>
      {content.map((item) => (
        <li className={styles.gridItem} key={item.content.id}>
          {item.content.isEmbedEnabled ? (
            <BaseEmbeddedLink content={item.content} />
          ) : (
            <BaseFeaturedLink content={item.content} />
          )}
        </li>
      ))}
    </ul>
  );
}
