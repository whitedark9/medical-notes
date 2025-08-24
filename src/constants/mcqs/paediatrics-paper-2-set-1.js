const PAEDIATRICS_PAPER_2_SET_1 = [
  {
    id: 31,
    statement:
      "The differential diagnosis of pansystolic murmur in lower left sternal edge:",
    choices: [
      {
        answer: "VSD",
        answerKey: true,
        reason:
          "VSD → left-to-right shunt → pansystolic murmur best heard at LLSE.",
      },
      {
        answer: "TI",
        answerKey: true,
        reason:
          "Tricuspid regurgitation → pansystolic murmur → LLSE, ↑ with inspiration.",
      },
      {
        answer: "MI(transmitted)",
        answerKey: true,
        reason: "MR murmur can transmit to LLSE, though primary site = apex.",
      },
      {
        answer: "Functional",
        answerKey: true,
        reason: "Functional murmurs may mimic pansystolic at LLSE.",
      },
      {
        answer: "PDA with pulmonary hypertension",
        answerKey: false,
        reason:
          "PDA → continuous murmur at left infraclavicular, not pansystolic LLSE.",
      },
    ],
  },
  {
    id: 32,
    statement: "Management of hypercyanotic spell includes:",
    choices: [
      {
        answer: "oxygen inhalation",
        answerKey: true,
        reason: "O₂ → improves hypoxemia during cyanotic spell.",
      },
      {
        answer: "morphine",
        answerKey: true,
        reason:
          "Morphine → calms child, ↓ catecholamine surge → ↓ infundibular spasm.",
      },
      {
        answer: "knee-chest position",
        answerKey: true,
        reason: "↑ SVR → ↓ right-to-left shunt across VSD → ↑ pulmonary flow.",
      },
      {
        answer: "propranolol",
        answerKey: true,
        reason: "β-blocker → relieves RVOT spasm → aborts cyanotic spell.",
      },
      {
        answer: "digoxin",
        answerKey: false,
        reason: "Digoxin contraindicated → may worsen infundibular spasm.",
      },
    ],
  },
  {
    id: 33,
    statement: "Acute Rheumatic Fever can present with:",
    choices: [
      {
        answer: "athetosis",
        answerKey: false,
        reason: "Chorea = rapid, purposeless → not athetosis (slow writhing).",
      },
      {
        answer: "fever",
        answerKey: true,
        reason: "Fever = minor Jones’ criterion.",
      },
      {
        answer: "arthritis in knee joint only",
        answerKey: false,
        reason: "ARF → migratory polyarthritis, not monoarthritis.",
      },
      {
        answer: "chest pain",
        answerKey: true,
        reason: "Carditis/pericarditis → chest pain.",
      },
      {
        answer: "serpenginous skin rash",
        answerKey: true,
        reason: "Erythema marginatum → typical ARF rash.",
      },
    ],
  },
  {
    id: 34,
    statement: "Management of heart failure includes",
    choices: [
      {
        answer: "preload regulation",
        answerKey: true,
        reason: "Diuretics → ↓ venous return → ↓ preload.",
      },
      {
        answer: "afterload reduction",
        answerKey: true,
        reason: "ACE inhibitors/vasodilators → ↓ afterload → ↑ CO.",
      },
      {
        answer: "improvement of cardiac contractility",
        answerKey: true,
        reason: "Inotropes (digoxin) → ↑ contractility in failure.",
      },
      {
        answer: "control of heart rate",
        answerKey: true,
        reason: "β-blockers, digoxin → prevent tachycardia-induced failure.",
      },
      {
        answer: "surgical treatment if indicated",
        answerKey: true,
        reason: "Correct structural lesion (e.g. VSD closure, valve surgery).",
      },
    ],
  },
  {
    id: 35,
    statement: "Infective endocarditis in children",
    choices: [
      {
        answer: "can present with heart failure",
        answerKey: true,
        reason: "Valve destruction → regurgitation → CHF.",
      },
      {
        answer: "can present with anaemia with hepatosplenomegaly",
        answerKey: true,
        reason: "Chronic infection → anemia + splenomegaly.",
      },
      {
        answer: "can present with neurological manifestation",
        answerKey: true,
        reason: "Septic emboli → stroke, seizures, hemiplegia.",
      },
      {
        answer: "Staph epidermidis is the commonest infecting organism",
        answerKey: false,
        reason:
          "Strep viridans commonest in children; Staph aureus in acute IE.",
      },
      {
        answer: "should treat with IV antibiotics for 10 days",
        answerKey: false,
        reason: "IV antibiotics needed for 4–6 weeks, not 10 days.",
      },
    ],
  },
  {
    id: 36,
    statement: "Characteristic features of febrile convulsion",
    choices: [
      {
        answer: "occur within 48 hours of onset of fever",
        answerKey: true,
        reason: "Typical febrile seizure within 24–48h of fever onset.",
      },
      {
        answer: "neurological deficit after fits",
        answerKey: false,
        reason: "Febrile convulsions are benign, no residual deficit.",
      },
      {
        answer: "last less than 15 minute",
        answerKey: true,
        reason: "Simple febrile seizure \\<15 min, generalized.",
      },
      {
        answer: "occasionally associated with viral infection",
        answerKey: true,
        reason: "Common in viral URTI, exanthemata.",
      },
      {
        answer: "generalized tonic clonic seizure",
        answerKey: true,
        reason: "Most febrile seizures = GTCS type.",
      },
    ],
  },
  {
    id: 37,
    statement:
      "Common causal organism of pyogenic meningitis in older children are",
    choices: [
      {
        answer: "Haemophilus influenzae",
        answerKey: true,
        reason: "H. influenzae type b → common in 6m–5y.",
      },
      {
        answer: "Pseudomonas spp",
        answerKey: false,
        reason: "Rare in healthy children, only in immunocompromised.",
      },
      {
        answer: "Neisseria meningitides",
        answerKey: true,
        reason: "N. meningitidis → common in older children/adolescents.",
      },
      {
        answer: "Group B streptococci",
        answerKey: false,
        reason: "Common in neonates, not older children.",
      },
      {
        answer: "Listeria monocytogenes",
        answerKey: false,
        reason: "Affects neonates/elderly, rare in older children.",
      },
    ],
  },
  {
    id: 38,
    statement: "Complications of tuberculous meningitis include",
    choices: [
      {
        answer: "hydrocephalus",
        answerKey: true,
        reason: "Basal exudates block CSF pathways → hydrocephalus.",
      },
      {
        answer: "motor paralysis",
        answerKey: true,
        reason: "Vasculitis + infarcts → hemiplegia/paralysis.",
      },
      {
        answer: "cranial nerve palsies",
        answerKey: true,
        reason: "Basal exudates → compress cranial nerves (III, VI common).",
      },
      {
        answer: "mental retardation",
        answerKey: true,
        reason: "Sequelae in survivors → cognitive impairment.",
      },
      {
        answer: "epilepsy",
        answerKey: true,
        reason: "Brain damage → focal/generalized seizures long term.",
      },
    ],
  },
  {
    id: 39,
    statement: "Preventable causes of cerebral palsy include",
    choices: [
      {
        answer: "congenital malformation of brain",
        answerKey: false,
        reason: "Structural anomaly not preventable.",
      },
      {
        answer: "congenital rubella syndrome",
        answerKey: true,
        reason: "Maternal vaccination prevents rubella → CP prevention.",
      },
      {
        answer: "prematurity",
        answerKey: true,
        reason:
          "Some prematurity complications preventable with good perinatal care.",
      },
      {
        answer: "birth asphyxia",
        answerKey: true,
        reason: "Preventable with safe obstetric/neonatal care.",
      },
      {
        answer: "kernicterus",
        answerKey: true,
        reason: "Preventable with early jaundice recognition/treatment.",
      },
    ],
  },
  {
    id: 40,
    statement: "Causes of coma in children",
    choices: [
      {
        answer: "cerebral palsy",
        answerKey: false,
        reason: "CP is static encephalopathy, not acute coma.",
      },
      {
        answer: "epilepsy",
        answerKey: false,
        reason:
          "Seizure disorder, not persistent coma (except status epilepticus).",
      },
      {
        answer: "microcephaly",
        answerKey: false,
        reason: "Chronic condition, not cause of coma.",
      },
      {
        answer: "lead poisoning",
        answerKey: true,
        reason: "Acute encephalopathy from lead → coma.",
      },
      {
        answer: "hypertensive encephalopathy",
        answerKey: true,
        reason: "Severe HTN → cerebral edema → coma.",
      },
    ],
  },
  {
    id: 41,
    statement:
      "Danger signs of very severe pneumonia for between 2 months and 5 years are",
    choices: [
      {
        answer: "not feeding well",
        answerKey: true,
        reason: "Inability to feed = WHO danger sign.",
      },
      {
        answer: "severe malnutrition",
        answerKey: false,
        reason: "Risk factor, but not a WHO-defined danger sign.",
      },
      {
        answer: "central cyanosis",
        answerKey: true,
        reason: "Indicates severe hypoxemia.",
      },
      {
        answer: "distended or tense abdomen",
        answerKey: false,
        reason: "Not a pneumonia-specific sign.",
      },
      {
        answer: "episodes of apnoea",
        answerKey: true,
        reason: "Marker of severe pneumonia/impending respiratory failure.",
      },
    ],
  },
  {
    id: 42,
    statement:
      "Common causal organisms for pneumonia under 2 months of age are",
    choices: [
      {
        answer: "Listeria monocytogenes",
        answerKey: true,
        reason: "Perinatal infection risk.",
      },
      {
        answer: "Group B Streptococcus",
        answerKey: true,
        reason: "Leading neonatal pneumonia pathogen.",
      },
      {
        answer: "Proteus spp",
        answerKey: false,
        reason: "Not common pneumonia cause in neonates.",
      },
      {
        answer: "Staphylococcus aureus",
        answerKey: true,
        reason: "Important cause in neonates.",
      },
      {
        answer: "Candida albicans",
        answerKey: false,
        reason: "Fungal pneumonia rare, mainly in immunocompromised.",
      },
    ],
  },
  {
    id: 43,
    statement: "Characteristic finding of acute bronchiolitis are",
    choices: [
      {
        answer: "tachypnoea",
        answerKey: true,
        reason: "Respiratory distress hallmark.",
      },
      {
        answer: "cyanosis",
        answerKey: true,
        reason: "Due to severe hypoxemia.",
      },
      {
        answer: "moist cough",
        answerKey: true,
        reason: "Common symptom of airway inflammation.",
      },
      {
        answer: "bradycardia",
        answerKey: false,
        reason: "Not a feature; tachycardia more common.",
      },
      {
        answer: "fine crackles",
        answerKey: true,
        reason: "Heard due to small airway involvement.",
      },
    ],
  },
  {
    id: 44,
    statement: "Common differential diagnosis of acute stridor is/are:",
    choices: [
      {
        answer: "laryngomalacia",
        answerKey: true,
        reason: "Most common cause of stridor in infants.",
      },
      {
        answer: "laryngeal diphtheria",
        answerKey: true,
        reason: "Pseudomembrane formation → stridor.",
      },
      {
        answer: "laryngeal web",
        answerKey: true,
        reason: "Congenital membrane → upper airway obstruction.",
      },
      {
        answer: "retropharyngeal abscess",
        answerKey: true,
        reason: "Mass effect → acute stridor.",
      },
      {
        answer: "vascular ring",
        answerKey: true,
        reason: "Congenital vascular anomaly compressing airway.",
      },
    ],
  },
  {
    id: 45,
    statement: "Signs of life threatening asthma are:",
    choices: [
      {
        answer: "tachycardia",
        answerKey: true,
        reason: "Sympathetic overdrive in severe attack.",
      },
      {
        answer: "pulsus paradoxus",
        answerKey: true,
        reason: "Severe asthma → marked inspiratory fall in systolic BP.",
      },
      {
        answer: "cyanosis",
        answerKey: true,
        reason: "Late sign of severe hypoxemia.",
      },
      {
        answer: "fatigue or exhaustion",
        answerKey: true,
        reason: "Respiratory muscle fatigue → impending failure.",
      },
      {
        answer: "severe chest indrawing",
        answerKey: true,
        reason: "Marker of severe airflow obstruction.",
      },
    ],
  },
  {
    id: 46,
    statement: "Complications of acute watery diarrhoea",
    choices: [
      {
        answer: "malnutrition",
        answerKey: true,
        reason:
          "Repeated diarrhoea → nutrient loss + anorexia → protein-energy malnutrition.",
      },
      {
        answer: "hyperkalaemia",
        answerKey: false,
        reason: "Diarrhoea → potassium loss → hypokalaemia, not hyperkalaemia.",
      },
      {
        answer: "hypotonic dehydration",
        answerKey: true,
        reason: "Na⁺ loss > water loss → hypotonic dehydration.",
      },
      {
        answer: "hypertonic dehydration",
        answerKey: true,
        reason:
          "Water loss > Na⁺ loss (e.g. watery stools + poor intake) → hypernatremic dehydration.",
      },
      {
        answer: "hyperglycaemia",
        answerKey: false,
        reason:
          "Diarrhoea does not cause hyperglycemia; may cause hypoglycemia due to poor intake.",
      },
    ],
  },
  {
    id: 47,
    statement: "Clinical features of dysentery are",
    choices: [
      {
        answer: "Passing of diarrhoea with visible blood in the stool",
        answerKey: true,
        reason:
          "Invasive pathogens (Shigella, Entamoeba) → colonic ulceration → blood/mucus in stool.",
      },
      {
        answer: "Fever with abdominal cramps",
        answerKey: true,
        reason: "Mucosal inflammation → systemic fever + colicky pain.",
      },
      {
        answer: "Cold and clammy extremities",
        answerKey: false,
        reason: "Shock sign, not specific dysentery feature.",
      },
      {
        answer: "Eagerly drink",
        answerKey: false,
        reason: "Seen in dehydration of acute watery diarrhoea, not dysentery.",
      },
      {
        answer: "Always present with convulsion",
        answerKey: false,
        reason:
          "Convulsions rare (may occur in Shigella due to neurotoxin), not always.",
      },
    ],
  },
  {
    id: 48,
    statement: "The following are risk factors of persistent diarrhoea",
    choices: [
      {
        answer: "young age less than 18 months",
        answerKey: true,
        reason:
          "Immature immunity + high risk of enteropathy → persistent diarrhoea.",
      },
      {
        answer: "a child with severe dehydration",
        answerKey: true,
        reason: "Severe dehydration → gut mucosal damage → prolonged illness.",
      },
      {
        answer: "reintroduction of animal milk or formula milk",
        answerKey: true,
        reason: "Lactose intolerance after infection → prolongs diarrhoea.",
      },
      {
        answer: "a child with TB or HIV infection",
        answerKey: true,
        reason:
          "Immunodeficiency → impaired clearance of infection → persistence.",
      },
      {
        answer: "well nourished child",
        answerKey: false,
        reason:
          "Well-nourished children recover quickly; malnutrition predisposes persistence.",
      },
    ],
  },
  {
    id: 49,
    statement: "Diarrhoea can be prevented by",
    choices: [
      {
        answer: "exclusive breast feeding practice",
        answerKey: true,
        reason:
          "Exclusive BF → antibodies + no contaminated food exposure → ↓ diarrhoea.",
      },
      {
        answer: "weaning practice should begin at 6 months",
        answerKey: true,
        reason: "Too early weaning ↑ infection risk; too late → malnutrition.",
      },
      {
        answer: "measles immunization",
        answerKey: true,
        reason: "Measles predisposes to diarrhoea → immunization prevents it.",
      },
      {
        answer: "use of appropriate antimicrobial agents",
        answerKey: false,
        reason: "Not preventive; antimicrobials used only in selective cases.",
      },
      {
        answer: "use of multivitamin syrup",
        answerKey: false,
        reason: "No role in prevention of diarrhoea.",
      },
    ],
  },
  {
    id: 50,
    statement: "Following infections can be transmitted by fecal oral route:",
    choices: [
      {
        answer: "Hepatitis A virus",
        answerKey: true,
        reason: "HAV → fecal-oral spread (contaminated water/food).",
      },
      {
        answer: "Hepatitis B virus",
        answerKey: false,
        reason: "HBV → parenteral, sexual, perinatal transmission.",
      },
      {
        answer: "Hepatitis C virus",
        answerKey: false,
        reason: "HCV → bloodborne, not fecal-oral.",
      },
      {
        answer: "Hepatitis D virus",
        answerKey: false,
        reason: "HDV requires HBV; transmitted parenterally.",
      },
      {
        answer: "Hepatitis E virus",
        answerKey: true,
        reason: "HEV → waterborne, fecal-oral route.",
      },
    ],
  },
  {
    id: 51,
    statement: "Idiopathic (immune) thrombocytopenic purpura:",
    choices: [
      {
        answer: "results from decreased platelet production",
        answerKey: false,
        reason: "ITP = ↑ immune-mediated destruction, not ↓ production.",
      },
      {
        answer: "classically presents with disproportionate pallor",
        answerKey: false,
        reason: "Pallor not typical; bleeding (petechiae, purpura) dominates.",
      },
      {
        answer:
          "usually requires urgent treatment to prevent intracranial haemorrhage",
        answerKey: false,
        reason: "Most cases self-limiting; urgent Rx only if severe bleeding.",
      },
      {
        answer:
          "should be confirmed by marrow aspirate if there is no response to steroids",
        answerKey: true,
        reason:
          "Bone marrow exam excludes leukemia/aplastic anemia in non-responders.",
      },
      {
        answer: "usually preceded by a viral infection",
        answerKey: true,
        reason: "ITP often post-viral due to immune dysregulation.",
      },
    ],
  },
  {
    id: 52,
    statement: "The clinical picture of beta thalassaemia major:",
    choices: [
      {
        answer: "presents at birth with hepatosplenomegaly",
        answerKey: false,
        reason: "Symptoms appear after 6 months when HbF declines.",
      },
      {
        answer: "characterized by iron deficiency anaemia during infancy",
        answerKey: false,
        reason:
          "Anaemia due to ineffective erythropoiesis, not iron deficiency.",
      },
      {
        answer: "may initially present as failure to thrive",
        answerKey: true,
        reason: "Severe anaemia → poor growth, feeding difficulty.",
      },
      {
        answer: "includes pubertal delay",
        answerKey: true,
        reason:
          "Chronic anaemia + iron overload → hypogonadism → delayed puberty.",
      },
      {
        answer: "markedly raised Hb F on electrophoresis",
        answerKey: true,
        reason: "Characteristic feature of β-thal major = ↑ HbF, ↑ HbA₂.",
      },
    ],
  },
  {
    id: 53,
    statement: "Haemophilia A:",
    choices: [
      {
        answer: "is the commonest cause of bleeding in children",
        answerKey: false,
        reason:
          "ITP is commoner; haemophilia A is the commonest inherited coagulation disorder.",
      },
      {
        answer: "inheritance is autosomal dominant with variable penetrance",
        answerKey: false,
        reason: "X-linked recessive inheritance.",
      },
      {
        answer: "severity is determined by the level of factor VIIIc",
        answerKey: true,
        reason:
          "Factor VIII activity levels → mild, moderate, severe haemophilia.",
      },
      {
        answer: "is treated with factor VIII given intramuscularly",
        answerKey: false,
        reason:
          "Factor VIII given IV; IM injections contraindicated (risk hematoma).",
      },
      {
        answer: "prophylactic factor VIII therapy can be used",
        answerKey: true,
        reason: "Regular prophylaxis prevents joint bleeds and complications.",
      },
    ],
  },
  {
    id: 54,
    statement: "Presenting features of acute lymphoblastic leukaemia include:",
    choices: [
      {
        answer: "fever without a focus",
        answerKey: true,
        reason: "Bone marrow failure + infection → fever.",
      },
      {
        answer: "disproportionate pallor",
        answerKey: true,
        reason: "Severe anaemia out of proportion to other signs.",
      },
      {
        answer: "gum bleeding",
        answerKey: true,
        reason: "Thrombocytopenia → mucosal bleeding.",
      },
      {
        answer: "Limb pains",
        answerKey: true,
        reason: "Marrow expansion → bone pain.",
      },
      {
        answer: "Jaundice",
        answerKey: false,
        reason:
          "Not typical; occurs only if haemolysis/liver infiltration present.",
      },
    ],
  },
  {
    id: 55,
    statement: "Regarding management of Hypoplastic anaemia:",
    choices: [
      {
        answer: "replacement therapy is required to correct anaemia",
        answerKey: true,
        reason: "Transfusion for symptomatic anaemia.",
      },
      {
        answer: "platelet transfusion may be indicated",
        answerKey: true,
        reason: "Severe thrombocytopenia → bleeding risk → platelet support.",
      },
      {
        answer:
          "oral broad spectrum antibiotics should be used in neutropenic fever",
        answerKey: false,
        reason:
          "IV broad spectrum antibiotics are mandatory, oral not sufficient.",
      },
      {
        answer: "Bone marrow transplant has 100% cure rate",
        answerKey: false,
        reason: "BMT = only curative therapy but not 100% success (70–80%).",
      },
      {
        answer: "Steroid as a single agent is very useful",
        answerKey: false,
        reason: "Steroids not effective in aplastic/hypoplastic anaemia.",
      },
    ],
  },
  {
    id: 56,
    statement: "Diagnostic criteria for nephrotic syndrome are",
    choices: [
      {
        answer: "massive proteinuria",
        answerKey: true,
        reason: "≥40 mg/m²/hr or urine protein/Cr >2.",
      },
      {
        answer: "generalize oedema",
        answerKey: true,
        reason: "Hypoalbuminemia → ↓ oncotic pressure → edema.",
      },
      {
        answer: "oliguria",
        answerKey: false,
        reason: "Not diagnostic; may occur but not essential.",
      },
      {
        answer: "hypercholesterolaemia",
        answerKey: true,
        reason: "Liver compensates for hypoproteinemia → ↑ lipid synthesis.",
      },
      {
        answer: "Hypoproteinaemia",
        answerKey: true,
        reason: "Serum albumin \\<2.5 g/dl diagnostic feature.",
      },
    ],
  },
  {
    id: 57,
    statement: "Complications of AGN are",
    choices: [
      {
        answer: "Chronic renal failure",
        answerKey: true,
        reason: "Progressive glomerular damage may lead to CRF.",
      },
      {
        answer: "Anaemic heart failure",
        answerKey: false,
        reason: "Heart failure due to HTN/volume overload, not anaemia.",
      },
      {
        answer: "Hypertensive encephalopathy",
        answerKey: true,
        reason: "Severe HTN → cerebral edema → seizures, coma.",
      },
      {
        answer: "Haemolytic uremic syndrome",
        answerKey: false,
        reason: "HUS is separate entity, not AGN complication.",
      },
      {
        answer: "Epilepsy",
        answerKey: false,
        reason:
          "Seizures in AGN are acute (encephalopathy), not chronic epilepsy.",
      },
    ],
  },
  {
    id: 58,
    statement:
      "The following investigations should be done in children with recurrent UTI",
    choices: [
      {
        answer: "ultrasound abdomen",
        answerKey: true,
        reason: "Detects anomalies, hydronephrosis.",
      },
      {
        answer: "IVP (intravenous urogram)",
        answerKey: false,
        reason: "Rarely used now, replaced by USG/MCUG/DMSA.",
      },
      {
        answer: "DMSA (dimercaptosuccinic acid)",
        answerKey: true,
        reason: "Detects renal scarring.",
      },
      {
        answer: "plain X-ray abdomen",
        answerKey: false,
        reason: "Low yield for UTI evaluation.",
      },
      {
        answer: "MCUG (micturition cystourethrogram)",
        answerKey: true,
        reason: "Detects VUR, bladder outlet obstruction.",
      },
    ],
  },
  {
    id: 59,
    statement: "Features of cretinism include",
    choices: [
      {
        answer: "feeding difficulties",
        answerKey: true,
        reason: "Hypothyroidism → lethargy, poor feeding.",
      },
      {
        answer: "advanced bone age",
        answerKey: false,
        reason: "Delayed bone age is typical, not advanced.",
      },
      {
        answer: "short stature",
        answerKey: true,
        reason: "Chronic hypothyroidism → growth retardation.",
      },
      {
        answer: "early closure of anterior fontanelle",
        answerKey: false,
        reason: "Delayed closure is seen, not early.",
      },
      {
        answer: "constipation",
        answerKey: true,
        reason: "Hypothyroidism → ↓ gut motility → constipation.",
      },
    ],
  },
  {
    id: 60,
    statement:
      "Minor criteria (Jones’ criteria) for diagnosis of Rheumatic fever are",
    choices: [
      {
        answer: "previous history of rheumatic fever",
        answerKey: false,
        reason: "Not part of Jones’ criteria, but risk factor.",
      },
      {
        answer: "arthralgia",
        answerKey: true,
        reason: "Included as minor criterion.",
      },
      {
        answer: "increased CRP",
        answerKey: true,
        reason: "Raised acute phase reactants = minor criterion.",
      },
      {
        answer: "tachycardia",
        answerKey: true,
        reason: "Out of proportion to fever = minor criterion.",
      },
      {
        answer: "raised ASO titre",
        answerKey: false,
        reason:
          "Evidence of strep infection, not part of major/minor Jones’ criteria.",
      },
    ],
  },
];

export default PAEDIATRICS_PAPER_2_SET_1;
