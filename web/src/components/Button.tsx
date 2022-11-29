import React, { ReactNode } from "react";

import styles from "../styles/style.module.css";

interface Props {
   children?: ReactNode
}

export default function ButtonSubmit({ children }: Props) {
   return (
      <button
         className={styles.button}
         type="submit"
      >
         {children}
      </button>
   )
}