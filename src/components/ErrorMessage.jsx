import errorImage from '../assets/error-image.jpg';
import styles from '../styles/ErrorMessage.module.css';

export default function ErrorMessage({ error }) {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <img
          src={errorImage}
          className={styles.image}
          alt="Personagem Setsuko chorando"
        />
        <div className={styles.message_wrapper}>
          <h1 className={styles.title}>Oops! Algum erro ocorreu</h1>
          <p className={styles.message}>
            Mensagem de erro: <strong>{error}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
