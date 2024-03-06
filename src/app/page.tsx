import styles from './styles.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.sparkles}></div>
      <div className={styles.header}>
        {/* <h1 className={styles.site}>
          lillywolf.com
        </h1> */}
        <div className={styles.emojis}>
        </div>
        <div className={styles.hello}>hi! my name is lilly.</div>
      </div>
    </main>
  );
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>created by <a className={styles.link} href='http://lillywolf.com'>lilly wolf 💖</a></p>
    </div>
  );
};
