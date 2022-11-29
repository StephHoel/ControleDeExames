import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Page from "./Page";

import styles from "../styles/style.module.css";

interface Props {
   children?: ReactNode
   title: String
}

export default function Main({ children, title }: Props) {
   return (
      <Page>

         <Head>
            <title>{title} | ControlS</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            {children}
         </main>

         <Footer />
      </Page>

   )
}