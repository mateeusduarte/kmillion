import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// pages/_app.js
import { Roboto } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '900', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
