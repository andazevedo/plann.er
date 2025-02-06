import { X } from "lucide-react";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ModalProps {
  title?: string;
  subtitle?: ReactNode;
  closeModal: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "auto";
}

const modalVariants = tv({
  base: "rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5",
  variants: {
    size: {
      sm: "w-[320px]",
      md: "w-[480px]",
      lg: "w-[640px]",
      auto: "w-auto",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export function Modal({
  title,
  subtitle,
  closeModal,
  children,
  size = "lg",
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className={modalVariants({ size })}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          {subtitle}
        </div>
        {children}
      </div>
    </div>
  );
}
