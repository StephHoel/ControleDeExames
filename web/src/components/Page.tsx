import { ReactNode } from "react";
import { GetUserIdSession } from './CookieSession';
import styles from "../styles/style.module.css";

import Header, { HeaderProps } from "./Header";

export default function Page({ children, col1, link1 }: HeaderProps) {
   return (
      <main className={styles.page}>
         {
            GetUserIdSession() ?
               <Header col1={col1} link1={link1} />
               : ''
         }

         {children}
      </main>

   )
}