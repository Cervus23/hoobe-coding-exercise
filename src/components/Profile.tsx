import styles from '@/styles/Profile.module.scss';
import SocialList from '@/components/SocialList';
import data from '@/data/pageData.json';
import hoobeIcon from '@assets/hoobe-icon.png';
import Image from 'next/image';

export default function Profile() {
  return (
    <section className={styles.container}>
      <div className={styles.profilePhoto}>
        <Image src={hoobeIcon} alt="hoobe-icon.png" width={104} height={104} />
      </div>
      <div className={styles.profileName}>
        <span>{data.user.fullName}</span>
      </div>
      <SocialList />
    </section>
  );
}
