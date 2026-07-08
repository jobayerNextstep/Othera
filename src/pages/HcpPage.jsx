import { Link } from 'react-router-dom';
import InnerHero from '../components/ui/InnerHero';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { hcpResources } from '../data/content';

export default function HcpPage() {
  return (
    <>
      <InnerHero
        label="For healthcare professionals"
        title="Scientific resources & prescribing information"
        description="Clinical summaries, downloadable documents, mechanism data, and medical information support for physicians and pharmacists."
      />
      <div className="section" style={{ background: '#f4f9f7' }}>
        <StaggerContainer className="hcp-resources">
          {hcpResources.map((resource) => (
            <StaggerItem key={resource.title}>
              <div className="hcp-card">
                <div className="hcp-icon">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.desc}</p>
                {resource.to ? (
                  <Link to={resource.to} className="hcp-btn">
                    {resource.btn}
                  </Link>
                ) : (
                  <button type="button" className="hcp-btn">
                    {resource.btn}
                  </button>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
