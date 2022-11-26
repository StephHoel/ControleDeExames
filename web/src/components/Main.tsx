import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export default function Main({ children }: Props) {
   return (
      <main className="min-h-screen pt-8 pb-16 px-0 flex-1 flex flex-col items-center">
         {children}
      </main>

   )
}