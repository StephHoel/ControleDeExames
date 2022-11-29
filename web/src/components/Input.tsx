import { InputHTMLAttributes } from "react";

import styles from "../styles/style.module.css";

export default function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
   return (
      <input  {...rest}
         className={styles.input}
         required
      />
   );
}
