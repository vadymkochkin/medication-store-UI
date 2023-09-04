import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import { Poppins } from 'next/font/google'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GlobalModal } from '@/components/GlobalModal';
import { wrapper } from "../store/store";

const poppinsFont = Poppins({
  weight: ['300'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <main className={poppinsFont.className}>
        <GlobalModal>
          <Component {...pageProps} />
          <ToastContainer />
        </GlobalModal>
        {scrollY > 0 && (
          <div onClick={scrollToTop} className="fixed bottom-4 right-4 p-4 rounded-lg bg-[#ebf3f7]">
            <Image
              src='/imgs/chevron-top-icon.png'
              alt='Upside'
              width={17}
              height={12}
              className={'h-fit'}
              priority
            />
          </div>
        )}
      </main>
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);
