import PropTypes from 'prop-types';
import { AiOutlineStar } from 'react-icons/ai';
import styles from '../styles/MovieCard.module.css';

export default function MovieCard(props) {
  const { image, title, description } = props;
  return (
    <div className={ styles.card }>
      <button className={ styles.button }>
        <AiOutlineStar className={ styles.icon } />
      </button>
      <img src={ image } className={ styles.image } alt="Film cape" />
      <div className={ styles.infos_wrapper }>
        <h3 className={ styles.title }>{ title }</h3>
        <p className={ styles.description }>{ description }</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
