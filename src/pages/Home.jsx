import Header from '../components/Header';
import Main from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={ styles.home }>
      <Header />
      <Main />
    </div>
  );
}
