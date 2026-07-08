import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import PageTransition from '../ui/PageTransition';
import { useLenis, scrollToTop } from '../../hooks/useLenis';

export default function Layout() {
  const location = useLocation();
  useLenis();

  useEffect(() => {
    scrollToTop(true);
  }, [location.pathname]);

  return (
    <>
      <TopBar />
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
}
