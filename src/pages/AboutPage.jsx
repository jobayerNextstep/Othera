import InnerHero from '../components/ui/InnerHero';
import FadeIn from '../components/ui/FadeIn';

const features = [
  'Biphasic MUPL technology',
  '5 formulations — tablet, capsule, IV',
  '20 mg and 40 mg strengths',
  'Once-daily dosing',
  'ACI Limited, Bangladesh',
];

export default function AboutPage() {
  return (
    <>
      <InnerHero
        label="About Othera®"
        title="A new standard in acid control"
        description="Othera® is ACI Limited's biphasic esomeprazole formulation — engineered to address the limitations of conventional single-release PPIs through a two-phase micro-pellet release system."
      />
      <div className="section" style={{ background: '#fff' }}>
        <FadeIn>
          <div className="sec-label">What makes Othera® different</div>
          <div className="sec-title">Beyond the conventional PPI</div>
        </FadeIn>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            marginTop: '2rem',
          }}
          className="about-grid"
        >
          <FadeIn delay={0.1}>
            <div>
              <p className="about-text">
                Standard esomeprazole tablets release drug in a single pulse. Once
                plasma levels fall — typically 8–10 hours after dosing — acid
                suppression wanes, leaving patients vulnerable during overnight
                hours.
              </p>
              <p className="about-text">
                Othera® uses Micro-pellet Biphasic Release technology (MUPL) to
                deliver esomeprazole in two distinct, time-separated waves —
                achieving fast onset and sustained coverage in a single once-daily
                tablet.
              </p>
              <p className="about-text">
                Available in tablets, capsules, and an IV formulation across 20 mg
                and 40 mg strengths, Othera® gives clinicians flexibility to match
                formulation to patient need.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="about-promise-card">
              <p className="about-promise-label">Brand promise</p>
              <p className="about-promise-quote">
                &ldquo;From first hour to full night — uninterrupted acid control.&rdquo;
              </p>
              <div className="about-features">
                {features.map((f) => (
                  <div key={f} className="about-feature-row">
                    <span>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
