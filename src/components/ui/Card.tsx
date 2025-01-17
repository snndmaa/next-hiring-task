// components/ui/Card.tsx
import React, { FC } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};
