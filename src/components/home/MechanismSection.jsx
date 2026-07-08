import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { timeline } from '../../data/home';

export default function MechanismSection() {
  return (
    <div className="section mech-section">
      <FadeIn>
        <div className="sec-label">Mechanism of action</div>
        <div className="sec-title">The biphasic difference</div>
        <div className="sec-sub">
          Unlike conventional PPIs that release once, Othera® uses a dual-layer
          micro-pellet architecture for two precisely timed waves of acid
          suppression.
        </div>
      </FadeIn>
      <div className="mech-grid">
        <StaggerContainer className="phase-cards">
          <StaggerItem>
            <div className="phase-card phase1">
              <div className="phase-num">Phase 1 · Immediate release</div>
              <h3>Rapid symptom relief</h3>
              <p>
                The first-release layer dissolves quickly, delivering
                esomeprazole for fast-acting acid suppression — bringing
                measurable relief within the first hour of dosing.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="phase-card phase2">
              <div className="phase-num">Phase 2 · Sustained release</div>
              <h3>Prolonged overnight protection</h3>
              <p>
                Micro-pellets in the second layer release gradually over hours,
                maintaining therapeutic plasma levels through the night when
                nocturnal acid breakthrough is most problematic.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <Link to="/why" className="mech-cta">
              Learn more about biphasic science →
            </Link>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.15}>
          <div className="mech-diagram">
            <h4>Acid suppression timeline</h4>
            {timeline.map((row) => (
              <motion.div
                key={row.time}
                className="tl-row"
                style={row.last ? { borderLeftColor: 'transparent' } : undefined}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="tl-dot" />
                <div className="tl-time">{row.time}</div>
                <div className="tl-text">{row.text}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
