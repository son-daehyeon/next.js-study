import { ReactNode } from 'react';

interface IAboutUsLayoutProps {
  children: ReactNode;
}

export default function AboutUsLayout({ children }: IAboutUsLayoutProps) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}
