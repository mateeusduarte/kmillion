import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import messages from '@/common/constants/messages';

export default function Home() {
  return (
    <>
      <Head>
        <title>{messages.headTitle}</title>
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
