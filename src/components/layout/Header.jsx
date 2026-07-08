import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollToTop } from '../../hooks/useLenis';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Othera' },
  { to: '/products', label: 'Products' },
  { to: '/why', label: 'Why Biphasic' },
  { to: '/gerd', label: 'GERD Education' },
  { to: '/faq', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      onClick={() => {
        scrollToTop();
        onClick?.();
      }}
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <NavLink to="/" className="logo" onClick={() => scrollToTop()}>
          Othera<sup>®</sup>
        </NavLink>
        <nav>
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
        <NavLink to="/hcp" className="header-cta" onClick={() => scrollToTop()}>
          For Healthcare Professionals
        </NavLink>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav open"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                onClick={() => setMenuOpen(false)}
              />
            ))}
            <NavLink
              to="/hcp"
              className="nav-link"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              For Healthcare Professionals
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
