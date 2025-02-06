import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  type: string;
  placeholder: string;
  children?: React.ReactNode;
}

export function Input({
  name,
  type,
  placeholder,
  children,
  ...props
}: InputProps) {
  return (
    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
      {children}
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent text-lg placeholder:text-zinc-400  outline-none flex-1"
      />
    </div>
  );
}
