import Head from "next/head";
import Footer from "./Footer";

import styles from "../styles/style.module.css";

import { MainProps } from "../lib/Props";

export default function Main({ children, title }: MainProps) {
   return (
      <>
         <Head>
            <title>{title} | ControlS</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            {children}
         </main>

         <Footer />
      </>
   )
}