import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/banner';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix</h1>

      <Banner
        title="Interstellar"
        subTitle="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        imgUrl="/static/interstellar.jpg"
      />

      {/*<NavBar />
      
      <Card />*/}
    </div>
  );
}
