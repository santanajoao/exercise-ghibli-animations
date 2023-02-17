import styles from '../styles/ErrorMessage.module.css';

export default function ErrorMessage({ error }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{error}</p>
    </div>
  )
}
