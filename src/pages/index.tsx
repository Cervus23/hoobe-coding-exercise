import styles from '@/styles/MainPage.module.scss';
import MainLayout from '@/components/MainLayout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}
