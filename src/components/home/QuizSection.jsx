import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { symptoms } from '../../data/home';

function getQuizMessage(selectedIds) {
  const selected = symptoms.filter((s) => selectedIds.includes(s.title));
  const hasNight = selected.some((s) => s.hasNight);
  const hasDay = selected.some((s) => s.hasDay);

  if (hasNight && hasDay) {
    return 'This patient profile — with both daytime and nocturnal symptoms — is a strong candidate for Othera® biphasic esomeprazole. The two-phase release is specifically designed for this pattern of acid burden. Discuss with a healthcare professional.';
  }
  if (hasNight) {
    return 'Nocturnal acid symptoms are a key limitation of standard PPI therapy. Othera® biphasic esomeprazole\'s second micro-pellet release phase is designed to address overnight acid breakthrough. Discuss with a healthcare professional.';
  }
  return 'Based on the selected symptoms, Othera® biphasic esomeprazole may be appropriate. Consult a physician to confirm the right formulation and strength for your patient\'s needs.';
}

export default function QuizSection() {
  const [selected, setSelected] = useState([]);

  function toggle(title) {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  }

  return (
    <div className="quiz-section">
      <FadeIn>
        <div className="sec-label">Patient suitability</div>
        <div className="sec-title">Is Othera® right for your patient?</div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="quiz-wrap">
          <div className="sec-sub" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 0 }}>
            Select the symptoms that apply — we&apos;ll guide you to the right option.
          </div>
          <StaggerContainer className="symptom-grid">
            {symptoms.map((item) => (
              <StaggerItem key={item.title}>
                <motion.button
                  type="button"
                  className={`symptom-tile${selected.includes(item.title) ? ' sel' : ''}`}
                  onClick={() => toggle(item.title)}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="sym-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatePresence>
            {selected.length > 0 && (
              <motion.div
                className="quiz-result show"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p>{getQuizMessage(selected)}</p>
                <div className="quiz-btns">
                  <Link to="/products" className="quiz-btn">
                    See product options
                  </Link>
                  <Link to="/gerd" className="quiz-btn">
                    Read GERD guidance
                  </Link>
                  <Link to="/hcp" className="quiz-btn">
                    For healthcare professionals
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeIn>
    </div>
  );
}
