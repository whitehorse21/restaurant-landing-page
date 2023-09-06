import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollUp from "@/components/ScrollUp";
import styles from "@/styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant Landing Page</title>
        <meta name="description" content="Restaurant Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
      <Loader />
      <ScrollUp />
    </div>
  );
}
