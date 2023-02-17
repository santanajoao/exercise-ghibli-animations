import { useContext, useEffect } from 'react';
import FilmsContext from '../context/FilmsContext';
import Loading from './Loading';
import FilmCardList from './FilmCardList';
import ErrorMessage from './ErrorMessage';

export default function FilmList() {
  const { filmList, setFilmList, loading, setLoading, error, setError } =
    useContext(FilmsContext);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://api-trybe-frontend.vercel.app/api/ghibli-animationss'
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setFilmList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return <FilmCardList heading="Films" filmList={filmList} />;
}
