import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Home() {
  const { setFilmList, setError, setLoading } = useContext(FilmsContext);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
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

  return (
    <div>
      <Header />
      <h1>Films</h1>
    </div>
  );
}
