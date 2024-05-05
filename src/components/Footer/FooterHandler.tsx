'use client'
import { usePathname } from 'next/navigation';
import Footer from '.';

export default function FooterHandler() {
  const pathname = usePathname();
  const showFooter = pathname !== "/";

  if (!showFooter) {
    return null;
  }

  return <Footer />;
}