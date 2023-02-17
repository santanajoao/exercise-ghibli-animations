import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import FilmsContext from '../context/FilmsContext';
import styles from '../styles/FilmCard.module.css';

export default function FilmCard(props) {
  const { image, title, description, id } = props;
  const { favoriteList, setFavoriteList } = useContext(FilmsContext);

  const isFavorite = favoriteList.some((favorite) => favorite.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      const newFavorites = favoriteList.filter((favorite) => favorite.id !== id);
      setFavoriteList(newFavorites);
    } else {
      setFavoriteList([...favoriteList, { image, title, description, id }]);
    }
  };

  return (
    <div className={ styles.card }>
      <button
        title={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
        onClick={ handleFavorite }
        className={ styles.button }
      >
        {isFavorite ? (
          <AiFillStar className={ styles.icon } />
        ) : (
          <AiOutlineStar className={ styles.icon } />
        )}
      </button>
      <img src={ image } className={ styles.image } alt="Film cape" />
      <div className={ styles.infos_wrapper }>
        <h3 className={ styles.title }>{title}</h3>
        <p className={ styles.description }>{description}</p>
      </div>
    </div>
  );
}

FilmCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
