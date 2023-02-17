import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import FilmCardList from './FilmCardList';
import styles from '../styles/FavoriteList.module.css';

export default function FavoriteList() {
  const { favoriteList } = useContext(FilmsContext);

  if (favoriteList.length === 0) {
    return (
      <main className={ styles.main }>
        <p className={ styles.message }>You haven&apos;t added favorites yet</p>
      </main>
    );
  }

  return (
    <FilmCardList
      heading="Favorites"
      filmList={ favoriteList }
    />
  );
}
