import PropTypes from 'prop-types';
import FilmCard from './FilmCard';
import styles from '../styles/FilmCardList.module.css';

export default function FilmCardList({ heading, filmList }) {
  return (
    <main className={ styles.main }>
      <h1 className={ styles.title }>{ heading }</h1>
      <ul className={ styles.list }>
        {filmList.map((film) => (
          <li key={ film.id }>
            <FilmCard
              title={ film.title }
              image={ film.image }
              id={ film.id }
              description={ film.description }
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

FilmCardList.propTypes = {
  heading: PropTypes.string.isRequired,
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};
