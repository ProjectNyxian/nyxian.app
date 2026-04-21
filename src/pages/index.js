import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useEffect } from 'react';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          alt="Nyxian Logo"
          sources={{
            light: useBaseUrl('/img/icon/hd/light.png'),
            dark: useBaseUrl('/img/icon/hd/dark.png'),
          }}
          className={styles.logo}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.button}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  useEffect(() => {
    // Little easter egg
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@.@@@@@@@@@@@@@@@@.......@@@@@@@@@@@@@@@@@.@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@........@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@@@@@@@@@@\n@@@@@..............@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@@@@@@@@@@\n@@..............@@@@@@@@@@@@@@@@@@@@...@@@@@@@@@@@@@@@.@@@@@\n..............@@@..@@@@@@@@@@@@@@@@@........@@@@@@@@@@.@@@@@\n.............@@...@@@@@@@@@@@@@@@@@@@............@@@@@@@@@@@\n................@@@@@@@@@@@@@@@@@@@@@@......................\n.................@@@@@..@@@@.@@@@@@@@@@.....................\n................@@@@@.....@@@@@@.@@@@@@@....................\n...............@..@@@@.....@@@@@...@@@@@@@..................\n..............@@..@@@@@@@@@@.@@.....@@@@@@@@@...............\n...................@.....@@.@@@........@@@@@@...............\n......................@@@@@@@...............................\n............................@@@.............................\n..........................@@@@@.............................\n......................@@..@@@@@.....@@......................\n....................@@@...@@@@@......@@.....................\n...................@@@.....@@@@@.....@@@....................\n...................@@@@.....@@@......@@@@...................\n...................@@@@.............@@@@@...................\n...................@@@@@@..........@@@@@@...................\n...................@@@@@@@@@...@@@@@@@@@@...................\n....................@@@..@@@@@@@@@@..@@@....................\n.....................@@@@..........@@@@.....................\n......................@@@@@......@@@@.......................\n.........................@@@@@@@@@..........................\n............................................................\n............................................................\n............................................................");
  });
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.center}>
        <img src={useBaseUrl('/img/mockup.png')} alt="Mockup" className={styles.showcase} />
      </main>
    </Layout>
  );
}
