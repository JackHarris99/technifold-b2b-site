import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl p-4 shadow-md border bg-white">
      {children}
    </div>
  );
}
