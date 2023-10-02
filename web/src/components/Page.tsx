import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from 'react';

import styles from "../styles/style.module.css";

import Footer from "./Footer";

import { HeaderProps, PageProps } from '../lib/Props';
import { GetUserIdSession } from "./CookieSession";

function HeaderPage({ col1, link1 }: HeaderProps) {
   const router = useRouter()

   if (GetUserIdSession()) {
      return (// ajustando a barra de header 
         <header className={styles.header}>
            <p className="text-left">
               <a onClick={() => { router.push(link1) }} className="cursor-pointer">
                  {col1}
               </a>
            </p>

            <p className="text-5xl">
               <a onClick={() => { router.push("/user/home") }} className="cursor-pointer">
                  ControlS
               </a>
            </p>

            <p className="text-right">
               <a onClick={() => { router.push("/logoff") }} className="cursor-pointer">
                  Sair
               </a>
            </p>

         </header>
      )
   }
   else {
      return (
         <header className={styles.header}>
            <p className="text-left">

            </p>

            <p className="text-5xl">
               <a onClick={() => { router.push("/") }} className="cursor-pointer">
                  ControlS
               </a>
            </p>

            <p className="text-right">

            </p>

         </header>
      )
   }
}

export default function Page({ children, col1 = "", link1 = "/", title }: PageProps) {
   return (

      <div className={styles.page}>
         <Head>
            <title>{title} | ControlS</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {HeaderPage({ col1, link1 })}

         <div className="w-full h-px bg-[#eaeaea]" />

         <main className={styles.main}>
            {children}
         </main>

         <Footer />
      </div>

   )
}