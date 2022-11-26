import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface Props {
   children?: ReactNode
   col1: string;
   link1: string;
}

export default function Header({ col1, link1 }: Props) {
   const router = useRouter()

   return (
      <header className="grid grid-cols-3 pt-4">
         <p className="text-left">
            <a onClick={() => { router.push(link1) }}  className="cursor-pointer">
               {col1}
            </a>
         </p>

         <p className="text-5xl">
            <a onClick={() => { router.push("/user/home") }}  className="cursor-pointer">
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