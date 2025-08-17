const MEDICINE_UMM_PAPER_1 = [
  {
    id: 1,
    statement: "Causes of sudden cardiac death include",
    choices: [
      {
        answer: "coronary artery disease",
        answerKey: true,
        reason:
          "Atherosclerotic plaque → rupture → coronary thrombosis → acute ischemia → ventricular tachycardia/fibrillation → sudden death.",
      },
      {
        answer: "hypertrophic cardiomyopathy",
        answerKey: true,
        reason:
          "Sarcomeric gene mutation → hypertrophied disorganized myocytes → diastolic dysfunction + ischemia → ventricular arrhythmia → sudden death (esp. in athletes).",
      },
      {
        answer: "mitral stenosis",
        answerKey: false,
        reason:
          "Rheumatic scarring → narrowed mitral orifice → ↑ LA pressure → pulmonary hypertension → right heart failure. Death is chronic/progressive, not sudden.",
      },
      {
        answer: "myocarditis",
        answerKey: true,
        reason:
          "Infection/inflammation → myocyte necrosis + edema → electrical instability → ventricular tachycardia/fibrillation OR pump failure → sudden death.",
      },
      {
        answer: "pericarditis",
        answerKey: false,
        reason:
          "Inflammation → pericardial pain ± effusion → tamponade possible but uncommon. Sudden death is rare compared to arrhythmias/myocarditis.",
      },
    ],
  },
  {
    id: 2,
    statement: "Regarding dilated cardiomyopathy",
    choices: [
      {
        answer: "arrhythmia may occur at any stage",
        answerKey: true,
        reason:
          "Ventricular dilation → myocardial stretch + fibrosis → conduction pathway distortion → ectopic activity → arrhythmias (AF, VT, VF) anytime.",
      },
      {
        answer: "alcohol may be one of the causes",
        answerKey: true,
        reason:
          "Chronic alcohol → direct cardiotoxicity + thiamine deficiency → myocyte degeneration → ventricular dilation → DCM.",
      },
      {
        answer: "HIV is one of the risk factors for this condition",
        answerKey: true,
        reason:
          "HIV infection → myocarditis (direct viral + opportunistic infections) → progressive damage → ventricular dilation → systolic dysfunction.",
      },
      {
        answer: "most cases are due to autosomal recessive trait",
        answerKey: false,
        reason:
          "Familial DCM → mostly autosomal dominant mutations (e.g., titin, dystrophin). Autosomal recessive inheritance is rare.",
      },
      {
        answer: "thromboembolism may occur",
        answerKey: true,
        reason:
          "Dilated chambers → sluggish flow + mural thrombus → embolization → systemic (stroke) or pulmonary embolism.",
      },
    ],
  },
  {
    id: 3,
    statement: "The following are true about atrial septal defect",
    choices: [
      {
        answer: "associated with Marfan’s syndrome",
        answerKey: false,
        reason:
          "Marfan’s → fibrillin-1 defect → aortic root dilatation, MVP. ASD more linked with Holt-Oram syndrome, not Marfan’s.",
      },
      {
        answer: "aortic regurgitation can occur",
        answerKey: false,
        reason:
          "ASD → left-to-right shunt → RV/RA overload. AR usually arises from aortic root disease or VSD, not ASD.",
      },
      {
        answer: "common in males",
        answerKey: false,
        reason: "ASD (esp. secundum type) → 2:1 female predominance.",
      },
      {
        answer: "systolic murmur can be heard",
        answerKey: true,
        reason:
          "ASD → ↑ pulmonary flow → turbulence across pulmonary valve → ejection systolic murmur (L upper sternal border).",
      },
      {
        answer: "wide and fixed splitting of the second heart sound can occur",
        answerKey: true,
        reason:
          "Constant left-to-right shunt → RV always overloaded → delayed P2 → wide, fixed split S2 regardless of respiration.",
      },
    ],
  },
  {
    id: 4,
    statement: "Causes of left bundle branch block include",
    choices: [
      {
        answer: "aortic valve disease",
        answerKey: true,
        reason:
          "Chronic AS/AR → LV hypertrophy + fibrosis → conduction system involvement → LBBB.",
      },
      {
        answer: "atrial septal defect",
        answerKey: false,
        reason:
          "ASD → right-sided overload → commonly associated with RBBB, not LBBB.",
      },
      {
        answer: "cardiomyopathy",
        answerKey: true,
        reason:
          "Dilated or hypertrophic cardiomyopathy → LV dilation/fibrosis → bundle damage → LBBB.",
      },
      {
        answer: "coronary artery disease",
        answerKey: true,
        reason:
          "Ischemia/MI involving interventricular septum → necrosis of conduction tissue → LBBB.",
      },
      {
        answer: "normal variant",
        answerKey: false,
        reason:
          "LBBB is almost always pathological; unlike RBBB which may be benign.",
      },
    ],
  },
  {
    id: 5,
    statement: "Clinical features of aortic stenosis include",
    choices: [
      {
        answer: "angina",
        answerKey: true,
        reason:
          "LV hypertrophy → ↑ O2 demand + ↓ coronary perfusion (due to prolonged systole) → angina.",
      },
      {
        answer: "exertional syncope",
        answerKey: true,
        reason:
          "Fixed LV outflow obstruction → cardiac output fails to rise on exertion → cerebral hypoperfusion → syncope.",
      },
      {
        answer: "early diastolic murmur",
        answerKey: false,
        reason:
          "AS → ejection systolic murmur. Early diastolic murmur is typical of AR.",
      },
      {
        answer: "thrusting apex beat",
        answerKey: false,
        reason:
          "AS → sustained/heaving apex beat (pressure overload). Thrusting is volume overload (AR).",
      },
      {
        answer: "wide pulse pressure",
        answerKey: false,
        reason:
          "AS → narrow pulse pressure (low systolic rise). Wide pulse pressure = AR.",
      },
    ],
  },
  {
    id: 6,
    statement: "Causes of myocarditis include",
    choices: [
      {
        answer: "Adenovirus",
        answerKey: true,
        reason:
          "Viral infection (adenovirus) → direct myocyte injury + immune response → myocarditis.",
      },
      {
        answer: "Coxsackie virus",
        answerKey: true,
        reason:
          "Coxsackie B virus = most common cause → direct cytotoxicity + immune-mediated necrosis → myocarditis.",
      },
      {
        answer: "Lyme disease",
        answerKey: true,
        reason:
          "Borrelia infection → spirochete invasion of myocardium → myocarditis, AV block.",
      },
      {
        answer: "Staphylococcal infection",
        answerKey: true,
        reason:
          "Sepsis/endocarditis → bacterial toxins invade myocardium → suppurative/bacterial myocarditis.",
      },
      {
        answer: "Streptococcal infection",
        answerKey: true,
        reason:
          "Strep → post-strep immune response (rheumatic carditis) → pancarditis including myocarditis.",
      },
    ],
  },
  {
    id: 7,
    statement:
      "The following are common clinical presentations of constrictive pericarditis",
    choices: [
      {
        answer: "ascites",
        answerKey: true,
        reason:
          "Rigid pericardium → impaired RV filling → systemic venous congestion → ascites.",
      },
      {
        answer: "atrial fibrillation",
        answerKey: true,
        reason:
          "Chronic atrial stretch due to high filling pressures → atrial arrhythmias (AF).",
      },
      {
        answer: "Kussmaul’s sign",
        answerKey: true,
        reason:
          "Inspiration → impaired RV filling (rigid pericardium) → paradoxical rise in JVP = Kussmaul’s sign.",
      },
      {
        answer: "pulsus bigeminy",
        answerKey: false,
        reason:
          "Pulsus bigeminy = ventricular ectopy, not typical of constrictive pericarditis.",
      },
      {
        answer: "sudden cardiac death",
        answerKey: false,
        reason:
          "Course is chronic; death occurs from chronic failure, not sudden arrhythmia.",
      },
    ],
  },
  {
    id: 8,
    statement: "Regarding aortic dissection",
    choices: [
      {
        answer: "associated with Marfan’s syndrome",
        answerKey: true,
        reason:
          "Marfan’s → fibrillin-1 defect → cystic medial necrosis → weakened aortic wall → dissection risk.",
      },
      {
        answer: "aortic regurgitation can occur",
        answerKey: true,
        reason: "Dissection into aortic root → valve ring distortion → AR.",
      },
      {
        answer: "imaging by CT angiogram is the investigation of choice",
        answerKey: true,
        reason:
          "CT angiogram → rapid, sensitive, shows intimal flap & extent → gold standard (stable pts).",
      },
      {
        answer: "systolic murmur can be heard",
        answerKey: false,
        reason: "AR murmur (from dissection) is early diastolic, not systolic.",
      },
      {
        answer: "type B dissection usually require emergency surgery",
        answerKey: false,
        reason:
          "Stanford B (distal to L subclavian) → usually managed medically unless rupture/ischemia.",
      },
    ],
  },
  {
    id: 9,
    statement: "Causes of atrial fibrillation include",
    choices: [
      {
        answer: "alcoholism",
        answerKey: true,
        reason:
          "Acute binge (‘holiday heart’) → direct atrial irritability → AF.",
      },
      {
        answer: "chest infection",
        answerKey: true,
        reason: "Hypoxia + catecholamine surge → atrial ectopy → AF.",
      },
      {
        answer: "ischemic heart disease",
        answerKey: true,
        reason:
          "Ischemic injury → atrial scar + dilatation → reentrant circuits → AF.",
      },
      {
        answer: "hypertension",
        answerKey: true,
        reason: "Chronic HTN → LVH → ↑ LA pressure/dilatation → AF.",
      },
      {
        answer: "rheumatic heart disease",
        answerKey: true,
        reason: "Mitral stenosis → ↑ LA pressure → atrial dilatation → AF.",
      },
    ],
  },
  {
    id: 10,
    statement: "Regarding mitral stenosis",
    choices: [
      {
        answer: "almost always rheumatic in origin",
        answerKey: true,
        reason:
          "Post-rheumatic fever scarring accounts for most adult MS cases.",
      },
      {
        answer: "opening snap is loudest when the valve is calcified",
        answerKey: false,
        reason:
          "Snap = sudden halt of leaflet opening → louder when valve is pliable. Calcification reduces snap.",
      },
      {
        answer: "physical signs are commonly found after the onset of symptoms",
        answerKey: false,
        reason: "Murmur often detected before symptoms (latent phase).",
      },
      {
        answer: "thrusting apex beat can be felt",
        answerKey: false,
        reason: "MS → tapping apex (loud S1), not thrusting (seen in AR).",
      },
      {
        answer: "slow rising pulse can be felt",
        answerKey: false,
        reason: "Slow-rising pulse = AS, not MS.",
      },
    ],
  },
  {
    id: 11,
    statement: "Differential diagnosis of massive splenomegaly include",
    choices: [
      {
        answer: "chronic ITP",
        answerKey: false,
        reason:
          "ITP → immune platelet destruction. Spleen size usually normal/mildly enlarged, not massive.",
      },
      {
        answer: "chronic myeloid leukemia",
        answerKey: true,
        reason:
          "Myeloproliferation → extramedullary hematopoiesis → massive splenomegaly.",
      },
      {
        answer: "Hodgkin’s lymphoma",
        answerKey: true,
        reason:
          "Lymphoid infiltration of spleen → massive enlargement in advanced stages.",
      },
      {
        answer: "iron deficiency anaemia",
        answerKey: false,
        reason: "IDA → microcytosis, pallor. Splenomegaly is not typical.",
      },
      {
        answer: "thalassaemia minor",
        answerKey: false,
        reason:
          "Thalassemia major → massive splenomegaly (extramedullary hematopoiesis). Minor = usually asymptomatic.",
      },
    ],
  },
  {
    id: 12,
    statement: "Regarding multiple myeloma",
    choices: [
      {
        answer: "amyloidosis can occur",
        answerKey: true,
        reason:
          "Excess light chains → amyloid deposition → systemic amyloidosis.",
      },
      {
        answer: "can be presented with carpal tunnel syndrome",
        answerKey: true,
        reason:
          "Amyloid deposition in flexor retinaculum → compress median nerve → carpal tunnel.",
      },
      {
        answer: "renal impairment can be seen",
        answerKey: true,
        reason:
          "Light chain cast nephropathy + hypercalcemia → chronic kidney disease.",
      },
      {
        answer: "occurs commonly in young adults",
        answerKey: false,
        reason: "Typically >60 yrs, very rare in young adults.",
      },
      {
        answer: "serum beta-2 microglobulin level may correlate with prognosis",
        answerKey: true,
        reason:
          "↑ β2-microglobulin = tumor burden & renal impairment → worse prognosis.",
      },
    ],
  },
  {
    id: 13,
    statement: "Causes of auto-immune hemolytic anemia include:",
    choices: [
      {
        answer: "DIC",
        answerKey: false,
        reason:
          "DIC → fibrin strands shear RBC (microangiopathic). Not immune mediated.",
      },
      {
        answer: "G6PD-deficiency",
        answerKey: false,
        reason:
          "Oxidative stress → hemolysis. Mechanism is enzymatic deficiency, not antibodies.",
      },
      {
        answer: "idiopathic",
        answerKey: true,
        reason:
          "Autoantibodies against RBC (warm/cold type) without clear trigger → idiopathic AIHA.",
      },
      {
        answer: "myeloplasma infection",
        answerKey: true,
        reason:
          "Mycoplasma pneumoniae → cold agglutinin IgM autoantibodies → complement-mediated hemolysis.",
      },
      {
        answer: "systemic lupus erythematosus",
        answerKey: true,
        reason:
          "SLE → autoantibody formation (IgG warm type) → opsonization of RBC → splenic destruction.",
      },
    ],
  },
  {
    id: 14,
    statement: "Acquired coagulation disorders include:",
    choices: [
      {
        answer: "Ehlers-Danlos syndrome",
        answerKey: false,
        reason:
          "Connective tissue defect → vascular fragility → bleeding, not a clotting factor defect.",
      },
      {
        answer: "hemophilia",
        answerKey: false,
        reason:
          "Inherited factor VIII/IX deficiency → congenital, not acquired.",
      },
      {
        answer: "liver disease",
        answerKey: true,
        reason:
          "Liver → site of clotting factor synthesis. Cirrhosis → ↓ clotting factors → acquired coagulopathy.",
      },
      {
        answer: "SLE",
        answerKey: true,
        reason:
          "SLE → lupus anticoagulant/antiphospholipid antibody → acquired coagulation disorder.",
      },
      {
        answer: "Von Willebrand disease",
        answerKey: false,
        reason:
          "Inherited deficiency of vWF. Rare acquired form exists, but mainly congenital.",
      },
    ],
  },
  {
    id: 15,
    statement: "Causes of generalized lymphadenopathy include",
    choices: [
      {
        answer: "brucellosis",
        answerKey: true,
        reason:
          "Chronic brucella infection → immune stimulation → lymphadenopathy.",
      },
      {
        answer: "histoplasmosis",
        answerKey: true,
        reason:
          "Disseminated fungal infection → RES activation → lymph node enlargement.",
      },
      {
        answer: "lymphoma",
        answerKey: true,
        reason:
          "Malignant lymphoid proliferation → generalized lymphadenopathy.",
      },
      {
        answer: "thalassemia",
        answerKey: false,
        reason:
          "Hemolytic anemia with marrow expansion → splenomegaly, not lymphadenopathy.",
      },
      {
        answer: "toxoplasmosis",
        answerKey: true,
        reason: "Parasitic infection causing generalized lymphadenopathy.",
      },
    ],
  },
  {
    id: 16,
    statement: "Features of idiopathic thrombocytopenic purpura (ITP) include",
    choices: [
      {
        answer: "anaemia is common",
        answerKey: false,
        reason:
          "Autoantibodies → platelet destruction → isolated thrombocytopenia. Anemia occurs only if there is bleeding, not a primary feature.",
      },
      {
        answer: "bone marrow failure is the cause",
        answerKey: false,
        reason:
          "ITP = autoimmune platelet destruction in spleen → marrow usually shows megakaryocytic hyperplasia, not failure.",
      },
      {
        answer: "most common in elderly males",
        answerKey: false,
        reason:
          "ITP → commoner in young women and children post-viral. Elderly males not typical.",
      },
      {
        answer: "petechiae and purpura are characteristic",
        answerKey: true,
        reason:
          "Thrombocytopenia → defective primary hemostasis → mucocutaneous bleeding → petechiae, purpura, gum/nose bleeding.",
      },
      {
        answer: "spleen is usually palpable",
        answerKey: false,
        reason:
          "Unlike leukemia/lymphoma, ITP spleen size is usually normal (only sequestration occurs).",
      },
    ],
  },
  {
    id: 17,
    statement: "The following are true about polycythemia vera",
    choices: [
      {
        answer: "it is a myeloproliferative disorder",
        answerKey: true,
        reason:
          "JAK2 mutation → clonal proliferation of RBC (± WBC, platelets) → myeloproliferative neoplasm.",
      },
      {
        answer: "leukocytosis may occur",
        answerKey: true,
        reason: "Myeloproliferation is pan-cellular → ↑ RBC, WBC, platelets.",
      },
      {
        answer: "patients have low erythropoietin levels",
        answerKey: true,
        reason:
          "Autonomous RBC production → negative feedback → suppressed EPO.",
      },
      {
        answer: "splenomegaly is a common feature",
        answerKey: true,
        reason: "Extramedullary hematopoiesis → spleen enlargement in PV.",
      },
      {
        answer: "thrombosis is rare",
        answerKey: false,
        reason:
          "Hyperviscosity + high platelets → ↑ arterial and venous thrombosis risk.",
      },
    ],
  },
  {
    id: 18,
    statement: "Causes of microcytic anaemia include",
    choices: [
      {
        answer: "acute blood loss",
        answerKey: false,
        reason:
          "Acute blood loss → normocytic normochromic anemia initially. Microcytosis develops only in chronic loss with iron deficiency.",
      },
      {
        answer: "anaemia of chronic disease",
        answerKey: true,
        reason:
          "Inflammatory cytokines → ↑ hepcidin → impaired iron release → functional iron deficiency → microcytosis.",
      },
      {
        answer: "iron deficiency anaemia",
        answerKey: true,
        reason:
          "Depleted iron → impaired Hb synthesis → small hypochromic RBC → microcytosis.",
      },
      {
        answer: "thalassaemia",
        answerKey: true,
        reason:
          "Globin gene mutation → ↓ Hb chains → small hypochromic RBC despite normal iron stores.",
      },
      {
        answer: "vitamin B12 deficiency",
        answerKey: false,
        reason:
          "B12 deficiency → impaired DNA synthesis → megaloblastic macrocytic anemia.",
      },
    ],
  },
  {
    id: 19,
    statement: "Causes of neutrophilia include",
    choices: [
      {
        answer: "acute bacterial infection",
        answerKey: true,
        reason:
          "Infection → IL-1, TNF → bone marrow neutrophil release → neutrophilia.",
      },
      {
        answer: "corticosteroid therapy",
        answerKey: true,
        reason:
          "Steroids → demargination of neutrophils from vessel wall → apparent neutrophilia.",
      },
      {
        answer: "hypersplenism",
        answerKey: false,
        reason:
          "Hypersplenism → sequestration & destruction of WBC → neutropenia, not neutrophilia.",
      },
      {
        answer: "myeloproliferative disorders",
        answerKey: true,
        reason:
          "Clonal proliferation of myeloid lineage → chronic neutrophilia.",
      },
      {
        answer: "viral infection",
        answerKey: false,
        reason:
          "Viruses → bone marrow suppression + lymphocytosis. Neutropenia is more typical.",
      },
    ],
  },
  {
    id: 20,
    statement: "Causes of eosinophilia include",
    choices: [
      {
        answer: "allergic disorders",
        answerKey: true,
        reason:
          "Allergen exposure → Th2 response → IL-5 → eosinophil proliferation/activation.",
      },
      {
        answer: "helminthic infections",
        answerKey: true,
        reason:
          "Parasite antigens → IgE mediated immune response → eosinophilia.",
      },
      {
        answer: "Hodgkin’s lymphoma",
        answerKey: true,
        reason:
          "Reed-Sternberg cells → cytokine release (IL-5) → eosinophil proliferation.",
      },
      {
        answer: "iron deficiency anaemia",
        answerKey: false,
        reason:
          "Iron deficiency affects RBC size/number, not eosinophil count.",
      },
      {
        answer: "steroid therapy",
        answerKey: false,
        reason:
          "Corticosteroids cause eosinopenia (apoptosis, sequestration), not eosinophilia.",
      },
    ],
  },
  {
    id: 21,
    statement: "Causes of prolonged PT (prothrombin time) include",
    choices: [
      {
        answer: "cirrhosis",
        answerKey: true,
        reason:
          "Liver → site of clotting factor synthesis. Cirrhosis → ↓ factors II, VII, IX, X → prolonged PT.",
      },
      {
        answer: "DIC",
        answerKey: true,
        reason:
          "Widespread activation of coagulation → factor consumption → prolonged PT & APTT.",
      },
      {
        answer: "factor VII deficiency",
        answerKey: true,
        reason:
          "Extrinsic pathway defect → isolated prolonged PT (normal APTT).",
      },
      {
        answer: "haemophilia",
        answerKey: false,
        reason:
          "Hemophilia A/B → factor VIII/IX deficiency → intrinsic pathway defect → prolonged APTT, not PT.",
      },
      {
        answer: "vitamin K deficiency",
        answerKey: true,
        reason:
          "Vitamin K needed for γ-carboxylation of II, VII, IX, X. Deficiency → prolonged PT.",
      },
    ],
  },
  {
    id: 22,
    statement: "Causes of prolonged APTT include",
    choices: [
      {
        answer: "hemophilia",
        answerKey: true,
        reason:
          "Factor VIII/IX deficiency → intrinsic pathway defect → prolonged APTT.",
      },
      {
        answer: "heparin therapy",
        answerKey: true,
        reason:
          "Heparin → activates antithrombin → inhibits factors IIa, Xa → prolonged APTT.",
      },
      {
        answer: "liver disease",
        answerKey: true,
        reason:
          "Advanced cirrhosis → ↓ intrinsic & extrinsic factors → prolonged PT & APTT.",
      },
      {
        answer: "factor VII deficiency",
        answerKey: false,
        reason:
          "Factor VII deficiency → extrinsic pathway defect → prolonged PT only.",
      },
      {
        answer: "von Willebrand’s disease",
        answerKey: true,
        reason: "vWF deficiency → ↓ factor VIII stability → prolonged APTT.",
      },
    ],
  },
  {
    id: 23,
    statement: "Causes of haemoptysis include",
    choices: [
      {
        answer: "bronchiectasis",
        answerKey: true,
        reason:
          "Chronic infection → dilated bronchi with fragile vessels → recurrent bleeding → haemoptysis.",
      },
      {
        answer: "left ventricular failure",
        answerKey: true,
        reason:
          "LVF → pulmonary venous hypertension → alveolar capillary rupture → haemoptysis (pink frothy sputum).",
      },
      {
        answer: "mitral stenosis",
        answerKey: true,
        reason:
          "↑ LA pressure → pulmonary venous congestion → rupture of bronchial veins → haemoptysis.",
      },
      {
        answer: "pulmonary embolism",
        answerKey: true,
        reason:
          "Embolus → pulmonary infarction → necrosis of tissue → blood-stained sputum.",
      },
      {
        answer: "whooping cough",
        answerKey: false,
        reason:
          "Pertussis → paroxysmal cough. Haemoptysis is not a characteristic feature.",
      },
    ],
  },
  {
    id: 24,
    statement: "Causes of clubbing include",
    choices: [
      {
        answer: "bronchogenic carcinoma",
        answerKey: true,
        reason:
          "Tumor-derived factors → ↑ vascular connective tissue → clubbing.",
      },
      {
        answer: "coeliac disease",
        answerKey: false,
        reason: "Coeliac → malabsorption. No recognized link to clubbing.",
      },
      {
        answer: "emphysema",
        answerKey: false,
        reason:
          "Pure emphysema (COPD) usually lacks clubbing unless coexisting cancer/bronchiectasis.",
      },
      {
        answer: "pulmonary arteriovenous malformation",
        answerKey: true,
        reason: "Right-to-left shunt → hypoxemia → clubbing + polycythemia.",
      },
      {
        answer: "ulcerative colitis",
        answerKey: true,
        reason:
          "IBD (UC > Crohn’s) → chronic inflammation → clubbing mechanism unclear.",
      },
    ],
  },
  {
    id: 25,
    statement: "Causes of exudative pleural effusion include",
    choices: [
      {
        answer: "congestive cardiac failure",
        answerKey: false,
        reason:
          "CCF → transudate (↑ hydrostatic pressure). Exudate occurs from infection/inflammation.",
      },
      {
        answer: "malignancy",
        answerKey: true,
        reason:
          "Tumor invasion of pleura → ↑ capillary permeability → exudate.",
      },
      {
        answer: "nephrotic syndrome",
        answerKey: false,
        reason: "Hypoalbuminemia → ↓ oncotic pressure → transudate.",
      },
      {
        answer: "parapneumonic effusion",
        answerKey: true,
        reason: "Infection/inflammation → protein-rich fluid → exudate.",
      },
      {
        answer: "tuberculosis",
        answerKey: true,
        reason: "Granulomatous pleuritis → capillary leakage → exudate.",
      },
    ],
  },
  {
    id: 26,
    statement: "Causes of transudative pleural effusion include",
    choices: [
      {
        answer: "congestive cardiac failure",
        answerKey: true,
        reason: "↑ hydrostatic pressure in pulmonary veins → transudate.",
      },
      {
        answer: "hypoalbuminemia",
        answerKey: true,
        reason:
          "↓ plasma oncotic pressure (e.g., nephrotic syndrome, cirrhosis) → transudate.",
      },
      {
        answer: "liver cirrhosis",
        answerKey: true,
        reason:
          "Portal HTN + hypoalbuminemia → hepatic hydrothorax → transudate.",
      },
      {
        answer: "malignancy",
        answerKey: false,
        reason: "Pleural tumor involvement → exudate, not transudate.",
      },
      {
        answer: "tuberculosis",
        answerKey: false,
        reason: "TB pleuritis → exudative, not transudative.",
      },
    ],
  },
  {
    id: 27,
    statement: "Causes of respiratory alkalosis include",
    choices: [
      {
        answer: "anxiety",
        answerKey: true,
        reason: "Hyperventilation → ↓ PaCO2 → respiratory alkalosis.",
      },
      {
        answer: "asthma",
        answerKey: true,
        reason:
          "Early asthma attack → hyperventilation due to dyspnea → respiratory alkalosis.",
      },
      {
        answer: "excessive mechanical ventilation",
        answerKey: true,
        reason: "Over-ventilation → CO2 washout → alkalosis.",
      },
      {
        answer: "opioid overdose",
        answerKey: false,
        reason:
          "Opiates depress respiratory center → hypoventilation → respiratory acidosis.",
      },
      {
        answer: "salicylate poisoning",
        answerKey: true,
        reason:
          "Early salicylate → direct medullary stimulation → hyperventilation → alkalosis (later metabolic acidosis).",
      },
    ],
  },
  {
    id: 28,
    statement: "Causes of respiratory acidosis include",
    choices: [
      {
        answer: "asthma",
        answerKey: true,
        reason: "Severe bronchospasm → CO2 retention → respiratory acidosis.",
      },
      {
        answer: "Guillain-Barre syndrome",
        answerKey: true,
        reason: "Neuromuscular weakness → hypoventilation → CO2 retention.",
      },
      {
        answer: "opioid overdose",
        answerKey: true,
        reason:
          "Respiratory center depression → hypoventilation → hypercapnia.",
      },
      {
        answer: "pulmonary embolism",
        answerKey: false,
        reason: "PE → tachypnea → respiratory alkalosis early, not acidosis.",
      },
      {
        answer: "severe emphysema",
        answerKey: true,
        reason:
          "Loss of alveolar surface → impaired CO2 elimination → chronic respiratory acidosis.",
      },
    ],
  },
  {
    id: 29,
    statement: "Causes of metabolic acidosis include",
    choices: [
      {
        answer: "chronic renal failure",
        answerKey: true,
        reason:
          "↓ excretion of H+ + ↓ bicarbonate regeneration → metabolic acidosis.",
      },
      {
        answer: "diarrhoea",
        answerKey: true,
        reason:
          "Loss of bicarbonate-rich intestinal secretions → metabolic acidosis.",
      },
      {
        answer: "diabetic ketoacidosis",
        answerKey: true,
        reason:
          "Insulin deficiency → lipolysis → ketone body accumulation → acidosis.",
      },
      {
        answer: "pyloric obstruction",
        answerKey: false,
        reason:
          "Vomiting/obstruction → loss of gastric HCl → metabolic alkalosis.",
      },
      {
        answer: "salicylate poisoning",
        answerKey: true,
        reason:
          "Late phase → accumulation of organic acids → metabolic acidosis.",
      },
    ],
  },
  {
    id: 30,
    statement: "Causes of metabolic alkalosis include",
    choices: [
      {
        answer: "Conn’s syndrome",
        answerKey: true,
        reason:
          "↑ aldosterone → Na+ retention, H+ secretion → metabolic alkalosis.",
      },
      {
        answer: "corticosteroid therapy",
        answerKey: true,
        reason:
          "Glucocorticoid/mineralocorticoid effect → H+ loss, bicarbonate retention → alkalosis.",
      },
      {
        answer: "diuretic therapy",
        answerKey: true,
        reason:
          "Loop/thiazide diuretics → volume contraction + H+/K+ loss → alkalosis.",
      },
      {
        answer: "diarrhoea",
        answerKey: false,
        reason: "Diarrhea → HCO3- loss → metabolic acidosis, not alkalosis.",
      },
      {
        answer: "vomiting",
        answerKey: true,
        reason:
          "Loss of gastric HCl → ↑ bicarbonate relative concentration → metabolic alkalosis.",
      },
    ],
  },
  {
    id: 31,
    statement: "Diseases typically acquired from animals include",
    choices: [
      {
        answer: "brucellosis",
        answerKey: true,
        reason:
          "Livestock (goats/cattle) or unpasteurized dairy → Brucella exposure → intracellular survival in macrophages → reticuloendothelial spread (fever, sweats, arthralgia) → classic zoonosis.",
      },
      {
        answer: "cholera",
        answerKey: false,
        reason:
          "Human fecal contamination of water/food → Vibrio cholerae ingestion → enterotoxin (↑cAMP) → secretory diarrhea; no animal reservoir → not zoonotic.",
      },
      {
        answer: "hepatitis A",
        answerKey: false,
        reason:
          "Fecal–oral person-to-person or contaminated food/water → hepatocyte infection → self-limited hepatitis; animal-to-human transmission not typical → not zoonotic.",
      },
      {
        answer: "leptospirosis",
        answerKey: true,
        reason:
          "Rodent/animal urine → leptospires in water/soil → skin/mucosal penetration → bacteremia → vasculitis (fever, myalgia, Weil’s disease) → zoonosis.",
      },
      {
        answer: "rabies",
        answerKey: true,
        reason:
          "Bite from infected mammal (dog/bat) → neurotropic virus enters peripheral nerve → retrograde axonal transport → CNS encephalitis → zoonosis.",
      },
    ],
  },
  {
    id: 32,
    statement: "The clinical manifestation of secondary syphilis include",
    choices: [
      {
        answer: "aortic aneurysm",
        answerKey: false,
        reason:
          "Late (tertiary) syphilis → vasa vasorum endarteritis → aortitis → ascending aortic aneurysm; secondary stage does not do this.",
      },
      {
        answer: "chancre",
        answerKey: false,
        reason:
          "Primary syphilis → inoculation site → painless indurated chancre + regional nodes; secondary stage occurs weeks later after spirochetemia.",
      },
      {
        answer: "condylomata lata",
        answerKey: true,
        reason:
          "Disseminated treponemal spread → immune complex reaction in skin/mucosa → broad, moist, highly infectious papules (condylomata lata) in intertriginous areas.",
      },
      {
        answer: "dementia",
        answerKey: false,
        reason:
          "Neurosyphilis (late) → parenchymal invasion (general paresis) → cortical damage → dementia; not a feature of secondary stage.",
      },
      {
        answer: "maculopapular rash",
        answerKey: true,
        reason:
          "Hematogenous dissemination → immune-mediated dermatitis → symmetrical maculopapular rash including palms/soles + mucous patches.",
      },
    ],
  },
  {
    id: 33,
    statement: "The following are infection with long incubation period",
    choices: [
      {
        answer: "brucellosis",
        answerKey: true,
        reason:
          "Low-dose exposure + intracellular persistence in macrophages → slow multiplication → incubation often weeks–months before undulant fevers appear.",
      },
      {
        answer: "cholera",
        answerKey: false,
        reason:
          "High inoculum + rapid enterotoxin action → incubation hours–2 days → acute watery diarrhea; not long incubation.",
      },
      {
        answer: "diphtheria",
        answerKey: false,
        reason:
          "Local colonization + toxin production in oropharynx → incubation ~2–5 days → sore throat/pseudomembrane; short, not long.",
      },
      {
        answer: "hepatitis B",
        answerKey: true,
        reason:
          "Parenteral/sexual exposure → hepatocyte infection → prolonged immune-tolerant phase → incubation ~6 weeks–6 months → long.",
      },
      {
        answer: "rabies",
        answerKey: true,
        reason:
          "Virus in muscle → entry to peripheral nerves → slow retrograde transport distance-dependent → incubation weeks–months (rarely >1 year).",
      },
    ],
  },
  {
    id: 34,
    statement: "Regarding Toxoplasmosis",
    choices: [
      {
        answer: "congenital infection may occur",
        answerKey: true,
        reason:
          "Primary maternal infection → transplacental tachyzoite spread → fetal CNS/eye invasion → chorioretinitis + hydrocephalus + intracranial calcifications.",
      },
      {
        answer: "can cause generalized lymphadenopathy",
        answerKey: true,
        reason:
          "Oocyst/tissue cyst ingestion → systemic spread → follicular hyperplasia in nodes (posterior cervical common) → generalized lymphadenopathy ± fever.",
      },
      {
        answer: "is intracellular parasites",
        answerKey: true,
        reason:
          "Obligate intracellular protozoan → tachyzoites replicate within host cells (macrophages/neural) → tissue cyst (bradyzoites) persistence.",
      },
      {
        answer: "may present with massive splenomegaly",
        answerKey: false,
        reason:
          "Mild hepatosplenomegaly can occur → but massive splenomegaly is atypical and suggests hematologic disease (e.g., CML, myelofibrosis).",
      },
      {
        answer: "treated with penicillin",
        answerKey: false,
        reason:
          "Parasite (not bacterium) → therapy = pyrimethamine + sulfadiazine + folinic acid (or TMP-SMX) → penicillin ineffective.",
      },
    ],
  },
  {
    id: 35,
    statement: "The following are TRUE regarding malaria infection",
    choices: [
      {
        answer: "acute kidney injury can occur",
        answerKey: true,
        reason:
          "P. falciparum → cytoadherence/sequestration in renal microvasculature → ischemia + hemoglobinuria (blackwater fever) → ATN → AKI.",
      },
      {
        answer: "algid malaria can present with cardiac failure",
        answerKey: true,
        reason:
          "Severe malaria ± Gram-negative sepsis → distributive shock (algid) → ↓ coronary perfusion + cytokine-mediated myocardial depression → acute cardiac failure.",
      },
      {
        answer: "can present with cranial nerve palsies",
        answerKey: false,
        reason:
          "Cerebral malaria → impaired consciousness/seizures/retinopathy; focal cranial nerve palsies are rare/atypical → not characteristic.",
      },
      {
        answer: "malarial retinopathy can be seen",
        answerKey: true,
        reason:
          "Microvascular sequestration → retinal whitening, vessel discoloration, hemorrhages with whitening → correlates with cerebral malaria severity.",
      },
      {
        answer: "thrombocytosis may occur",
        answerKey: false,
        reason:
          "Immune destruction + splenic sequestration → thrombocytopenia (low platelets) is typical → thrombocytosis is not expected.",
      },
    ],
  },
  {
    id: 36,
    statement: "The followings are common causes of secondary hyperlipidemia",
    choices: [
      {
        answer: "alcohol abuse",
        answerKey: true,
        reason:
          "Ethanol → ↑ hepatic NADH + ↑ FA synthesis → ↑ VLDL secretion → hypertriglyceridemia ± ↑ LDL.",
      },
      {
        answer: "diabetes mellitus",
        answerKey: true,
        reason:
          "Insulin resistance → ↓ LPL activity + ↑ adipose lipolysis → ↑ VLDL/TG and small dense LDL.",
      },
      {
        answer: "hyperthyroidism",
        answerKey: false,
        reason:
          "↑ Thyroid hormone → ↑ LDL receptor expression + ↑ cholesterol turnover → tends to lower LDL; hypothyroidism raises LDL.",
      },
      {
        answer: "nephrotic syndrome",
        answerKey: true,
        reason:
          "Proteinuria → ↓ oncotic pressure → hepatic upregulation of apoB lipoproteins → ↑ LDL/VLDL.",
      },
      {
        answer: "thiazide therapy",
        answerKey: true,
        reason:
          "Thiazides → insulin resistance + ↑ hepatic VLDL production → modest ↑ LDL/TG.",
      },
    ],
  },
  {
    id: 37,
    statement: "Symptoms of hyperglycemia include",
    choices: [
      {
        answer: "blurring of vision",
        answerKey: true,
        reason:
          "Hyperglycemia → sorbitol accumulation in lens + osmotic water influx → refractive index change → transient blurred vision.",
      },
      {
        answer: "genital candidiasis",
        answerKey: true,
        reason:
          "Glucosuria → nutrient-rich moist environment → Candida overgrowth → vulvovaginitis/balanitis.",
      },
      {
        answer: "hyperphagia",
        answerKey: false,
        reason:
          "Classic triad is polyuria–polydipsia–polyphagia; item uses “hyperphagia” (non-standard in exam context) → considered incorrect here despite similar meaning.",
      },
      {
        answer: "increased salivation",
        answerKey: false,
        reason:
          "Hyperglycemia → dehydration (osmotic diuresis) → dry mouth rather than hypersalivation.",
      },
      {
        answer: "irritability",
        answerKey: true,
        reason:
          "Rapid glycemic swings → neuroglycopenia/osmotic shifts → fatigue, irritability, poor concentration.",
      },
    ],
  },
  {
    id: 38,
    statement: "The following are TRUE about monogenic diabetes",
    choices: [
      {
        answer: "develops under the age of 25 years in one family member",
        answerKey: true,
        reason:
          "MODY genes (e.g., HNF1A, GCK) → early-onset non–insulin-dependent diabetes (<25 yrs) + autosomal dominant family clustering → strong familial pattern.",
      },
      {
        answer: "is autosomal recessive disorder",
        answerKey: false,
        reason:
          "Most MODY subtypes → autosomal dominant transmission → multiple generations affected; recessive forms are rare and distinct entities.",
      },
      {
        answer: "is treated with insulin therapy",
        answerKey: false,
        reason:
          "HNF1A/HNF4A MODY → preserved β-cell responsiveness to sulfonylureas → high sensitivity → oral agents preferred; insulin reserved if control fails/pregnancy.",
      },
      {
        answer: "is treated with sulphonylurea",
        answerKey: true,
        reason:
          "Sulfonylurea → binds SUR1 → closes KATP channels → ↑ Ca2+ influx → insulin secretion; MODY (esp. HNF1A) shows marked response → excellent control.",
      },
      {
        answer:
          "may present with renal cystic disease and genital tract malformation",
        answerKey: true,
        reason:
          "HNF1B (MODY 5) mutation → developmental anomalies → renal cysts, hypomagnesemia, pancreatic atrophy + Müllerian/Wolffian tract malformations.",
      },
    ],
  },
  {
    id: 39,
    statement: "The following conditions can cause hyperglycemia",
    choices: [
      {
        answer: "Acromegaly",
        answerKey: true,
        reason:
          "↑ GH → ↑ lipolysis & gluconeogenesis + antagonism of insulin → insulin resistance → hyperglycemia.",
      },
      {
        answer: "Addison’s disease",
        answerKey: false,
        reason:
          "↓ Cortisol → ↓ gluconeogenesis → tendency to hypoglycemia; replacement normalizes, does not cause hyperglycemia.",
      },
      {
        answer: "Cushing’s syndrome",
        answerKey: true,
        reason:
          "↑ Cortisol → ↑ hepatic gluconeogenesis + ↓ peripheral glucose uptake → insulin resistance → hyperglycemia.",
      },
      {
        answer: "Down’s syndrome",
        answerKey: false,
        reason:
          "↑ Autoimmune risk (type 1 DM) but syndrome itself is not a direct hyperglycemic state → not a primary cause.",
      },
      {
        answer: "thiazide diuretics",
        answerKey: true,
        reason:
          "Thiazides → hypokalemia + impaired insulin release and sensitivity → mild hyperglycemia.",
      },
    ],
  },
  {
    id: 40,
    statement: "Glycated hemoglobin",
    choices: [
      {
        answer: "is objective measurement of glycemic control over a few days",
        answerKey: false,
        reason:
          "Non-enzymatic glycation of HbA → stable HbA1c proportional to mean glucose over RBC lifespan (≈8–12 weeks) → not just days.",
      },
      {
        answer:
          "rate of formation is directly proportional to blood glucose concentration",
        answerKey: true,
        reason:
          "Higher ambient glucose → faster Amadori product formation on Hb → higher HbA1c → linear relation within physiologic ranges.",
      },
      {
        answer: "very useful to assess glycemic status in patients with uremia",
        answerKey: true,
        reason:
          "Modern assays minimize carbamylation interference → HbA1c reflects long-term control despite uremia (caveat: anemia/ESA shorten RBC life → falsely low).",
      },
      {
        answer:
          "very useful to assess glycemic status in patients with haemoglobinopathies",
        answerKey: false,
        reason:
          "Variant hemoglobins/shortened RBC survival → assay interference/altered kinetics → HbA1c unreliable → use fructosamine/CGM.",
      },
      {
        answer: "glycemic control is good if HbA1c ≤ 7%",
        answerKey: true,
        reason:
          "Most guidelines → general target ≤7% for adults with diabetes (individualize per age/comorbidity/hypoglycemia risk).",
      },
    ],
  },
  {
    id: 41,
    statement: "Regarding hyponatremia",
    choices: [
      {
        answer: "Cushing’s syndrome is one of the causes",
        answerKey: false,
        reason:
          "↑ Cortisol/↑ mineralocorticoid → water loss + Na+ retention → tendency to hypernatremia/alkalosis → not hyponatremia.",
      },
      {
        answer: "can present with arrhythmia",
        answerKey: false,
        reason:
          "↓ Serum Na+ → cerebral edema → headache, confusion, seizures, coma; electrolyte-driven arrhythmias are more typical of K+/Ca2+ derangements.",
      },
      {
        answer: "is caused by diabetes insipidus",
        answerKey: false,
        reason:
          "DI → impaired ADH action → free-water loss > Na+ loss → hypernatremia; hyponatremia occurs with excess ADH (e.g., SIADH).",
      },
      {
        answer: "is associated with hypothyroidism",
        answerKey: true,
        reason:
          "Hypothyroidism → ↓ cardiac output + ↓ GFR → impaired free-water clearance + ↑ ADH → dilutional hyponatremia.",
      },
      {
        answer: "rapid correction can cause myelinolysis",
        answerKey: true,
        reason:
          "Chronic hyponatremia → brain osmolyte loss (adaptation) → rapid Na+ rise → osmotic shifts → central pontine/extrapontine myelinolysis.",
      },
    ],
  },
  {
    id: 42,
    statement: "Pharmacological management of hyper-cholesterolaemia include",
    choices: [
      {
        answer: "bile acid sequestrant",
        answerKey: true,
        reason:
          "BAS bind bile acids in gut → ↑ hepatic conversion of cholesterol to bile acids → upregulate LDL receptors → ↓ LDL-C.",
      },
      {
        answer: "ezetimibe",
        answerKey: true,
        reason:
          "Blocks NPC1L1 transporter in intestine → ↓ cholesterol absorption → ↓ hepatic cholesterol pool → ↑ LDL receptor activity → ↓ LDL-C.",
      },
      {
        answer: "fenofibrates",
        answerKey: false,
        reason:
          "PPAR-α activation → ↑ LPL → ↓ TG (VLDL) > modest LDL effect; not primary LDL-lowering therapy for hyper-CHOLesterolemia.",
      },
      {
        answer: "HMG CoA reductase inhibitor",
        answerKey: true,
        reason:
          "Statins inhibit cholesterol synthesis → upregulate LDL receptors → largest LDL-C reduction → first-line.",
      },
      {
        answer: "omega 3 fatty acids",
        answerKey: false,
        reason:
          "Ω-3 FA → ↓ hepatic VLDL production → ↓ TG; LDL-C effect variable/minimal → not a primary LDL-lowering drug.",
      },
    ],
  },
  {
    id: 43,
    statement: "Causes of hypocalcemia",
    choices: [
      {
        answer: "acute pancreatitis",
        answerKey: true,
        reason:
          "Pancreatic lipase → fat necrosis → Ca2+ saponification (soap formation) → ↓ ionized Ca2+ → hypocalcemia.",
      },
      {
        answer: "chronic kidney disease",
        answerKey: true,
        reason:
          "↓ 1α-hydroxylase → ↓ calcitriol → ↓ intestinal Ca2+ absorption + hyperphosphatemia → Ca–P precipitation → hypocalcemia.",
      },
      {
        answer: "hyperparathyroidism",
        answerKey: false,
        reason:
          "↑ PTH → ↑ bone resorption + ↑ renal Ca2+ reabsorption + ↑ 1,25(OH)2D → hypercalcemia, not hypo-.",
      },
      {
        answer: "hypothyroidism",
        answerKey: false,
        reason:
          "Thyroid hormone deficiency does not directly lower Ca2+; hypocalcemia is classically due to hypoPARAthyroidism/Vit D deficiency/CKD.",
      },
      {
        answer: "vitamin D deficiency",
        answerKey: true,
        reason:
          "↓ Vitamin D → ↓ intestinal Ca2+/phosphate absorption → secondary hyperparathyroidism → low–normal Ca2+ with osteomalacia/rickets.",
      },
    ],
  },
  {
    id: 44,
    statement: "Features of insulin resistance (Metabolic syndrome) are",
    choices: [
      {
        answer: "central obesity",
        answerKey: true,
        reason:
          "Visceral adiposity → adipokines/inflammation (TNF-α, IL-6) → insulin resistance → dyslipidemia/HTN/hyperglycemia.",
      },
      {
        answer: "decreased fibrinogen",
        answerKey: false,
        reason:
          "Prothrombotic state → ↑ fibrinogen, ↑ PAI-1 → impaired fibrinolysis → higher CV risk; not decreased.",
      },
      {
        answer: "hyperinsulinemia",
        answerKey: true,
        reason:
          "Insulin resistance → β-cells compensate → ↑ insulin secretion → fasting/postprandial hyperinsulinemia.",
      },
      {
        answer: "increased sympathetic neural activity",
        answerKey: true,
        reason:
          "Insulin/leptin resistance + adipokines → ↑ SNS tone → vasoconstriction + sodium retention → hypertension.",
      },
      {
        answer: "macroalbuminuria",
        answerKey: true,
        reason:
          "Endothelial dysfunction + glomerular hyperfiltration → microalbuminuria → progression to macroalbuminuria with persistent insulin resistance.",
      },
    ],
  },
  {
    id: 45,
    statement: "Clinical features of severe under-nutrition in adults",
    choices: [
      {
        answer: "apathy",
        answerKey: true,
        reason:
          "Protein–energy deficiency → neurotransmitter depletion + anemia → fatigue → apathy/low mood.",
      },
      {
        answer: "famine oedema",
        answerKey: true,
        reason:
          "Low protein intake → hypoalbuminemia → ↓ plasma oncotic pressure → interstitial fluid shift → pitting edema (kwashiorkor-type).",
      },
      {
        answer: "gastroesophageal reflux disease",
        answerKey: false,
        reason:
          "GERD relates to LES dysfunction/obesity; under-nutrition more often causes gastroparesis/atony rather than reflux.",
      },
      {
        answer: "osteoarthritis",
        answerKey: false,
        reason:
          "OA risk correlates with mechanical load/age; under-nutrition predisposes to osteopenia/osteoporosis, not OA.",
      },
      {
        answer: "reduced skin fold thickness",
        answerKey: true,
        reason:
          "Negative energy balance → lipolysis → loss of subcutaneous fat → ↓ triceps skinfold/other anthropometric measures.",
      },
    ],
  },

  {
    id: 46,
    statement: "Features of portal hypertension in cirrhosis of liver are",
    choices: [
      {
        answer: "ascites",
        answerKey: true,
        reason:
          "Cirrhosis → fibrosis + nodular regeneration → ↑ portal venous resistance → ↑ hydrostatic pressure + ↓ albumin synthesis → ↓ plasma oncotic pressure → transudation of fluid into peritoneal cavity → ascites.",
      },
      {
        answer: "bleeding esophageal varices",
        answerKey: true,
        reason:
          "Portal hypertension → formation of portosystemic collaterals at gastroesophageal junction → dilated thin-walled veins (varices) → prone to rupture → massive upper GI bleed.",
      },
      {
        answer: "clubbing of fingers",
        answerKey: false,
        reason:
          "Digital clubbing → associated with chronic suppurative lung disease, IBD, cyanotic heart disease → not directly a consequence of portal hypertension.",
      },
      {
        answer: "palmar erythema",
        answerKey: false,
        reason:
          "Cirrhosis → impaired hepatic metabolism of estrogen → hyperestrogenemia → vasodilation in palms → palmar erythema. This is a feature of chronic liver disease, not portal hypertension itself.",
      },
      {
        answer: "splennomegaly",
        answerKey: true,
        reason:
          "Portal hypertension → ↑ splenic venous pressure → congestion and sequestration of blood cells → congestive splenomegaly.",
      },
    ],
  },
  {
    id: 47,
    statement: "Chronic liver disease screen includes",
    choices: [
      {
        answer: "ANA titer",
        answerKey: true,
        reason:
          "Autoimmune hepatitis → autoimmune injury to hepatocytes → ANA positive in many cases → part of CLD screen.",
      },
      {
        answer: "caeruloplasmin",
        answerKey: true,
        reason:
          "Wilson’s disease → defective copper transport → ↓ serum caeruloplasmin → copper deposition in liver/brain/eye → screened in CLD.",
      },
      {
        answer: "ferritin",
        answerKey: true,
        reason:
          "Hemochromatosis → ↑ intestinal iron absorption → iron overload → ↑ serum ferritin and transferrin saturation → checked in CLD screen.",
      },
      {
        answer: "HBs antigen",
        answerKey: true,
        reason:
          "Hepatitis B infection → chronic HBV carrier state → progressive inflammation and fibrosis → cirrhosis → HBsAg used for diagnosis.",
      },
      {
        answer: "Hepatitis A antibody",
        answerKey: false,
        reason:
          "Hepatitis A → acute self-limiting viral infection → does not cause chronic hepatitis → antibody testing not useful in CLD screen.",
      },
    ],
  },
  {
    id: 48,
    statement: "Causes of acute liver failure are",
    choices: [
      {
        answer: "anti-TB drugs",
        answerKey: true,
        reason:
          "Isoniazid, rifampicin, pyrazinamide → hepatotoxic → massive hepatocyte necrosis → acute liver failure.",
      },
      {
        answer: "acute fatty liver of pregnancy",
        answerKey: true,
        reason:
          "Pregnancy (3rd trimester) → mitochondrial fatty acid oxidation defect → microvesicular fatty change in hepatocytes → acute liver failure.",
      },
      {
        answer: "Budd-Chiari syndrome",
        answerKey: true,
        reason:
          "Hepatic vein thrombosis → hepatic congestion and ischemia → hepatocellular necrosis → acute liver failure.",
      },
      {
        answer: "hepatitis C infection",
        answerKey: false,
        reason:
          "HCV → chronic infection with slow progression to cirrhosis → rarely causes fulminant acute liver failure.",
      },
      {
        answer: "iron overload",
        answerKey: false,
        reason:
          "Hemochromatosis → chronic parenchymal damage and cirrhosis → not a cause of acute liver failure.",
      },
    ],
  },
  {
    id: 49,
    statement: "Precipitating factors for porto-systemic encephalopathy are",
    choices: [
      {
        answer: "constipation",
        answerKey: true,
        reason:
          "Constipation → ↑ colonic bacterial metabolism of nitrogen → ↑ ammonia absorption → worsens encephalopathy.",
      },
      {
        answer: "high dietary protein",
        answerKey: true,
        reason:
          "High protein diet → ↑ nitrogen load in gut → more ammonia → worsens encephalopathy in cirrhosis.",
      },
      {
        answer: "hypokalemia",
        answerKey: true,
        reason:
          "Hypokalemia → renal tubular ammoniagenesis ↑ → more ammonia enters systemic circulation → precipitates encephalopathy.",
      },
      {
        answer: "metabolic acidosis",
        answerKey: false,
        reason:
          "Acid-base imbalance may worsen general condition but is not a recognized direct precipitant of hepatic encephalopathy.",
      },
      {
        answer: "spontaneous bacterial peritonitis",
        answerKey: true,
        reason:
          "SBP → infection → inflammatory cytokines + ↑ catabolism → ↑ ammonia load → precipitates encephalopathy.",
      },
    ],
  },
  {
    id: 50,
    statement: "Regarding hepatitis B infection",
    choices: [
      {
        answer: "Anti HBs Ab indicate immunity to infection",
        answerKey: true,
        reason:
          "Recovery or vaccination → production of anti-HBs antibody → protective immunity.",
      },
      {
        answer: "HBe antigen indicates infectivity",
        answerKey: true,
        reason:
          "HBeAg → marker of viral replication → correlates with high infectivity.",
      },
      {
        answer: "It is an important cause of hepatocellular carcinoma",
        answerKey: true,
        reason:
          "Chronic HBV → integration into host DNA + chronic inflammation → dysplasia → HCC.",
      },
      {
        answer: "it is only transmitted by parenteral route",
        answerKey: false,
        reason:
          "HBV transmission → parenteral (blood), sexual, and vertical (mother-to-child).",
      },
      {
        answer: "there is no chronic carrier state",
        answerKey: false,
        reason: "Chronic HBV carriers exist → persistent HBsAg > 6 months.",
      },
    ],
  },
  {
    id: 51,
    statement: "Chronic diarrhea may be presenting features of",
    choices: [
      {
        answer: "colonic cancer",
        answerKey: true,
        reason:
          "Colorectal carcinoma → partial obstruction → alternating constipation and diarrhea or secretory diarrhea.",
      },
      {
        answer: "chronic pancreatitis",
        answerKey: true,
        reason:
          "Exocrine pancreatic insufficiency → ↓ enzyme secretion → fat malabsorption → steatorrhea and diarrhea.",
      },
      {
        answer: "inflammatory bowel disease",
        answerKey: true,
        reason:
          "Ulcerative colitis/Crohn’s disease → chronic mucosal inflammation → persistent diarrhea with/without blood.",
      },
      {
        answer: "small bowel bacterial overgrowth",
        answerKey: true,
        reason:
          "Excess bacteria → deconjugate bile salts + damage mucosa → malabsorption → chronic diarrhea.",
      },
      {
        answer: "VIPoma",
        answerKey: true,
        reason:
          "VIPoma → vasoactive intestinal peptide secretion → secretory watery diarrhea (WDHA syndrome).",
      },
    ],
  },
  {
    id: 52,
    statement: "Indications for Helicobacter pylori eradication",
    choices: [
      {
        answer: "family history of gastric cancer",
        answerKey: true,
        reason:
          "H. pylori → chronic gastritis → intestinal metaplasia → ↑ gastric cancer risk → eradication recommended.",
      },
      {
        answer: "GERD",
        answerKey: false,
        reason:
          "GERD pathogenesis → lower esophageal sphincter incompetence → not directly related to H. pylori.",
      },
      {
        answer: "long-term NSAID users",
        answerKey: true,
        reason:
          "NSAIDs → mucosal injury → combined with H. pylori increases ulcer risk → eradication prevents complications.",
      },
      {
        answer: "peptic ulcer disease",
        answerKey: true,
        reason:
          "Most PUD cases → H. pylori infection → eradication cures ulcer and prevents recurrence.",
      },
      {
        answer: "short-term use of proton pump inhibitors",
        answerKey: false,
        reason:
          "Short PPI course → does not increase H. pylori complications → eradication not indicated.",
      },
    ],
  },
  {
    id: 53,
    statement: "Regarding spontaneous bacterial peritonitis",
    choices: [
      {
        answer: "abdominal signs are present in nearly every case",
        answerKey: false,
        reason:
          "SBP → often clinically silent or mild symptoms → abdominal signs absent in many cases.",
      },
      {
        answer: "can precipitate hepatic encephalopathy",
        answerKey: true,
        reason:
          "Infection → inflammatory response + ↑ nitrogen load → worsens encephalopathy.",
      },
      {
        answer: "commonly caused by Staphylococcus aureus",
        answerKey: false,
        reason:
          "Most common → Gram-negative bacilli (E. coli, Klebsiella). Staph aureus is uncommon.",
      },
      {
        answer: "most causal organisms are from enteric origin",
        answerKey: true,
        reason:
          "Bacterial translocation → enteric Gram-negative organisms → SBP.",
      },
      {
        answer: "recurrence is rare",
        answerKey: false,
        reason:
          "SBP → recurrence common unless prophylaxis with norfloxacin given.",
      },
    ],
  },
  {
    id: 54,
    statement:
      "Gastro-oesophageal reflux disease is associated with the following factors",
    choices: [
      {
        answer: "decreased intra-abdominal pressure",
        answerKey: false,
        reason:
          "GERD → occurs with ↑ intra-abdominal pressure (e.g. obesity, pregnancy).",
      },
      {
        answer: "delayed gastric emptying",
        answerKey: true,
        reason:
          "Delayed emptying → prolonged gastric distension → ↑ reflux episodes.",
      },
      {
        answer: "increased lower oesophageal sphincter tone",
        answerKey: false,
        reason: "GERD → due to ↓ LES tone → incompetence.",
      },
      {
        answer: "prolonged oesophageal transit time",
        answerKey: true,
        reason:
          "Slow clearance → longer acid contact with esophagus → worsens GERD.",
      },
      {
        answer: "presence of a hiatus hernia",
        answerKey: true,
        reason:
          "Hiatus hernia → displaces LES into thorax → loss of anti-reflux barrier.",
      },
    ],
  },
  {
    id: 55,
    statement: "Causes of dyspepsia includes",
    choices: [
      {
        answer: "acute gastritis",
        answerKey: true,
        reason:
          "Mucosal inflammation (NSAIDs, alcohol, infection) → epigastric pain and dyspepsia.",
      },
      {
        answer: "gallstones",
        answerKey: true,
        reason:
          "Cholelithiasis → biliary colic → may mimic or cause dyspeptic pain.",
      },
      {
        answer: "hypocalcemia",
        answerKey: false,
        reason:
          "Hypocalcemia → neuromuscular irritability (tetany) → not dyspepsia.",
      },
      {
        answer: "peptic ulcer disease",
        answerKey: true,
        reason:
          "PUD → H. pylori/NSAID induced ulcer → classic dyspeptic symptoms.",
      },
      {
        answer: "pancreatic diseases",
        answerKey: true,
        reason:
          "Chronic pancreatitis/pancreatic cancer → upper abdominal pain → mimics dyspepsia.",
      },
    ],
  },
  {
    id: 56,
    statement: "Specific antidotes used to treat in poisoning",
    choices: [
      {
        answer: "Acetaminophen : Methionine",
        answerKey: true,
        reason:
          "Paracetamol overdose → depleted glutathione → methionine replenishes glutathione → detoxifies NAPQI.",
      },
      {
        answer: "Benzodiazepine : Naloxone",
        answerKey: false,
        reason:
          "Naloxone → opioid receptor antagonist. Benzodiazepine overdose → treated with flumazenil.",
      },
      {
        answer: "Digoxin : Beta-blocker",
        answerKey: false,
        reason:
          "Digoxin toxicity → treated with digoxin-specific antibody (Fab), not beta-blockers.",
      },
      {
        answer: "Lead : Sodium calcium acetate",
        answerKey: false,
        reason:
          "Lead poisoning → chelation therapy with EDTA, dimercaprol, or DMSA → not sodium calcium acetate.",
      },
      {
        answer: "Organophosphate: Praildoxime",
        answerKey: true,
        reason:
          "Organophosphate → inhibits acetylcholinesterase → pralidoxime reactivates enzyme.",
      },
    ],
  },
  {
    id: 57,
    statement: "Clinical features suggestive of opiate overdose are",
    choices: [
      {
        answer: "abdominal pain and diarrhea",
        answerKey: false,
        reason: "Opioids → reduce gut motility → constipation, not diarrhea.",
      },
      {
        answer: "diminished rate and depth of respiration",
        answerKey: true,
        reason:
          "Opioids → act on μ-receptors in medulla → respiratory depression.",
      },
      {
        answer: "hypertension",
        answerKey: false,
        reason:
          "Opiate overdose → vasodilation + histamine release → hypotension more likely.",
      },
      {
        answer: "pinpoint pupils",
        answerKey: true,
        reason:
          "Opioids → parasympathetic stimulation via Edinger-Westphal nucleus → miosis (pinpoint pupils).",
      },
      {
        answer: "pulmonary oedema",
        answerKey: true,
        reason:
          "Opiates → ↑ pulmonary capillary permeability + hypoxia → pulmonary edema in severe cases.",
      },
    ],
  },
  {
    id: 58,
    statement: "Features of muscarinic activity in organophosphate toxicity",
    choices: [
      {
        answer: "bronchorrhea",
        answerKey: true,
        reason:
          "OP → excess ACh at muscarinic receptors → ↑ bronchial gland secretion → bronchorrhea.",
      },
      {
        answer: "fasciculation and paralysis",
        answerKey: false,
        reason:
          "These → nicotinic effects at neuromuscular junction, not muscarinic.",
      },
      {
        answer: "mydriasis",
        answerKey: false,
        reason: "OP → muscarinic stimulation → miosis, not mydriasis.",
      },
      {
        answer: "salivation",
        answerKey: true,
        reason: "OP → excess parasympathetic stimulation → profuse salivation.",
      },
      {
        answer: "tachycardia",
        answerKey: false,
        reason:
          "Muscarinic excess → vagal stimulation → bradycardia, not tachycardia.",
      },
    ],
  },
  {
    id: 59,
    statement: "Vitamin C deficiency",
    choices: [
      {
        answer: "can cause poor wound healing",
        answerKey: true,
        reason:
          "Vitamin C → essential cofactor for hydroxylation of proline/lysine in collagen synthesis → deficiency → defective collagen → impaired wound healing.",
      },
      {
        answer: "can present as Korsakoff's psychosis",
        answerKey: false,
        reason:
          "Korsakoff’s syndrome → thiamine (vitamin B1) deficiency, not vitamin C deficiency.",
      },
      {
        answer: "can cause swollen gums that bleed",
        answerKey: true,
        reason:
          "Scurvy → fragile capillaries + defective connective tissue → swollen bleeding gums.",
      },
      {
        answer: "is associated with angular stomatitis",
        answerKey: false,
        reason: "Angular stomatitis → riboflavin (vitamin B2) deficiency.",
      },
      {
        answer: "hemarthrosis can occur",
        answerKey: true,
        reason:
          "Vitamin C deficiency → fragile capillaries → bleeding into joints (hemarthrosis).",
      },
    ],
  },
  {
    id: 60,
    statement: "The followings are complications of parenteral nutrition",
    choices: [
      {
        answer: "electrolyte imbalance",
        answerKey: true,
        reason:
          "PN → rapid fluid and electrolyte shifts → hypokalemia, hypophosphatemia, hypomagnesemia.",
      },
      {
        answer: "fluid overload",
        answerKey: true,
        reason:
          "Excess infusion volume → ↑ intravascular volume → fluid overload and pulmonary edema.",
      },
      {
        answer: "hypoglycemia",
        answerKey: true,
        reason:
          "Abrupt stoppage of glucose infusion → continued insulin secretion → rebound hypoglycemia.",
      },
      {
        answer: "hepatic steatosis",
        answerKey: true,
        reason:
          "Long-term PN → excess glucose/lipid delivery → fatty infiltration of liver → hepatic steatosis.",
      },
      {
        answer: "refeeding syndrome",
        answerKey: true,
        reason:
          "Malnourished state → sudden feeding → insulin surge → cellular uptake of phosphate, potassium, magnesium → life-threatening electrolyte shifts (refeeding syndrome).",
      },
    ],
  },
];

export default MEDICINE_UMM_PAPER_1;
