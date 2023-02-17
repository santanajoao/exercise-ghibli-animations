import { useContext, useEffect } from 'react';
import FilmsContext from '../context/FilmsContext';
import Loading from './Loading';
import FilmCardList from './FilmCardList';

export default function FilmList() {
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
    <FilmCardList
      heading="Films"
      filmList={ filmList }
    />
  );
}
