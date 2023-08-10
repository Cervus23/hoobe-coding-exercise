import styles from '@/styles/BaseLink.module.scss';

export default function BaseEmbeddedLink({ content }: any) {
  const link = `https://www.${content.link.replace(
    'channel/',
    'embed/videoseries?list=',
  )}&enablejsapi=1&autoplay=0&playsinline=1`;

  return (
    <div className={styles.baseLinkContainer}>
      <iframe src={link} frameBorder="0" />
    </div>
  );
}
