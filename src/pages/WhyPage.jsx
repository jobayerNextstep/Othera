import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import InnerHero from '../components/ui/InnerHero';
import FadeIn, { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { whyBlocks, barChartData, references } from '../data/content';

function AnimatedBar({ label, width, cls, val, gap }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="bar-row" style={gap ? { marginTop: '0.75rem' } : undefined} ref={ref}>
      <div className="bar-label">{label}</div>
      <div className="bar-track">
        <motion.div
          className={`bar-fill ${cls}`}
          initial={{ width: 0 }}
          animate={inView ? { width } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="bar-val">{val}</div>
    </div>
  );
}

export default function WhyPage() {
  return (
    <>
      <InnerHero
        label="Why Biphasic Othera®"
        title="The science behind two-phase acid control"
        description="Othera®'s biphasic micro-pellet technology addresses the fundamental gap in conventional PPI therapy — nocturnal acid breakthrough — without changing the dosing regimen."
      />
      <div className="section" style={{ background: '#f4f9f7' }}>
        <FadeIn>
          <div className="sec-label">Release mechanism</div>
          <div className="sec-title">What biphasic means</div>
        </FadeIn>
        <div className="why-hero-diagram">
          <FadeIn delay={0.1}>
            <div className="release-visual">
              <h4>Plasma concentration over 24 hours</h4>
              <div className="bar-chart">
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>
                  % time intragastric pH &gt; 4
                </p>
                {barChartData.map((bar) => (
                  <AnimatedBar key={bar.label} {...bar} />
                ))}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <div className="chart-legend">
                    <div className="legend-dot teal" /> Othera®
                  </div>
                  <div className="chart-legend">
                    <div className="legend-dot gray" /> Standard PPI
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <StaggerContainer className="why-text-blocks">
            {whyBlocks.map((block) => (
              <StaggerItem key={block.title}>
                <div className="why-block">
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
      <div className="section" style={{ background: '#fff' }}>
        <FadeIn>
          <div className="sec-label">Supporting evidence</div>
          <div className="sec-title">References & scientific basis</div>
        </FadeIn>
        <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
          {references.map((ref, i) => (
            <StaggerItem key={ref}>
              <div className="reference-card">
                <span>{i + 1}.</span> {ref}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
