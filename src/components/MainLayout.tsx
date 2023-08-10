import Profile from '@/components/Profile';
import styles from '@/styles/MainLayout.module.scss';
import RegularLinkGrid from '@/components/RegularLinkGrid';

export default function MainLayout() {
  return (
    <div className={styles.layoutContainer}>
      <section className={styles.container}>
        <Profile />
        <RegularLinkGrid />
      </section>
    </div>
  );
}
