import InnerHero from '../components/ui/InnerHero';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { gerdArticles } from '../data/content';

export default function GerdPage() {
  return (
    <>
      <InnerHero
        label="GERD & acid reflux education"
        title="Understanding acid reflux"
        description="Evidence-informed information about gastroesophageal reflux disease — for patients and caregivers."
      />
      <div className="section" style={{ background: '#fff' }}>
        <StaggerContainer className="edu-grid" style={{ marginTop: 0 }}>
          {gerdArticles.map((article) => (
            <StaggerItem key={article.title}>
              <div className="edu-card">
                <div className="edu-card-tag">
                  <div className="edu-tag-label">{article.tag}</div>
                </div>
                <div className="edu-card-body">
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                  <span className="edu-read">Read full article →</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
