import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { benefits, skuProducts } from '../../data/home';

export function BenefitsStrip() {
  return (
    <div className="benefits-strip">
      <FadeIn>
        <div className="sec-label" style={{ textAlign: 'center' }}>
          Core advantages
        </div>
      </FadeIn>
      <StaggerContainer className="strip-grid">
        {benefits.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              className="strip-card"
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(13,63,56,0.12)' }}
            >
              <div className="strip-icon" style={{ background: item.bg }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function SkuGrid() {
  return (
    <div className="section products-section">
      <FadeIn>
        <div className="sec-label">Product portfolio</div>
        <div className="sec-title">Available formulations</div>
        <div className="sec-sub">
          Four biphasic esomeprazole formulations — engineered in two strengths,
          matched to your patient&apos;s clinical need.
        </div>
      </FadeIn>
      <StaggerContainer className="sku-grid">
        {skuProducts.map((sku) => (
          <StaggerItem key={sku.id}>
            <Link to="/products" className={`sku-card${sku.featured ? ' featured-sku' : ''}`}>
              {sku.featured && <div className="sku-featured-tag">Most prescribed</div>}
              <div className="sku-box-wrap">
                <div
                  className="sku-box"
                  style={{ '--g1': sku.g1, '--g2': sku.g2, '--g3': sku.g3 }}
                >
                  <div className="sku-box-face sku-front">
                    <div className="sku-top-info">
                      <span>{sku.count}</span>
                      <span>{sku.strength}</span>
                    </div>
                    <div className="sku-brand">
                      Othera<sup>®</sup>
                      <span className="sku-dose">{sku.strength.replace(' mg', '')}</span>
                    </div>
                    <div className="sku-generic">
                      Esomeprazole {sku.strength} on Esomeprazole
                      <br />
                      Magnesium Trihydrate USP
                    </div>
                    <div className="sku-form-badge">{sku.form}</div>
                    <div className="sku-stomach" />
                    <div className="sku-aci">ACI</div>
                  </div>
                </div>
                <div className="sku-tablet-img">{sku.emoji}</div>
              </div>
              <div className="sku-info">
                <div className="sku-strength-pill" style={sku.pillStyle}>
                  {sku.pill}
                </div>
                <div className="sku-name">
                  Othera<sup>®</sup> {sku.name.replace('Othera® ', '')}
                </div>
                <div className="sku-desc">{sku.desc}</div>
                <div className="sku-cta">View details →</div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
