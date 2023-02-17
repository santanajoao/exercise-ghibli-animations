import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import studioGhibliLogo from '../assets/studio-ghibli-logo.svg';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={ styles.header }>
      <nav className={ styles.nav }>
        <Link to="/" className={ styles.logo_link }>
          <img
            src={ studioGhibliLogo }
            className={ styles.logo }
            alt="Logo do Studio Ghibli"
          />
        </Link>

        <Link
          to="/favorites"
          title="Link para os favoritos"
          className={ styles.favorites_link }
        >
          <AiFillStar className={ styles.favorites_icon } />
        </Link>
      </nav>
    </header>
  );
}
