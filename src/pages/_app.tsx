import "../styles/globals.css";
import type { AppProps } from "next/app";

function TODOListApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TODOListApp;
