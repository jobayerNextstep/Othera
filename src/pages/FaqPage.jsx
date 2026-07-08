import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import InnerHero from '../components/ui/InnerHero';
import FadeIn from '../components/ui/FadeIn';
import { faqBuckets } from '../data/content';

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button type="button" className="faq-q" onClick={() => setOpen(!open)}>
        {question}
        <motion.span
          className="arrow"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <InnerHero
        label="Frequently asked questions"
        title="Common questions about Othera®"
        description="Clear answers about biphasic esomeprazole, dosing, formulations, and the science behind Othera®."
      />
      <div className="section" style={{ background: '#fff' }}>
        {faqBuckets.map((bucket, i) => (
          <FadeIn key={bucket.title} delay={i * 0.08}>
            <div className="faq-bucket">
              <div className="faq-bucket-title">{bucket.title}</div>
              <div className="faq-list">
                {bucket.items.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
