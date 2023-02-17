import { useContext, useEffect } from 'react';
import FilmsContext from '../context/FilmsContext';
import MovieCard from './MovieCard';
import styles from '../styles/Main.module.css';
import Loading from './Loading';

export default function Main() {
  const {
    filmList, setFilmList, loading, setLoading, setError,
  } = useContext(FilmsContext);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://api-trybe-frontend.vercel.app/api/ghibli-animations',
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setFilmList(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={ styles.main }>
      <h1 className={ styles.title }>Films</h1>
      <ul className={ styles.list }>
        {filmList.map((film) => (
          <li key={ film.id }>
            <MovieCard
              title={ film.title }
              image={ film.image }
              description={ film.description }
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
