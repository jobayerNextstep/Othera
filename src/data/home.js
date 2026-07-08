export const benefits = [
  {
    icon: '⚡',
    bg: '#e1f5ee',
    title: 'Biphasic release',
    text: 'Two distinct release phases in a single tablet for complete daytime and nighttime coverage.',
  },
  {
    icon: '🌙',
    bg: '#eeedfe',
    title: 'Day & night protection',
    text: 'First phase acts fast. Second phase micro-pellets sustain acid control through overnight hours.',
  },
  {
    icon: '📈',
    bg: '#e6f1fb',
    title: 'Longer plasma concentration',
    text: 'Extended esomeprazole plasma levels keep intragastric pH suppressed longer than conventional PPIs.',
  },
  {
    icon: '💊',
    bg: '#faeeda',
    title: 'Multiple dosage options',
    text: 'Available as 20 mg & 40 mg tablets, capsules, and 40 mg IV — covering every clinical scenario.',
  },
];

export const skuProducts = [
  {
    id: '20-tablet',
    count: '30 Tablets',
    strength: '20 mg',
    g1: '#3abfa0',
    g2: '#1a8c7a',
    g3: '#0d6b5e',
    form: 'Tablet',
    emoji: '💊',
    pill: '20 mg · Tablet',
    name: 'Othera® 20 Tablet',
    desc: 'For mild-to-moderate GERD and long-term maintenance. Biphasic release for day and night acid control.',
    featured: false,
  },
  {
    id: '20-capsule',
    count: '30 Capsules',
    strength: '20 mg',
    g1: '#4ec9a8',
    g2: '#1a8c7a',
    g3: '#0d6b5e',
    form: 'Capsule',
    emoji: '🔵',
    pill: '20 mg · Capsule',
    name: 'Othera® 20 Capsule',
    desc: 'Same biphasic efficacy in capsule form — preferred by patients who have difficulty swallowing tablets.',
    featured: false,
  },
  {
    id: '40-tablet',
    count: '30 Tablets',
    strength: '40 mg',
    g1: '#1a9e85',
    g2: '#0d7a65',
    g3: '#084f41',
    form: 'Tablet',
    emoji: '💊',
    pill: '40 mg · Tablet',
    pillStyle: { background: '#083d38', color: '#5dcaa5' },
    name: 'Othera® 40 Tablet',
    desc: 'Full-strength for moderate-to-severe GERD and erosive esophagitis. Maximum 24-hour biphasic acid suppression.',
    featured: true,
  },
  {
    id: '40-capsule',
    count: '30 Capsules',
    strength: '40 mg',
    g1: '#269e82',
    g2: '#0d7a65',
    g3: '#084f41',
    form: 'Capsule',
    emoji: '🔵',
    pill: '40 mg · Capsule',
    name: 'Othera® 40 Capsule',
    desc: '40 mg biphasic esomeprazole in capsule format — ideal for patients requiring full-strength coverage in a non-tablet form.',
    featured: false,
  },
];

export const timeline = [
  { time: '0–1 hr', text: 'First release dissolves. Rapid esomeprazole absorption begins.' },
  { time: '1–4 hr', text: 'Peak plasma concentration. Significant acid suppression achieved.' },
  { time: '4–8 hr', text: 'Micro-pellet second release begins. Sustained levels maintained.' },
  { time: '8–16 hr', text: 'Prolonged overnight protection. Nocturnal breakthrough suppressed.', last: true },
];

export const symptoms = [
  { icon: '🔥', title: 'Frequent heartburn', desc: 'Recurrent burning or reflux episodes', hasNight: false, hasDay: false },
  { icon: '☀️', title: 'Daytime symptoms', desc: 'Discomfort during waking hours', hasNight: false, hasDay: true },
  { icon: '🌙', title: 'Night-time symptoms', desc: 'Waking due to acid reflux or heartburn', hasNight: true, hasDay: false },
  { icon: '⏰', title: 'Need longer protection', desc: 'Symptoms persist despite standard PPIs', hasNight: false, hasDay: false },
  { icon: '🔄', title: 'Recurrence after treatment', desc: 'Symptoms return after stopping therapy', hasNight: false, hasDay: false },
  { icon: '🩺', title: 'Physician consultation', desc: 'Seeking professional guidance before starting', hasNight: false, hasDay: false },
];

