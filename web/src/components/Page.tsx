import React, { ReactNode } from "react";
import styles from "../styles/style.module.css";


interface Props {
   children?: ReactNode
}

export default function Page({ children }: Props) {
   return (
      <main className={styles.page}>
         {children}
      </main>

   )
}