import FadeIn from './FadeIn';

export default function InnerHero({ label, title, description }) {
  return (
    <div className="inner-hero">
      <FadeIn>
        <div className="sec-label" style={{ color: '#6edfc8' }}>
          {label}
        </div>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h1>{title}</h1>
      </FadeIn>
      <FadeIn delay={0.16}>
        <p>{description}</p>
      </FadeIn>
    </div>
  );
}
