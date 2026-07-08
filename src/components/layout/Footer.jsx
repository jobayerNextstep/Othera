import { NavLink } from 'react-router-dom';
import FadeIn from '../ui/FadeIn';
import { scrollToTop } from '../../hooks/useLenis';

export default function Footer() {
  return (
    <footer>
      <FadeIn>
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Othera<sup>®</sup>
            </div>
            <div className="footer-tagline">
              Biphasic Esomeprazole for extended acid control.
              <br />
              A product of ACI Limited, Bangladesh.
            </div>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <NavLink to="/products" onClick={() => scrollToTop()}>
              Othera 20 mg Tablet
            </NavLink>
            <NavLink to="/products" onClick={() => scrollToTop()}>
              Othera 20 mg Capsule
            </NavLink>
            <NavLink to="/products" onClick={() => scrollToTop()}>
              Othera 40 mg Tablet
            </NavLink>
            <NavLink to="/products" onClick={() => scrollToTop()}>
              Othera 40 mg Capsule
            </NavLink>
            <NavLink to="/products" onClick={() => scrollToTop()}>
              Othera IV 40 mg
            </NavLink>
          </div>
          <div className="footer-col">
            <h5>Information</h5>
            <NavLink to="/about" onClick={() => scrollToTop()}>
              About Othera
            </NavLink>
            <NavLink to="/why" onClick={() => scrollToTop()}>
              Why Biphasic
            </NavLink>
            <NavLink to="/gerd" onClick={() => scrollToTop()}>
              GERD Education
            </NavLink>
            <NavLink to="/faq" onClick={() => scrollToTop()}>
              FAQs
            </NavLink>
            <NavLink to="/hcp" onClick={() => scrollToTop()}>
              For Doctors
            </NavLink>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About ACI</a>
            <NavLink to="/contact" onClick={() => scrollToTop()}>
              Contact Us
            </NavLink>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </FadeIn>
      <div className="footer-bottom">
        <div className="footer-legal">
          © 2026 ACI Limited. All rights reserved. Othera® is a registered
          trademark of ACI Limited. This website is intended for healthcare
          professionals and informed patients only. This material is not a
          substitute for professional medical advice. Please read the full
          prescribing information before use.
        </div>
        <div className="footer-adverse">
          <p>
            ⚠️ <span>Report an adverse event</span>
            <br />
            Pharmacovigilance contact: pv@aci-bd.com
            <br />
            For medical queries: medinfo@aci-bd.com
          </p>
        </div>
      </div>
    </footer>
  );
}
