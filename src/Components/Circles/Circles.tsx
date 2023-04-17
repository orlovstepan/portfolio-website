import styles from './styles.module.scss';

function Circles() {
  return (
    <div className={styles['ripple-background']}>
      <div className={`${styles.circle} ${styles.xxlarge} ${styles.shade1}`}></div>
      <div className={`${styles.circle} ${styles.xlarge} ${styles.shade2}`}></div>
      <div className={`${styles.circle} ${styles.large} ${styles.shade3}`}></div>
      <div className={`${styles.circle} ${styles.medium} ${styles.shade4}`}></div>
    </div>
  );
}

export default Circles;
