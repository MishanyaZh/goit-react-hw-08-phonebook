import styles from '../BoxMain/BoxMain.module.css';

const BoxMain = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default BoxMain;
