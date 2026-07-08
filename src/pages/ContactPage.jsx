import { useState } from 'react';
import { motion } from 'framer-motion';
import InnerHero from '../components/ui/InnerHero';
import FadeIn from '../components/ui/FadeIn';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <InnerHero
        label="Contact"
        title="Get in touch with us"
        description="For product enquiries, medical information requests, sample requests, or general questions about Othera®."
      />
      <div className="section" style={{ background: '#f4f9f7' }}>
        <div className="contact-grid">
          <FadeIn>
            <div className="contact-info">
              <div className="contact-block">
                <h4>ACI Limited — Pharmaceuticals Division</h4>
                <p>
                  ACI Centre, 245 Tejgaon Industrial Area, Dhaka 1208, Bangladesh
                </p>
              </div>
              <div className="contact-block">
                <h4>Medical information</h4>
                <p>
                  medinfo@aci-bd.com
                  <br />
                  +880 2 9888443
                </p>
              </div>
              <div className="contact-block">
                <h4>Pharmacovigilance / adverse event reporting</h4>
                <p>
                  pv@aci-bd.com
                  <br />
                  Report an adverse event or product complaint using this contact.
                  All reports are processed in accordance with national
                  pharmacovigilance guidelines.
                </p>
              </div>
              <div className="contact-block">
                <h4>Sample requests</h4>
                <p>
                  For physician sample requests, please contact your ACI medical
                  representative or submit via this form.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {submitted ? (
                <div className="form-success">
                  <h3>Thank you for your message</h3>
                  <p>
                    Your enquiry has been received. Our team will respond within
                    5 business days.
                  </p>
                </div>
              ) : (
                <>
                  <input type="text" placeholder="Full name" required />
                  <input
                    type="text"
                    placeholder="Designation (e.g. Consultant Physician)"
                  />
                  <input type="email" placeholder="Email address" required />
                  <input type="tel" placeholder="Phone number" />
                  <select defaultValue="">
                    <option value="" disabled>
                      Query type
                    </option>
                    <option>Medical information request</option>
                    <option>Sample request</option>
                    <option>Adverse event report</option>
                    <option>General enquiry</option>
                    <option>Media / press</option>
                  </select>
                  <textarea placeholder="Your message or query" required />
                  <button type="submit" className="form-submit">
                    Send message
                  </button>
                </>
              )}
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
