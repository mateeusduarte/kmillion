import Head from 'next/head';
import messages from '@/common/constants/messages';
import Header from '@/components/Header';
import HomeSession from '@/components/HomeSession';
import MainFeaturesSession from '@/components/MainFeaturesSession';

export default function Home() {
  return (
    <>
      <Head>
        <title>{messages.headTitle}</title>
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Header />
        <HomeSession />
        <MainFeaturesSession />
      </main>
    </>
  );
}
