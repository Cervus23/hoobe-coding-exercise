import styles from '@/styles/Social.module.scss';

export default function SocialItem({ item } = item) {
  return (
    <div className={styles.socialItemWrapper}>
      <a className={styles.socialIcon} href={item.link} target="_blank" rel="noreferrer">
        {item.icon}
      </a>
    </div>
  );
}
