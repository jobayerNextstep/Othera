import { Link } from 'react-router-dom';
import FadeIn, { StaggerContainer, StaggerItem } from '../ui/FadeIn';
import {
  comparisonRows,
  eduCards,
  testimonials,
  stats,
  proResources,
} from '../../data/home';

export function ComparisonTable() {
  return (
    <div className="section compare-section">
      <FadeIn>
        <div className="sec-label">Treatment comparison</div>
        <div className="sec-title">How Othera® compares</div>
        <div className="sec-sub">
          A fair, evidence-informed overview of acid reflux treatment classes.
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="comp-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Antacids</th>
                <th>H2 blockers</th>
                <th>Conventional PPI</th>
                <th className="highlight">Othera® Biphasic PPI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td className={row.antacidsCross ? 'cross' : ''}>{row.antacids}</td>
                  <td>{row.h2}</td>
                  <td className={row.ppiCheck ? 'check' : ''}>{row.ppi}</td>
                  <td className={`highlight${row.otheraCheck ? ' check' : ''}`}>{row.othera}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  );
}

export function EducationHub() {
  return (
    <div className="section edu-section">
      <FadeIn>
        <div className="sec-label">GERD education</div>
        <div className="sec-title">Understanding acid reflux</div>
      </FadeIn>
      <StaggerContainer className="edu-grid">
        {eduCards.map((card) => (
          <StaggerItem key={card.title}>
            <Link to="/gerd" className="edu-card">
              <div className="edu-card-tag">
                <div className="edu-tag-label">{card.tag}</div>
              </div>
              <div className="edu-card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="edu-read">Read article →</span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="testimonials">
      <FadeIn>
        <div className="sec-label" style={{ color: '#6edfc8' }}>
          Clinical perspectives
        </div>
        <div className="sec-title">Physician voices</div>
      </FadeIn>
      <StaggerContainer className="test-grid">
        {testimonials.map((t) => (
          <StaggerItem key={t.author}>
            <div className="test-card">
              <div className="test-quote">&ldquo;{t.quote}&rdquo;</div>
              <div className="test-author">{t.author}</div>
              <div className="test-role">{t.role}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function ProStrip() {
  return (
    <div className="pro-strip">
      <FadeIn>
        <div className="sec-label">For healthcare professionals</div>
        <div className="sec-title">Scientific resources</div>
      </FadeIn>
      <StaggerContainer className="pro-grid">
        {proResources.map((item) => (
          <StaggerItem key={item.title}>
            <div className="pro-card">
              <div className="pro-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              {item.to ? (
                <Link to={item.to} className="pro-link">
                  {item.link}
                </Link>
              ) : (
                <span className="pro-link">{item.link}</span>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function StatsStrip() {
  return (
    <div className="stats">
      <StaggerContainer className="stats-grid">
        {stats.map((stat) => (
          <StaggerItem key={stat.num}>
            <div className="stat">
              <div className="num">{stat.num}</div>
              <div className="desc">{stat.desc}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
