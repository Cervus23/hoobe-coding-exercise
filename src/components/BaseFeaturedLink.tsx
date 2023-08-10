import styles from '@/styles/BaseLink.module.scss';
import HoobeIcon from '../../public/assets/HoobeIcon';
import Image from 'next/image';
import testImage from '@assets/content-id-f9wzS1vHcf-image.jpg';

export default function BaseFeaturedLink({ content }: any) {
  return (
    <a href={content.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <div className={styles.baseLinkContainer}>
        <div className={styles.baseFeaturedLinkImage}>
          <span>
            {content.hasPhoto && (
              <Image src={testImage} width={1024} height={1024} alt="link image" />
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
