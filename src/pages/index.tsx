import Head from 'next/head';
import messages from '@/common/constants/messages';
import Header from '@/components/Header';
import HomeSession from '@/components/HomeSession';
import MainFeaturesSession from '@/components/MainFeaturesSession';
import { useEffect, useState } from 'react';
import MoreFeaturesSession from '@/components/MoreFeaturesSession';
import NumbersSession from '@/components/NumbersSession';
import ContactSession from '@/components/ContactSession';
import Footer from '@/components/Footer';

export default function Home() {
  const [session, setSession] = useState('');

  useEffect(() => {
    const listenToPopstate = () => {
      const hash = window.location.hash?.substring(1);
      setSession(hash);
    };
    window.addEventListener('popstate', listenToPopstate);
    return () => {
      window.removeEventListener('popstate', listenToPopstate);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{messages.headTitle}</title>
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Header session={session} onScroll={setSession} />
        <HomeSession />
        <MainFeaturesSession />
        <MoreFeaturesSession />
        <NumbersSession />
        <ContactSession />
        <Footer />
      </main>
    </>
  );
}
