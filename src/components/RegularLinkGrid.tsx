import data from '@/data/pageData.json';
import BaseFeaturedLink from '@/components/BaseFeaturedLink';
import BaseEmbeddedLink from '@/components/BaseEmbeddedLink';
import styles from '@/styles/RegularLinkGrid.module.scss';

const { content } = data;

export default function RegularLinkGrid() {
  return (
    <ul className={styles.featuredLinkGrid}>
      {content.map((item) => {
        if (item.content.hasPhoto) {
          return (
            <li className={styles.gridItem} key={item.content.id}>
              <BaseFeaturedLink content={item.content} />
            </li>
          );
        }
        if (item.content.isEmbedEnabled) {
          return (
            <li className={styles.gridItem} key={item.content.id}>
              <BaseEmbeddedLink content={item.content} />
            </li>
          );
        }
      })}
    </ul>
  );
}
