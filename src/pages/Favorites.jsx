import Header from '../components/Header';
import FavoriteList from '../components/FavoriteList';
import styles from '../styles/Favorites.module.css';

export default function Favorites() {
  return (
    <div className={ styles.favorites }>
      <Header />
      <FavoriteList />
    </div>
  );
}
