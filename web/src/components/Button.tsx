import React, { ReactNode } from "react";

interface Props {
   children?: ReactNode
}

export default function ButtonSubmit({ children }: Props) {
   return (
      <button
         className="bg-gray-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase my-4 hover:bg-gray-700"
         type="submit"
      >
         {children}
      </button>
   )
}