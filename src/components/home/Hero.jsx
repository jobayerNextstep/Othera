import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from '../ui/FadeIn';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <FadeIn>
          <div className="hero-eyebrow">Biphasic esomeprazole · ACI</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Extended acid control across <em>two distinct phases</em>
          </motion.h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="hero-sub">
            Othera® delivers a first release for rapid symptom onset and a
            sustained micro-pellet second release for prolonged overnight
            protection — addressing acid burden where conventional PPIs fall
            short.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="hero-btns">
            <Link to="/products" className="btn-teal">
              Explore Products
            </Link>
            <Link to="/why" className="btn-ghost">
              Why Biphasic Othera
            </Link>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.2} className="hero-visual">
        <div className="product-stage">
          <div className="glow-ring" />
          <div className="fp fp3">
            <span className="fdot" />
            Rapid onset
          </div>
          <div className="fp fp1">
            <span className="fdot" />
            Overnight protection
          </div>
          <div className="fp fp2">
            <span className="fdot" />
            40 mg · 30 tablets
          </div>
          <div className="product-box">
            <div className="box-top">
              <div className="dosage">40 mg</div>
              <div className="count">30 Tablets</div>
            </div>
            <div className="box-body">
              <div className="box-brand">
                Othera<sup>®</sup>
              </div>
              <div className="box-num">40</div>
              <div className="box-sub">
                Esomeprazole Magnesium Trihydrate USP enteric coated
                micro-pellets equivalent to Esomeprazole 40 mg
              </div>
              <div className="box-type">Tablet</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
