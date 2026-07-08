import InnerHero from '../components/ui/InnerHero';
import { StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { products } from '../data/content';

export default function ProductsPage() {
  return (
    <>
      <InnerHero
        label="Product range"
        title="Othera® formulations"
        description="Five biphasic esomeprazole formulations across two strengths — matched to clinical need, patient preference, and care setting."
      />
      <div className="section" style={{ background: '#f4f9f7' }}>
        <StaggerContainer className="prod-detail-grid">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div
                className="prod-detail-card"
                style={product.fullWidth ? { gridColumn: '1 / -1' } : undefined}
              >
                <div
                  className="prod-detail-head"
                  style={
                    product.darkHead
                      ? { background: 'linear-gradient(145deg, #083d38, #0d5f5a)' }
                      : undefined
                  }
                >
                  <h3 dangerouslySetInnerHTML={{ __html: product.displayName.replace('®', '<sup>®</sup>') }} />
                  <div className="form-badge">{product.form}</div>
                </div>
                <div className="prod-detail-body">
                  <div className="prod-specs-row">
                    {product.chips.map((chip) => (
                      <span key={chip} className="spec-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p>{product.desc}</p>
                  <span className="prod-download">
                    {product.download || '⬇ Download patient leaflet'}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
