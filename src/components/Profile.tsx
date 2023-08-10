import styles from '@/styles/Profile.module.scss';
import SocialList from '@/components/SocialList';
import data from '@/data/pageData.json';

export default function Profile() {
  return (
    <section className={styles.container}>
      <div className={styles.profilePhoto}>
        <img src={'/assets/hoobe-icon.png'} alt="hoobe-icon.png" />
      </div>
      <div className={styles.profileName}>
        <span>{data.user.fullName}</span>
      </div>
      <SocialList />
    </section>
  );
}
