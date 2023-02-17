import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import FilmCard from './FilmCard';

export default function FavoriteList() {
  const { favoriteList } = useContext(FilmsContext);

  return (
    <main>
      <h1>Favorites</h1>
      <ul>
        { favoriteList.map((favorite) => (
          <li key={ favorite.id }>
            <FilmCard
              title={ favorite.title }
              image={ favorite.image }
              id={ favorite.id }
              description={ favorite.description }
            />
          </li>
        )) }
      </ul>
    </main>
  );
}
