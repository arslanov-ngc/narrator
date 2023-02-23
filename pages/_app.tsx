import '/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://code.responsivevoice.org/responsivevoice.js?key=aTxUwnKG"></script>
    </>
  );
}
