import styles from '@/styles/Social.module.scss';
import Link from 'next/link';

export default function SocialItem({ item }: any) {
  return (
    <div className={styles.socialItemWrapper}>
      <Link className={styles.socialIcon} href={item.link} target="_blank" rel="noreferrer">
        {item.icon}
      </Link>
    </div>
  );
}
