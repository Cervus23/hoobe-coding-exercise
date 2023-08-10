import styles from '@/styles/BaseLink.module.scss';
import HoobeIcon from '../../public/assets/HoobeIcon';

export default function BaseFeaturedLink({ content }: any) {
  return (
    <a href={content.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <div className={styles.baseLinkContainer}>
        <div className={styles.baseFeaturedLinkImage}>
          <span>
            {content.hasPhoto && (
              <img src={`/assets/content-id-${content.id}-image.jpg`} alt="link image" />
            )}
          </span>
        </div>
        <div className={styles.baseFeaturedLinkItem}>
          <div className={styles.baseFeaturedLinkBody}>
            <section style={{ flexGrow: 1 }}></section>
            <section className={styles.container}>
              <p className={styles.baseFeaturedLinkTitle}>{content.title}</p>
              <div className={styles.baseFeaturedLinkSocialIconBottom}>
                <HoobeIcon />
              </div>
            </section>
          </div>
        </div>
      </div>
    </a>
  );
}
