export const products = [
  {
    id: '20-tablet',
    displayName: 'Othera® 20',
    form: 'Tablet',
    chips: ['20 mg', 'MUPL biphasic', '30 tablets', 'Once daily'],
    desc: 'Indicated for mild-to-moderate GERD, symptomatic reflux, and maintenance therapy after healing. Biphasic release provides daytime relief and overnight acid control in a single 20 mg dose.',
  },
  {
    id: '20-capsule',
    displayName: 'Othera® 20',
    form: 'Capsule',
    chips: ['20 mg', 'MUPL biphasic', '30 capsules', 'Once daily'],
    desc: 'Identical biphasic efficacy to the tablet form in a capsule for patients who prefer or require capsule administration. Suitable for long-term management.',
  },
  {
    id: '40-tablet',
    displayName: 'Othera® 40',
    form: 'Tablet',
    chips: ['40 mg', 'MUPL biphasic', '30 tablets', 'Once daily'],
    desc: 'For moderate-to-severe GERD, erosive esophagitis, and patients with persistent nocturnal acid symptoms. Full-strength biphasic delivery for maximum 24-hour acid suppression.',
  },
  {
    id: '40-capsule',
    displayName: 'Othera® 40',
    form: 'Capsule',
    chips: ['40 mg', 'MUPL biphasic', '30 capsules', 'Once daily'],
    desc: '40 mg capsule for patients requiring full-strength biphasic esomeprazole who cannot or prefer not to take tablets. Same clinical profile as the 40 mg tablet.',
  },
  {
    id: 'iv',
    displayName: 'Othera® IV',
    form: 'Intravenous · 40 mg',
    chips: ['40 mg / vial', 'Intravenous', 'Hospital use', 'Single-use'],
    desc: 'Intravenous esomeprazole 40 mg for use in hospital and clinical settings where oral administration is not feasible — including post-surgical patients, ICU care, and acute upper GI bleeding prophylaxis. Administered under medical supervision.',
    fullWidth: true,
    darkHead: true,
    download: '⬇ Download prescribing information',
  },
];

export const faqBuckets = [
  {
    title: 'About Othera®',
    items: [
      {
        q: 'What is Othera®?',
        a: 'Othera® is a biphasic esomeprazole formulation developed by ACI Limited. It uses Micro-pellet Biphasic Release (MUPL) technology to deliver esomeprazole in two separate release phases from a single once-daily tablet or capsule.',
      },
      {
        q: 'What conditions is Othera® used for?',
        a: 'Othera® is indicated for gastroesophageal reflux disease (GERD), erosive esophagitis, symptomatic acid reflux, and maintenance therapy. The IV formulation is used for conditions requiring parenteral acid suppression including upper GI bleeding prophylaxis.',
      },
    ],
  },
  {
    title: 'Why biphasic?',
    items: [
      {
        q: 'Why is biphasic release better than conventional PPI release?',
        a: 'Conventional PPIs release in a single pulse, meaning plasma levels fall after 8–10 hours. This leaves patients with nocturnal acid breakthrough — acid exposure during the night when healing and symptom control are most important. Othera®\'s second release phase covers this gap.',
      },
      {
        q: 'How is Othera® different from regular esomeprazole?',
        a: 'Both contain esomeprazole as the active ingredient. The difference is in the delivery system. Standard esomeprazole has a single enteric-coated release. Othera® has two populations of micro-pellets — one releasing immediately, one releasing 4–8 hours later — extending the duration of acid suppression.',
      },
    ],
  },
  {
    title: 'Dosing & use',
    items: [
      {
        q: 'When should Othera® be taken?',
        a: 'Othera® should generally be taken 30–60 minutes before the first meal of the day. This timing optimises the first-release phase for mealtime acid suppression and allows the second release phase to take effect during the overnight period.',
      },
      {
        q: 'Is there a capsule or tablet option?',
        a: 'Yes. Othera® is available as both tablets and capsules in 20 mg and 40 mg strengths. An intravenous 40 mg formulation is also available for hospital use. Discuss with your physician or pharmacist which form is most appropriate.',
      },
      {
        q: 'Which patients may benefit most from Othera®?',
        a: 'Patients with nocturnal GERD symptoms, those who have had inadequate response to standard once-daily PPIs, patients with erosive esophagitis requiring sustained acid suppression, and patients with frequent recurrence of reflux symptoms may derive the greatest clinical benefit from Othera®\'s extended biphasic coverage.',
      },
    ],
  },
];

