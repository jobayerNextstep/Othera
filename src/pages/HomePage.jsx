import Hero from '../components/home/Hero';
import { BenefitsStrip, SkuGrid } from '../components/home/BenefitsStrip';
import MechanismSection from '../components/home/MechanismSection';
import QuizSection from '../components/home/QuizSection';
import {
  ComparisonTable,
  EducationHub,
  Testimonials,
  ProStrip,
  StatsStrip,
} from '../components/home/HomeSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <SkuGrid />
      <MechanismSection />
      <QuizSection />
      <ComparisonTable />
      <EducationHub />
      <Testimonials />
      <ProStrip />
      <StatsStrip />
    </>
  );
}
