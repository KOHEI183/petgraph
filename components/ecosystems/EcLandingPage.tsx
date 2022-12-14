/**
 * @description LPページ
 */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/LandingPage/index.module.css";
import { squareSiteLink, lineAddFriendLink } from "@/utils/const";
import { OrSplide } from "@/components/organisms/EntryPoint";

type Props = {};
export const EcLandingPage: React.FC<Props> = React.memo(({}) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>PetGraph | ペトグラフ</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            ペトグラフ <a href="https://nextjs.org">LP</a>
          </h1>
          <OrSplide
            srcList={[
              "/slider/P1010257.JPG",
              "/slider/P1010482.JPG",
              "/slider/P1010618.JPG",
              "/slider/P1010873.JPG",
            ]}
          />
          <Image
            src="/line/L_gainfriends_qr.svg"
            alt="line qr size l"
            width={200}
            height={200}
          />
          <a href="https://lin.ee/newECo6">
            <Image
              loader={() => lineAddFriendLink}
              src="友だち追加"
              alt="友だち追加"
              width={300}
              height={40}
            />
          </a>
          <p className={styles.description}>
            Get started by editing{" "}
            <a href={squareSiteLink}>squareのショップリンク</a>
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
});
