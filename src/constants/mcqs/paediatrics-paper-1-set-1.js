const PAEDIATRICS_PAPER_1_SET_1 = [
  {
    id: 1,
    statement: "Followings are true concerning with the pattern of growth",
    choices: [
      {
        answer: "Rate of growth is maximum in utero",
        answerKey: true,
        reason:
          "Fetal life → rapid cellular hyperplasia → highest growth rate compared to postnatal periods.",
      },
      {
        answer: "Growth of nervous system is most rapid between 2 to 5 years",
        answerKey: false,
        reason:
          "Neural tissue → maximal growth during intrauterine and first 2 years → not between 2–5 years.",
      },
      {
        answer: "Tonsils of an adult is bigger than a child of 10 years old",
        answerKey: false,
        reason:
          "Lymphoid tissue → physiological hypertrophy in childhood (around 5–10 years) → involutes in adulthood.",
      },
      {
        answer: "Rapid genital growth is seen at the onset of puberty",
        answerKey: true,
        reason:
          "Pubertal hormones (testosterone, estrogen) → stimulate rapid growth of genitalia at puberty onset.",
      },
      {
        answer:
          "Upper segment and lower segment ratio is highest in the newborn period",
        answerKey: true,
        reason:
          "Newborn → relatively short legs compared to trunk → higher US:LS ratio → decreases with age.",
      },
    ],
  },
  {
    id: 2,
    statement: "A normal 1-year-old child",
    choices: [
      {
        answer: "can stand without support",
        answerKey: false,
        reason:
          "At 1 year → pulls to stand and cruises holding furniture; independent standing usually after 12 months.",
      },
      {
        answer: "has good pincer grip",
        answerKey: true,
        reason: "Fine motor → by 9–12 months → develops mature pincer grasp.",
      },
      {
        answer: "can point to ear, nose and mouth",
        answerKey: false,
        reason:
          "Identification of body parts → appears around 18 months–2 years.",
      },
      {
        answer: "can play pat-a-cake",
        answerKey: true,
        reason:
          "Social/play milestone → pat-a-cake and peek-a-boo achieved around 9–12 months.",
      },
      {
        answer: "can turn to sound of name",
        answerKey: true,
        reason: "Language milestone → responds to name at around 9–12 months.",
      },
    ],
  },
  {
    id: 3,
    statement: "Causes of short stature include",
    choices: [
      {
        answer: "familial dwarfism",
        answerKey: true,
        reason:
          "Normal growth velocity but genetically short parents → familial short stature.",
      },
      {
        answer: "down syndrome",
        answerKey: true,
        reason: "Chromosomal disorder → associated with growth retardation.",
      },
      {
        answer: "congenital heart disease",
        answerKey: true,
        reason:
          "Chronic hypoxia + poor nutrition → impaired growth → short stature.",
      },
      {
        answer: "achondroplasia",
        answerKey: true,
        reason: "Genetic skeletal dysplasia → disproportionate short stature.",
      },
      {
        answer: "protein energy malnutrition",
        answerKey: true,
        reason: "Chronic undernutrition → ↓ linear growth → stunting.",
      },
    ],
  },
  {
    id: 4,
    statement: "Causes of mental retardation include",
    choices: [
      {
        answer: "cretinism",
        answerKey: true,
        reason:
          "Congenital hypothyroidism → brain development impaired → mental retardation.",
      },
      {
        answer: "down syndrome",
        answerKey: true,
        reason: "Trisomy 21 → intellectual disability common.",
      },
      {
        answer: "kernicterus",
        answerKey: true,
        reason:
          "Neonatal hyperbilirubinemia → bilirubin deposition in basal ganglia → mental retardation.",
      },
      {
        answer: "head injury",
        answerKey: true,
        reason:
          "Traumatic brain damage in early years → impaired cognitive development.",
      },
      {
        answer: "familial short stature",
        answerKey: false,
        reason:
          "Familial short stature → normal intelligence → no mental retardation.",
      },
    ],
  },
  {
    id: 5,
    statement: "Followings are the features of pathological jaundice",
    choices: [
      {
        answer: "Rate of rise of serum bilirubin is more than 5 mg/dl/hour",
        answerKey: false,
        reason: "Pathological if rise > 5 mg/dl per day, not per hour.",
      },
      {
        answer: "Clinical jaundice is detected within 24-48 hours of life",
        answerKey: true,
        reason: "Appearance within first 24 hrs → always pathological.",
      },
      {
        answer:
          "Total serum bilirubin elevation is more than 5 mg/dl in term infants",
        answerKey: false,
        reason:
          "Physiological jaundice can exceed 5 mg/dl; pathological if > 12–15 mg/dl in term.",
      },
      {
        answer: "Direct bilirubin more than 2 mg % of any time",
        answerKey: true,
        reason:
          "Conjugated hyperbilirubinemia (>2 mg/dl) → pathological (cholestasis, sepsis).",
      },
      {
        answer: "It peaks on 5th day and disappears by 7th day in term infants",
        answerKey: false,
        reason: "This describes physiological jaundice → not pathological.",
      },
    ],
  },
  {
    id: 6,
    statement: "Causes of prolonged neonatal jaundice are",
    choices: [
      {
        answer: "hypoglycaemia",
        answerKey: false,
        reason: "Hypoglycemia → may cause seizures but not prolonged jaundice.",
      },
      {
        answer: "physiological jaundice",
        answerKey: false,
        reason:
          "Physiological jaundice → resolves by 10–14 days in term infants.",
      },
      {
        answer: "biliary atresia",
        answerKey: true,
        reason:
          "Extrahepatic bile duct obstruction → conjugated hyperbilirubinemia → prolonged jaundice.",
      },
      {
        answer: "breast milk jaundice",
        answerKey: true,
        reason:
          "β-glucuronidase in breast milk → ↑ enterohepatic circulation → prolonged jaundice.",
      },
      {
        answer: "ABO incompatibility",
        answerKey: true,
        reason: "Hemolysis → persistent unconjugated hyperbilirubinemia.",
      },
    ],
  },
  {
    id: 7,
    statement: "The Apgar score",
    choices: [
      {
        answer: "is only measured in asphyxiated babies.",
        answerKey: false,
        reason:
          "Apgar → recorded for all babies to assess adaptation at birth.",
      },
      {
        answer: "is recorded at 1 minute and 5 minutes after delivery",
        answerKey: true,
        reason:
          "Standard practice → 1 min (initial adaptation) and 5 min (ongoing status).",
      },
      {
        answer: "is a reliable indication of future brain damage",
        answerKey: false,
        reason:
          "Apgar → reflects immediate condition, not long-term neurologic outcome.",
      },
      {
        answer: "records five different criteria",
        answerKey: true,
        reason:
          "5 components → Appearance, Pulse, Grimace, Activity, Respiration.",
      },
      {
        answer: "ranges from 0 – 10",
        answerKey: true,
        reason: "Each item scored 0–2 → total range 0–10.",
      },
    ],
  },
  {
    id: 8,
    statement: "Common complications of small for gestational age babies are",
    choices: [
      {
        answer: "pulmonary haemorrhage",
        answerKey: false,
        reason:
          "SGA → not specifically associated with pulmonary hemorrhage (more common in preterm RDS).",
      },
      {
        answer: "hypothermia",
        answerKey: true,
        reason:
          "SGA → ↓ fat stores + large surface area → prone to hypothermia.",
      },
      {
        answer: "meconium aspiration syndrome",
        answerKey: true,
        reason:
          "Chronic intrauterine hypoxia in SGA → meconium passage → aspiration risk.",
      },
      {
        answer: "hypoglycaemia",
        answerKey: true,
        reason: "SGA → limited glycogen and fat stores → hypoglycemia common.",
      },
      {
        answer: "hyaline membrane disease",
        answerKey: false,
        reason:
          "HMD → due to surfactant deficiency in preterm babies, not SGA.",
      },
    ],
  },
  {
    id: 9,
    statement: "WHO classification of Xerophthalmia",
    choices: [
      {
        answer: "XN – Night blindness",
        answerKey: true,
        reason: "Correct WHO code for night blindness.",
      },
      {
        answer: "XS – Corneal scar",
        answerKey: true,
        reason: "XS denotes corneal scarring due to vitamin A deficiency.",
      },
      {
        answer: "XIa – Bitot’s spot",
        answerKey: true,
        reason: "XIa = Bitot’s spots on conjunctiva.",
      },
      {
        answer: "X2 – Conjunctival xerosis",
        answerKey: false,
        reason: "X1A/X1B = conjunctival xerosis. X2 = corneal xerosis.",
      },
      {
        answer: "X3a – Corneal ulcer \\< 1/3 corneal surface",
        answerKey: true,
        reason: "WHO: X3a = corneal ulceration \\< 1/3 surface.",
      },
    ],
  },
  {
    id: 10,
    statement: "The followings are true about infantile Beri Beri",
    choices: [
      {
        answer:
          "Usually seen in breastfed babies of thiamine deficient mothers",
        answerKey: true,
        reason:
          "Maternal thiamine deficiency → breast milk deficient → infant develops beri beri.",
      },
      {
        answer: "Causes heart failure",
        answerKey: true,
        reason:
          "Thiamine deficiency → impaired ATP generation → cardiomyopathy → heart failure.",
      },
      {
        answer: "Reduced level of RBC transketolase is diagnostic",
        answerKey: true,
        reason:
          "Thiamine → cofactor for transketolase → low activity diagnostic.",
      },
      {
        answer: "Parenteral thiamine 5mg is diagnostic and therapeutic",
        answerKey: true,
        reason: "Rapid improvement after IV thiamine confirms diagnosis.",
      },
      {
        answer: "May present with meningitis like syndrome",
        answerKey: true,
        reason:
          "Infantile beri beri may mimic meningitis (irritability, seizures).",
      },
    ],
  },
  {
    id: 11,
    statement: "Characteristic features of Kwashiorkor are",
    choices: [
      {
        answer: "Weight for age 60% to 80%",
        answerKey: false,
        reason: "This describes moderate PEM; Kwashiorkor → usually \\< 60%.",
      },
      {
        answer: "Generalized oedema",
        answerKey: true,
        reason: "Hypoalbuminemia → ↓ oncotic pressure → generalized edema.",
      },
      {
        answer: "Normal MAC (mid-arm circumference)",
        answerKey: true,
        reason: "Kwashiorkor → edema masks wasting → MAC relatively preserved.",
      },
      {
        answer: "Mood changes",
        answerKey: true,
        reason: "Child becomes irritable, apathetic → classical sign.",
      },
      {
        answer: "Hepato-splenomegaly",
        answerKey: true,
        reason:
          "Fatty liver → hepatomegaly; splenomegaly from malnutrition/infections.",
      },
    ],
  },
  {
    id: 12,
    statement: "Mineral deficiency causes",
    choices: [
      {
        answer: "Fluorine – Rickets",
        answerKey: false,
        reason: "Fluoride excess → fluorosis; deficiency not cause of rickets.",
      },
      {
        answer: "Phosphorous – Caries",
        answerKey: false,
        reason:
          "Dental caries → linked to fluoride deficiency, not phosphorus.",
      },
      {
        answer: "Zinc – Anaemia",
        answerKey: true,
        reason: "Zinc deficiency → impairs hematopoiesis → anemia.",
      },
      {
        answer: "Iodine – Goitre",
        answerKey: true,
        reason: "Iodine deficiency → ↓ thyroid hormone synthesis → goitre.",
      },
      {
        answer: "Copper – Dwarfism",
        answerKey: false,
        reason: "Copper deficiency → anemia, neutropenia; not dwarfism.",
      },
    ],
  },
  {
    id: 13,
    statement: "The following conditions are inherited as autosomal recessive",
    choices: [
      {
        answer: "Thalassaemia",
        answerKey: true,
        reason: "Beta thalassemia → AR inheritance.",
      },
      {
        answer: "Haemophilia",
        answerKey: false,
        reason: "Hemophilia A/B → X-linked recessive.",
      },
      {
        answer: "Vitamin D resistant rickets",
        answerKey: false,
        reason: "Usually X-linked dominant.",
      },
      {
        answer: "Galactosaemia",
        answerKey: true,
        reason: "Enzyme defect → AR inheritance.",
      },
      {
        answer: "Achondroplasia",
        answerKey: false,
        reason: "Achondroplasia → autosomal dominant.",
      },
    ],
  },
  {
    id: 14,
    statement: "Characteristic features of Down’s syndrome include",
    choices: [
      {
        answer: "flat occiput",
        answerKey: true,
        reason: "Typical craniofacial feature of trisomy 21.",
      },
      {
        answer: "clinodactyly",
        answerKey: true,
        reason: "Curved fifth finger → common in Down’s syndrome.",
      },
      {
        answer: "increased risk of Hirschsprung’s disease",
        answerKey: true,
        reason: "Neurocristopathy association → increased Hirschsprung’s risk.",
      },
      {
        answer: "sensorineural deafness",
        answerKey: false,
        reason:
          "More prone to conductive hearing loss (otitis media) rather than SN deafness.",
      },
      {
        answer: "normal IQ",
        answerKey: false,
        reason: "Characteristic intellectual disability of varying severity.",
      },
    ],
  },
  {
    id: 15,
    statement: "Physical changes in adolescence",
    choices: [
      {
        answer: "Pubic hair develops",
        answerKey: true,
        reason: "Secondary sexual characteristic → appears at puberty.",
      },
      {
        answer: "Breast enlargement in girls",
        answerKey: true,
        reason: "Thelarche → first sign of puberty in girls.",
      },
      {
        answer: "Testicular enlargement in boys",
        answerKey: true,
        reason: "Testicular volume > 4 ml → first sign of puberty in boys.",
      },
      {
        answer: "Girls undergo menarche and become fertile",
        answerKey: true,
        reason:
          "Menarche → occurs late in puberty → indicates potential fertility.",
      },
      {
        answer: "Gynecomastia may develop in boys",
        answerKey: true,
        reason:
          "Transient pubertal gynecomastia → due to estrogen:testosterone imbalance.",
      },
    ],
  },
  {
    id: 16,
    statement: "In Dengue haemorrhagic fever",
    choices: [
      {
        answer: "incubation period is 2 to 3 weeks",
        answerKey: false,
        reason: "Dengue virus → incubation period 4–10 days → not 2–3 weeks.",
      },
      {
        answer:
          "leakage of plasma and thrombocytopenia occur before onset of shock",
        answerKey: true,
        reason:
          "Increased vascular permeability → plasma leakage + platelet destruction → precedes hypovolemic shock.",
      },
      {
        answer: "coagulopathy may occur",
        answerKey: true,
        reason:
          "Dengue → liver involvement + DIC → coagulopathy with bleeding tendencies.",
      },
      {
        answer: "serological tests are very useful in early diagnosis",
        answerKey: false,
        reason:
          "Serology (IgM/IgG) → positive after 5 days; early diagnosis by NS1 antigen or PCR.",
      },
      {
        answer: "there is no specific treatment",
        answerKey: true,
        reason:
          "No antiviral available → supportive therapy (fluids, platelets) mainstay.",
      },
    ],
  },
  {
    id: 17,
    statement: "Characteristic features of measles include",
    choices: [
      {
        answer: "prodromal illness of 14 to 21 days before the rash occurs",
        answerKey: false,
        reason:
          "Incubation 10–14 days; prodrome 2–4 days before rash, not 2–3 weeks.",
      },
      {
        answer: "conjunctivitis",
        answerKey: true,
        reason: "Measles triad → cough + coryza + conjunctivitis (3C’s).",
      },
      {
        answer: "petechial spots on the soft palate",
        answerKey: false,
        reason:
          "Koplik spots (bluish-white on buccal mucosa) → not petechiae on soft palate.",
      },
      {
        answer: "subsidence of fever when rashes first appear",
        answerKey: false,
        reason: "Fever continues with rash → subsides after 3–4 days of rash.",
      },
      {
        answer: "brownish staining and desquamation at convalescent stage",
        answerKey: true,
        reason:
          "Rash fades in order of appearance → leaves brown pigmentation + desquamation.",
      },
    ],
  },
  {
    id: 18,
    statement: "Regarding HIV infection in children",
    choices: [
      {
        answer: "it is caused by a DNA virus",
        answerKey: false,
        reason: "HIV → retrovirus → single-stranded RNA virus.",
      },
      {
        answer:
          "mother to child transmission can be prevented to a certain extent by the use of antiretroviral drugs",
        answerKey: true,
        reason:
          "ART in pregnancy + safe delivery + neonatal prophylaxis → reduces vertical transmission.",
      },
      {
        answer:
          "diagnosis is confirmed by serological tests in children under 18 months",
        answerKey: false,
        reason:
          "Maternal antibodies persist → PCR for HIV DNA/RNA used for infants \\<18 months.",
      },
      {
        answer:
          "co-trimoxazol is used to prevent Pneumocystis carinii pneumonia",
        answerKey: true,
        reason:
          "PCP prophylaxis with cotrimoxazole recommended for HIV-infected children.",
      },
      {
        answer:
          "Anti-retroviral therapy should be given to all patients at diagnosis",
        answerKey: true,
        reason:
          "WHO guideline → treat all HIV-infected children regardless of CD4 count.",
      },
    ],
  },
  {
    id: 19,
    statement: "Early manifestations of congenital syphilis consist of",
    choices: [
      {
        answer: "hepatosplenomegaly",
        answerKey: true,
        reason:
          "Treponema pallidum → disseminates to liver/spleen → organomegaly.",
      },
      {
        answer: "Hutchison’s teeth",
        answerKey: false,
        reason: "Hutchinson teeth → late congenital syphilis sign, not early.",
      },
      {
        answer: "saber shin",
        answerKey: false,
        reason: "Bony changes like saber shin → late manifestation.",
      },
      {
        answer: "washer woman’s hand",
        answerKey: false,
        reason: "Not a recognized feature of syphilis.",
      },
      {
        answer: "painful limbs",
        answerKey: true,
        reason:
          "Syphilitic periostitis → pseudoparalysis (Parrot’s pseudoparalysis) due to painful limbs.",
      },
    ],
  },
  {
    id: 20,
    statement: "Complications of ascariasis are",
    choices: [
      {
        answer: "pneumonia",
        answerKey: true,
        reason:
          "Larval migration → lungs → Löffler’s syndrome → eosinophilic pneumonia.",
      },
      {
        answer: "brain abscess",
        answerKey: false,
        reason: "Ascariasis → not associated with brain abscess.",
      },
      {
        answer: "appendicitis",
        answerKey: true,
        reason: "Worms may block appendix lumen → acute appendicitis.",
      },
      {
        answer: "intestinal obstruction",
        answerKey: true,
        reason:
          "Worm bolus → mechanical obstruction → common complication in children.",
      },
      {
        answer: "rectal prolapse",
        answerKey: true,
        reason:
          "Chronic infestation → straining + malnutrition → rectal prolapse.",
      },
    ],
  },
  {
    id: 21,
    statement: "Giardiasis",
    choices: [
      {
        answer: "may present with chronic persistent diarrhoea",
        answerKey: true,
        reason:
          "Giardia → causes foul-smelling chronic diarrhea due to malabsorption.",
      },
      {
        answer: "may complicate with failure to thrive",
        answerKey: true,
        reason: "Chronic diarrhea + malabsorption → impaired growth.",
      },
      {
        answer: "malabsorption may be present",
        answerKey: true,
        reason:
          "Giardia trophozoites adhere to mucosa → villous atrophy → malabsorption.",
      },
      {
        answer: "may associate with intestinal obstruction",
        answerKey: false,
        reason: "Giardia → does not cause mechanical obstruction.",
      },
      {
        answer: "may contain stools mixed with blood",
        answerKey: false,
        reason:
          "Giardia → watery/fatty stools, not bloody (seen in dysentery/colitis).",
      },
    ],
  },
  {
    id: 22,
    statement: "Drugs commonly used in cerebral malaria are",
    choices: [
      {
        answer: "chloroquine",
        answerKey: false,
        reason:
          "Most cerebral malaria due to P. falciparum → chloroquine resistant.",
      },
      {
        answer: "pyrexine",
        answerKey: false,
        reason: "Not an antimalarial drug.",
      },
      {
        answer: "artemether",
        answerKey: true,
        reason: "Artemisinin derivatives → effective against cerebral malaria.",
      },
      {
        answer: "quinine",
        answerKey: true,
        reason: "IV quinine → mainstay treatment in severe malaria.",
      },
      {
        answer: "mefloquine",
        answerKey: true,
        reason:
          "Mefloquine → effective for multidrug resistant falciparum malaria.",
      },
    ],
  },
  {
    id: 23,
    statement: "D/D of acute flaccid paralysis include",
    choices: [
      {
        answer: "paralytic polio",
        answerKey: true,
        reason:
          "Enterovirus (poliovirus) → destroys anterior horn cells → flaccid paralysis.",
      },
      {
        answer: "Guillain-Barre syndrome",
        answerKey: true,
        reason:
          "Immune-mediated demyelination → acute flaccid areflexic paralysis.",
      },
      {
        answer: "cerebral malaria",
        answerKey: false,
        reason: "Cerebral malaria → seizures/coma → not flaccid paralysis.",
      },
      {
        answer: "brain abscess",
        answerKey: false,
        reason:
          "Brain abscess → focal neurological deficit → spastic paralysis, not flaccid.",
      },
      {
        answer: "transverse myelitis",
        answerKey: true,
        reason:
          "Inflammation of spinal cord → acute flaccid weakness initially.",
      },
    ],
  },
  {
    id: 24,
    statement:
      "For successful exclusive breast feeding, the followings are necessary",
    choices: [
      {
        answer: "rooming in",
        answerKey: true,
        reason: "Keeping baby with mother → promotes bonding & breastfeeding.",
      },
      {
        answer: "demand feeding",
        answerKey: true,
        reason:
          "Feeding on demand → maintains milk production & infant satiety.",
      },
      {
        answer: "first feeding after 6 hours of delivery",
        answerKey: false,
        reason: "First feeding should be within 1 hour after birth.",
      },
      {
        answer: "usage of pacifier",
        answerKey: false,
        reason:
          "Pacifier use → nipple confusion → interferes with breastfeeding.",
      },
      {
        answer: "referral to support groups",
        answerKey: true,
        reason: "Support groups → encourage & sustain exclusive breastfeeding.",
      },
    ],
  },
  {
    id: 25,
    statement: "Activities for polio eradication for Myanmar consist of",
    choices: [
      {
        answer: "National Immunization Days",
        answerKey: true,
        reason: "Mass OPV campaigns → key strategy for eradication.",
      },
      {
        answer: "Mopping Up Immunization",
        answerKey: true,
        reason: "Intensive local campaigns in outbreak areas.",
      },
      {
        answer: "High routine immunization coverage",
        answerKey: true,
        reason: "Routine OPV coverage → essential for eradication.",
      },
      {
        answer: "Improvement of environmental sanitation",
        answerKey: true,
        reason:
          "Fecal-oral transmission reduced by sanitation → supports eradication.",
      },
      {
        answer: "AFP surveillance",
        answerKey: true,
        reason:
          "Acute flaccid paralysis surveillance → detects wild poliovirus circulation.",
      },
    ],
  },
  {
    id: 26,
    statement: "Live attenuated vaccines are",
    choices: [
      {
        answer: "oral polio vaccine",
        answerKey: true,
        reason: "OPV → live attenuated Sabin strain.",
      },
      {
        answer: "tetanus vaccine",
        answerKey: false,
        reason: "Tetanus toxoid → inactivated toxin, not live.",
      },
      {
        answer: "BCG vaccine",
        answerKey: true,
        reason: "BCG → live attenuated Mycobacterium bovis strain.",
      },
      {
        answer: "pertussis vaccine",
        answerKey: false,
        reason:
          "Pertussis vaccine → killed whole-cell or acellular, not live attenuated.",
      },
      {
        answer: "measles vaccine",
        answerKey: true,
        reason: "Measles → live attenuated Edmonston strain.",
      },
    ],
  },
  {
    id: 27,
    statement: "Prevention of accidental poisoning",
    choices: [
      {
        answer: "protection of the child",
        answerKey: true,
        reason: "Childproofing environment → prevents accidental ingestion.",
      },
      {
        answer: "education of parents about the hazard of household poisons",
        answerKey: true,
        reason: "Parental awareness → reduces exposure risks.",
      },
      {
        answer: "dangerous drugs should be stored in bottles with safety cap",
        answerKey: true,
        reason: "Child-resistant caps → reduce accidental ingestion.",
      },
      {
        answer: "legislation of food & drug law",
        answerKey: true,
        reason: "Strong regulation → minimizes poison availability.",
      },
      {
        answer: "clear labeling",
        answerKey: true,
        reason: "Proper labels → prevents accidental misuse.",
      },
    ],
  },
  {
    id: 28,
    statement: "In paracetamol poisoning",
    choices: [
      {
        answer: "daily prothombin time",
        answerKey: true,
        reason:
          "PT → marker of hepatic synthetic function → monitored in toxicity.",
      },
      {
        answer: "normal liver function",
        answerKey: false,
        reason: "Toxic dose → centrilobular necrosis → abnormal LFTs.",
      },
      {
        answer: "use of activated charcoal",
        answerKey: true,
        reason: "If given within 1–2 hours → prevents absorption.",
      },
      {
        answer: "ascorbic acid 200–500 mg daily oral dose",
        answerKey: false,
        reason: "Treatment of choice → N-acetylcysteine, not vitamin C.",
      },
      {
        answer: "exchange blood transfusion",
        answerKey: false,
        reason: "Not indicated in paracetamol poisoning.",
      },
    ],
  },
  {
    id: 29,
    statement: "Scabies in children",
    choices: [
      {
        answer: "is caused by an infestation with the mite Sarcoptes scabiei",
        answerKey: true,
        reason: "Scabies → caused by burrowing mite Sarcoptes scabiei.",
      },
      {
        answer:
          "severe itching occurs and is worse in warm condition and at night",
        answerKey: true,
        reason: "Hypersensitivity reaction → pruritus worse at night/warmth.",
      },
      {
        answer: "usually other members of family are also affected",
        answerKey: true,
        reason: "Highly contagious → spreads within households.",
      },
      {
        answer: "secondary bacterial infection is not common",
        answerKey: false,
        reason: "Scratching → common secondary impetigo/pyoderma.",
      },
      {
        answer: "it is spread by close bodily contact",
        answerKey: true,
        reason: "Transmission → skin-to-skin contact or fomites.",
      },
    ],
  },
  {
    id: 30,
    statement: "Scalded Skin Syndrome",
    choices: [
      {
        answer: "caused by exfoliative staphylococcal toxin",
        answerKey: true,
        reason:
          "S. aureus exotoxin → cleaves desmoglein-1 → epidermal separation.",
      },
      {
        answer: "it affects infant and young children",
        answerKey: true,
        reason:
          "Neonates/children more susceptible due to immature renal clearance of toxin.",
      },
      {
        answer: "Nikolsky’s sign positive",
        answerKey: true,
        reason: "Gentle pressure → epidermis separates easily.",
      },
      {
        answer: "injection Benzyl Penicillin is treatment of choice",
        answerKey: false,
        reason:
          "Treatment → IV anti-staphylococcal drugs (cloxacillin, vancomycin), not penicillin.",
      },
      {
        answer: "toxic shock syndrome may occur due to super antigen",
        answerKey: true,
        reason:
          "Certain S. aureus strains → superantigen production → toxic shock syndrome.",
      },
    ],
  },
];

export default PAEDIATRICS_PAPER_1_SET_1;
