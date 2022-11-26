import { ChangeEventHandler } from "react";

interface InputProps {
   type: string;
   placeholder: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
   value: string;
}

export default function Input(props: InputProps) {
   return (
      <input
         className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
         type={props.type}
         required
         placeholder={props.placeholder}
         onChange={props.onChange}
         value={props.value}
      />
   );
}
