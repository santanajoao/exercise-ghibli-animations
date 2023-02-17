import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  const [filmList, setFilmList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const values = useMemo(() => ({
    filmList,
    setFilmList,
    loading,
    setLoading,
    error,
    setError,
    favoriteList,
    setFavoriteList,
  }), [filmList, loading, error, favoriteList]);

  return (
    <FilmsContext.Provider value={ values }>
      { children }
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmsProvider;