export const gerdArticles = [
  { tag: 'Basics', title: 'What is GERD?', desc: 'Gastroesophageal reflux disease (GERD) is a chronic condition where stomach acid frequently flows back into the oesophagus, causing irritation and symptoms including heartburn, regurgitation, and chest discomfort.' },
  { tag: 'Triggers', title: 'Causes & triggers', desc: 'Common triggers include fatty foods, caffeine, alcohol, smoking, obesity, pregnancy, and delayed gastric emptying. Understanding personal triggers is important for symptom management.' },
  { tag: 'Nocturnal GERD', title: 'Night-time reflux', desc: 'Nocturnal acid breakthrough occurs when acid suppression weakens during sleep. It is associated with sleep disruption, incomplete mucosal healing, and risk of Barrett\'s oesophagus if untreated long-term.' },
  { tag: 'Lifestyle', title: 'Lifestyle measures', desc: 'Elevating the head of the bed, eating smaller meals, avoiding lying down after eating, weight management, and reducing alcohol and caffeine intake all reduce acid reflux frequency and severity.' },
  { tag: 'Treatment', title: 'PPI vs H2 blockers', desc: 'PPIs are more effective than H2 blockers for healing erosive oesophagitis and providing sustained acid suppression. H2 blockers act faster but have shorter duration and reduced efficacy with long-term use.' },
  { tag: 'When to see a doctor', title: 'When to seek medical advice', desc: 'Difficulty swallowing, unexplained weight loss, persistent symptoms despite treatment, or symptoms with bleeding require prompt medical evaluation. Do not self-medicate long-term without a diagnosis.' },
  { tag: 'Awareness', title: 'Myths & facts', desc: 'Common misconceptions: PPIs are not suitable for long-term use (false in appropriate patients), all reflux is due to too much acid (not always), antacids are sufficient for GERD (usually not).' },
  { tag: 'Diet', title: 'Diet for acid reflux', desc: 'Foods to limit include tomatoes, citrus, chocolate, mint, and spicy foods. A diet rich in vegetables, lean proteins, and non-citrus fruits helps minimise reflux frequency.' },
];

export const hcpResources = [
  { icon: '📋', title: 'Prescribing information', desc: 'Full product monograph including indications, dosing, contraindications, interactions, and pharmacokinetic data for all Othera® formulations.', btn: 'Download PDF' },
  { icon: '🎬', title: 'Mechanism animation', desc: 'Animated video explanation of the biphasic MUPL micro-pellet release mechanism for use in clinical discussion or patient education.', btn: 'Watch now' },
  { icon: '📊', title: 'Scientific summary', desc: 'Evidence overview, key study summaries, and pharmacodynamic data comparing Othera® to conventional esomeprazole on 24-hour pH control.', btn: 'Download' },
  { icon: '📄', title: 'Leave-behind PDF', desc: 'Concise one-page clinical summary suitable for detailing visits, summarising the biphasic mechanism and key differentiators vs standard PPIs.', btn: 'Download' },
  { icon: '💊', title: 'Dosing guide', desc: 'Quick-reference dosing card across all Othera® formulations — 20 mg and 40 mg tablets, capsules, and IV — with indication and administration notes.', btn: 'Download' },
  { icon: '✉️', title: 'Medical information query', desc: 'Submit a medical information or pharmacovigilance query to the ACI clinical team. Responses within 5 business days.', btn: 'Submit query', to: '/contact' },
];

export const whyBlocks = [
  {
    title: 'The nocturnal acid breakthrough problem',
    text: 'Standard PPIs suppress acid effectively during the day. But as plasma concentrations fall 8–10 hours after a morning dose, intragastric pH rises through the night — a phenomenon called nocturnal acid breakthrough, present in up to 70% of patients on conventional PPI therapy.',
  },
  {
    title: 'How MUPL technology works',
    text: 'Othera® contains two populations of micro-pellets in a single tablet. The first population dissolves immediately for rapid drug release. The second, coated population releases esomeprazole 4–8 hours later — precisely when conventional PPIs begin to lose efficacy.',
  },
  {
    title: 'The clinical result',
    text: 'The biphasic plasma profile extends the period of effective proton pump inhibition from approximately 10 hours with standard PPIs to 16+ hours with Othera® — covering both daytime symptoms and the critical overnight window.',
  },
];

export const barChartData = [
  { label: 'Othera® 40 — day', width: '92%', cls: 'bar-teal', val: '92%' },
  { label: 'Standard PPI — day', width: '85%', cls: 'bar-blue', val: '85%' },
  { label: 'Othera® 40 — night', width: '88%', cls: 'bar-teal', val: '88%', gap: true },
  { label: 'Standard PPI — night', width: '42%', cls: 'bar-gray', val: '42%' },
];

export const references = [
  'Bajaj JS et al. Nocturnal acid breakthrough: mechanisms and clinical significance in GERD patients on PPI therapy. Alimentary Pharmacology & Therapeutics.',
  'Miner P et al. Pharmacokinetic and pharmacodynamic effects of biphasic vs conventional esomeprazole release. Digestive Diseases and Sciences.',
  'Inadomi JM et al. Extended esomeprazole delivery and 24-hour pH control: a randomised crossover study. American Journal of Gastroenterology.',
];
