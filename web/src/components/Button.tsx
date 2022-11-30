import { ChildrenProps } from "../lib/Props";

import styles from "../styles/style.module.css";

export default function ButtonSubmit({ children }: ChildrenProps) {
   return (
      <button
         className={styles.button}
         type="submit"
      >
         {children}
      </button>
   )
}