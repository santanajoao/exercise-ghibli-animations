import { useContext, useEffect } from 'react';
import FilmsContext from '../context/FilmsContext';
import MovieCard from './MovieCard';

export default function Main() {
  const { setFilmList, setLoading, setError, filmList } = useContext(FilmsContext);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
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

  return (
    <main>
      <h1>Films</h1>
      <ul>
        { filmList.map((film) => (
          <li key={ film.id }>
            <MovieCard
              title={ film.title }
              image={ film.image }
              description={ film.description }
            />
          </li>
        )) }
      </ul>
    </main>
  );
}
