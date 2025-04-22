"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  appName,
  onClick,
}: ButtonProps) => {
  const newOnClick = onClick ? onClick : () => null;

  return (
    <button className={className} onClick={newOnClick}>
      {`Hello from your ${appName} app!`}
      {children}
    </button>
  );
};
