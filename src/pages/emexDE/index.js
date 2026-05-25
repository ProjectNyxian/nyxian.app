import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
          alt="Logo"
          sources={{
            light: useBaseUrl('/emexDE/img/icon/light.png'),
            dark: useBaseUrl('/emexDE/img/icon/dark.png'),
          }}
          className={styles.logo}
        />
        <Heading as="h1" className="hero__title">
          emexDE
        </Heading>
        <p className="hero__subtitle">
          IDE to develop native code iOS apps and tools on unjailbroken iOS
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/emexDE/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="emexDE"
      description="IDE to develop native code iOS apps and tools on unjailbroken iOS">
      <HomepageHeader />
      <main className={styles.center}>
        <img src={useBaseUrl('/emexDE/img/mockup.png')} alt="Mockup" className={styles.showcase} />
      </main>
    </Layout>
  );
}
