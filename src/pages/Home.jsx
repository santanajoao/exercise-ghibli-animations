import Header from '../components/Header';
import FilmList from '../components/FilmList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={ styles.home }>
      <Header />
      <FilmList />
    </div>
  );
}
