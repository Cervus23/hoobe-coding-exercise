import SocialItem from '@/components/SocialItem';
import InstagramIcon from '../../public/assets/socialIcons/InstagramIcon';
import ThreadsIcon from '../../public/assets/socialIcons/ThreadsIcon';
import TiktokIcon from '../../public/assets/socialIcons/TiktokIcon';
import TwitterIcon from '../../public/assets/socialIcons/TwitterIcon';
import data from '@/data/pageData.json';
import styles from '@/styles/Social.module.scss';

const socialIcons = [
  <InstagramIcon key={0} color={'#fff'} size={24} />,
  <ThreadsIcon key={1} />,
  <TiktokIcon key={2} />,
  <TwitterIcon key={3} />,
];

const social = data.userSocialPlatform.map((item, index) => ({
  ...item,
  icon: socialIcons[index],
}));

export default function SocialList() {
  return (
    <section className={styles.container}>
      {social.map((item) => (
        <SocialItem key={item.id} item={item} />
      ))}
    </section>
  );
}
