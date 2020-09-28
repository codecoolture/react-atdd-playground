import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ATDD Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          Fancy knowing more about test-driven development? Hire{" "}
          <a className={styles.link} href="https://tddworkshop.com" target="blank">
            <strong>The TDD Workshop</strong>
          </a>{" "}
          and enjoy a full week of remote-friendly technical training on TDD in your company.
        </p>
      </main>
    </div>
  );
}
