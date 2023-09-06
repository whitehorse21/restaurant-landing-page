import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/styles/globals.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
