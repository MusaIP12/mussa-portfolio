import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  variant?: string;
  size?: string;
};

export function Button({ children, className = "" }: Props) {
  return <button className={className}>{children}</button>;
}