export const comparisonRows = [
  { feature: 'Onset of action', antacids: 'Minutes', h2: '30–60 min', ppi: '1–3 hours', othera: 'Within 1 hour' },
  { feature: 'Duration of acid control', antacids: '1–3 hours', h2: '6–10 hours', ppi: 'Up to 10–12 hours', othera: 'Up to 16+ hours' },
  { feature: 'Mechanism', antacids: 'Neutralises acid', h2: 'Blocks histamine H2 receptors', ppi: 'Single-phase proton pump inhibition', othera: 'Biphasic proton pump inhibition' },
  { feature: 'Nocturnal acid control', antacids: 'Limited', h2: 'Moderate', ppi: 'Partial', othera: '✓ Sustained', otheraCheck: true, antacidsCross: true },
  { feature: 'Suitable for recurring symptoms', antacids: 'Short-term only', h2: 'Moderate', ppi: 'Yes', othera: '✓ Yes — extended coverage', otheraCheck: true, antacidsCross: true },
  { feature: 'Once-daily dosing', antacids: 'Multiple doses', h2: 'Once or twice daily', ppi: '✓', othera: '✓', ppiCheck: true, otheraCheck: true, antacidsCross: true },
  { feature: 'Erosive esophagitis healing', antacids: 'Not indicated', h2: 'Limited', ppi: '✓', othera: '✓ Enhanced', ppiCheck: true, otheraCheck: true, antacidsCross: true },
];

export const eduCards = [
  { tag: 'Basics', title: 'What is GERD?', desc: 'A guide to gastroesophageal reflux disease — causes, symptoms, and diagnosis.' },
  { tag: 'Triggers', title: 'Causes & triggers of acid reflux', desc: 'Foods, lifestyle factors, and conditions that worsen reflux symptoms.' },
  { tag: 'Nocturnal GERD', title: 'Night-time reflux', desc: 'Why acid reflux worsens at night and why sustained acid control matters during sleep.' },
  { tag: 'Lifestyle', title: 'Lifestyle measures for reflux', desc: 'Diet, sleep position, and daily habits that reduce acid reflux burden.' },
  { tag: 'Treatment', title: 'PPI vs H2 blockers', desc: 'Understanding the difference between treatment classes and when each is appropriate.' },
  { tag: 'Awareness', title: 'Myths & facts about acid reflux', desc: 'Common misconceptions about GERD, PPIs, and long-term acid management.' },
];

export const testimonials = [
  {
    quote: 'The biphasic formulation addresses a real gap — many of my patients have significant nocturnal symptoms that simply aren\'t covered by standard once-daily PPI therapy.',
    author: 'Consultant Gastroenterologist',
    role: 'Dhaka, Bangladesh',
  },
  {
    quote: 'I\'ve been looking for an option that works through the night without adding a second dose. The sustained micro-pellet release concept is clinically logical and well-timed.',
    author: 'General Physician',
    role: 'Chittagong, Bangladesh',
  },
  {
    quote: 'Erosive esophagitis patients need sustained acid suppression. Othera\'s extended duration profile makes it a compelling option for those not responding to standard PPIs.',
    author: 'Specialist Physician, Internal Medicine',
    role: 'Sylhet, Bangladesh',
  },
];

export const stats = [
  { num: '2×', desc: 'Release phases vs single-release PPIs' },
  { num: '16h', desc: 'Sustained acid suppression per dose' },
  { num: '<1h', desc: 'Time to first acid suppression onset' },
  { num: '5', desc: 'Formulations across strengths and forms' },
];

export const proResources = [
  { icon: '📋', title: 'Product monograph', desc: 'Full prescribing information, indications, dosage, and safety data.', link: 'Download PDF →' },
  { icon: '🎬', title: 'Mechanism animation', desc: 'Visual explanation of the biphasic micro-pellet release mechanism.', link: 'Watch animation →' },
  { icon: '📊', title: 'Scientific summary', desc: 'Evidence overview and clinical study summaries for the biphasic formulation.', link: 'Download →' },
  { icon: '✉️', title: 'Medical information query', desc: 'Submit a medical information request to the ACI pharmacovigilance team.', link: 'Submit query →', to: '/hcp' },
];
