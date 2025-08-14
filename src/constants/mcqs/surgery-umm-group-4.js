const SURGERY_UMM_GROUP_4 = [
  {
    id: 1,
    statement:
      "75-year-old female presents with displaced intracapsular fracture of the femoral neck.",
    choices: [
      {
        answer: "Hemiarthroplasty is the preferred treatment for this patient.",
        answerKey: true,
        reason:
          "Elderly patients with displaced intracapsular femoral neck fractures usually benefit from hemiarthroplasty to allow early mobilization and reduce complications.",
      },
      {
        answer:
          "Total hip replacement is indicated for active, healthy elderly patients.",
        answerKey: true,
        reason:
          "Active, medically fit elderly patients may benefit from total hip replacement for better function and lower risk of acetabular erosion.",
      },
      {
        answer: "Non-surgical management is appropriate for this fracture.",
        answerKey: false,
        reason:
          "Non-surgical management is usually reserved for non-ambulatory or extremely frail patients; most displaced fractures require surgery.",
      },
      {
        answer:
          "Internal fixation with screws is the best option for displaced fractures.",
        answerKey: false,
        reason:
          "Internal fixation has high failure rates in elderly with displaced intracapsular fractures due to poor bone quality.",
      },
      {
        answer: "Deep vein thrombosis (DVT) is a potential complication.",
        answerKey: true,
        reason:
          "DVT is a common complication post-hip fracture, especially if immobilized.",
      },
    ],
  },
  {
    id: 2,
    statement:
      "10-year-old boy with fever, thigh swelling, tenderness, periosteal elevation on X-ray.",
    choices: [
      {
        answer: "The most likely diagnosis is osteomyelitis.",
        answerKey: true,
        reason:
          "Fever, localized pain, swelling, elevated WBC/CRP, and periosteal elevation on X-ray indicate acute hematogenous osteomyelitis.",
      },
      {
        answer: "Staphylococcus aureus is the most common causative organism.",
        answerKey: true,
        reason:
          "S. aureus is the predominant pathogen in pediatric acute osteomyelitis.",
      },
      {
        answer: "Oral antibiotics are sufficient for treatment.",
        answerKey: false,
        reason:
          "Severe or acute cases usually require IV antibiotics; oral antibiotics alone are often insufficient initially.",
      },
      {
        answer: "Surgical debridement may be required.",
        answerKey: true,
        reason:
          "Surgical intervention is needed if there is abscess, sequestrum, or failure to respond to antibiotics.",
      },
      {
        answer: "Both life and limb are in danger with this infection.",
        answerKey: true,
        reason:
          "Severe osteomyelitis can threaten limb function; systemic spread may risk life.",
      },
    ],
  },
  {
    id: 3,
    statement: "Regarding peptic ulceration",
    choices: [
      {
        answer: "Most peptic ulcers are caused by H.pylori or NSAID",
        answerKey: true,
        reason:
          "H. pylori infection and NSAID use account for the majority of peptic ulcers.",
      },
      {
        answer: "Gastric ulcers are more common than duodenal ulcers",
        answerKey: false,
        reason: "Duodenal ulcers are more common than gastric ulcers.",
      },
      {
        answer: "Gastric ulcers may become malignant",
        answerKey: true,
        reason:
          "Some gastric ulcers carry a risk of malignancy, unlike duodenal ulcers.",
      },
      {
        answer: "Elective surgery is commonly performed now",
        answerKey: false,
        reason:
          "Elective surgery is now rare due to effective medical management with PPIs and eradication therapy.",
      },
      {
        answer:
          "The treatment of the perforated peptic ulcer is primarily surgical",
        answerKey: true,
        reason:
          "Perforated peptic ulcer is a surgical emergency requiring repair.",
      },
    ],
  },
  {
    id: 4,
    statement: "Septic shock",
    choices: [
      {
        answer: "Is only caused by gram negative organisms",
        answerKey: false,
        reason:
          "Septic shock can be caused by gram positive, gram negative, and fungal infections.",
      },
      {
        answer: "Carries a favourable prognosis",
        answerKey: false,
        reason: "Septic shock has high mortality despite treatment.",
      },
      {
        answer: "Produce a cellular defect that inhibits oxygen utilization",
        answerKey: true,
        reason:
          "Septic shock leads to cellular dysfunction including impaired oxygen utilization (cytopathic hypoxia).",
      },
      {
        answer:
          "Is particularly associated with infective complications of gastrointestinal and genitourinary systems",
        answerKey: true,
        reason: "These are common sources of sepsis leading to septic shock.",
      },
      {
        answer: "Can be most effectively treated by antibiotics",
        answerKey: false,
        reason:
          "Antibiotics are essential but fluid resuscitation, vasopressors, and supportive care are equally important.",
      },
    ],
  },
  {
    id: 5,
    statement: "Most common histological type of carcinoma of the tongue",
    choices: [
      {
        answer: "Adenocarcinoma",
        answerKey: false,
        reason: "Adenocarcinoma is rare in the tongue.",
      },
      {
        answer: "Squamous cell carcinoma",
        answerKey: true,
        reason: "Over 90% of tongue cancers are squamous cell carcinoma.",
      },
      {
        answer: "Basal cell carcinoma",
        answerKey: false,
        reason: "Basal cell carcinoma occurs mainly in skin, not tongue.",
      },
      {
        answer: "Melanoma",
        answerKey: false,
        reason: "Oral melanoma is very rare.",
      },
      {
        answer: "Teratoma",
        answerKey: false,
        reason: "Teratomas are congenital tumors, not common in the tongue.",
      },
    ],
  },
  {
    id: 6,
    statement: "Basal cell carcinoma",
    choices: [
      {
        answer: "Common site is face and neck",
        answerKey: true,
        reason:
          "BCC commonly occurs in sun-exposed areas, especially face and neck.",
      },
      {
        answer: "Pearly nodule with central ulceration and telangiectasia",
        answerKey: true,
        reason:
          "Classic presentation of BCC includes pearly nodule with central ulcer and telangiectasia.",
      },
      {
        answer: "Is diagnosed by imaging",
        answerKey: false,
        reason:
          "Diagnosis is primarily clinical and confirmed by histopathology, not imaging.",
      },
      {
        answer:
          "Histological feature is 'Palisading' arrangement of tumor cells",
        answerKey: true,
        reason: "BCC histology shows peripheral palisading of tumor cells.",
      },
      {
        answer: "Treatment of choice is Surgery",
        answerKey: true,
        reason: "Surgical excision is standard treatment for BCC.",
      },
    ],
  },
  {
    id: 7,
    statement: "Regarding parenteral fluid therapy",
    choices: [
      {
        answer: "Plasma albumin is 20%",
        answerKey: false,
        reason:
          "Normal human plasma albumin is 4–5%; 20% albumin is a hyperoncotic solution used therapeutically.",
      },
      {
        answer: "5% dextrose in saline is hypotonic",
        answerKey: true,
        reason:
          "Dextrose 5% in 0.9% saline initially isotonic, but metabolized dextrose makes it effectively hypotonic.",
      },
      {
        answer:
          "Ringer's lactate contains sodium, potassium and chloride in about the same concentration as in plasma",
        answerKey: true,
        reason:
          "Ringer's lactate is isotonic and electrolyte composition resembles plasma.",
      },
      {
        answer: "Isotonic saline solution is 4.3% solution",
        answerKey: false,
        reason: "Normal isotonic saline is 0.9% NaCl, not 4.3%.",
      },
      {
        answer:
          "Prolonged administration of 5% dextrose can cause hyponatremia",
        answerKey: true,
        reason:
          "Metabolism of dextrose leaves free water, potentially causing dilutional hyponatremia.",
      },
    ],
  },
  {
    id: 8,
    statement: "Regarding enteral feeding",
    choices: [
      {
        answer:
          "Means delivery of nutrition into GI tract by means of tube feeding only",
        answerKey: false,
        reason:
          "Enteral feeding includes oral, nasogastric, or PEG tube feeding.",
      },
      {
        answer: "Is indicated in short bowel syndrome",
        answerKey: true,
        reason:
          "Enteral feeding supports nutrition when oral intake is insufficient, e.g., short bowel syndrome.",
      },
      {
        answer: "Elemental feed contains free amino acid",
        answerKey: true,
        reason:
          "Elemental feeds are predigested with free amino acids, glucose, and minimal fat.",
      },
      {
        answer:
          "Nasogastric tube feeding is suitable for prolong enteral feeding more than six weeks",
        answerKey: false,
        reason:
          "NG tubes are suitable short-term; PEG or surgical gastrostomy is preferred for >6 weeks.",
      },
      {
        answer: "Mineral and trace elements deficiency is common complication",
        answerKey: true,
        reason:
          "Deficiencies can occur if elemental or incomplete feeds are used long-term.",
      },
    ],
  },
  {
    id: 9,
    statement:
      "Which phase of wound healing is characterized by the formation of granulation tissue?",
    choices: [
      {
        answer: "Haemostasis",
        answerKey: false,
        reason: "Haemostasis involves clot formation, not granulation tissue.",
      },
      {
        answer: "Inflammatory phase",
        answerKey: false,
        reason:
          "Inflammation clears debris and pathogens; granulation forms later.",
      },
      {
        answer: "Proliferative phase",
        answerKey: true,
        reason:
          "Granulation tissue forms during the proliferative phase of healing.",
      },
      {
        answer: "Maturation phase",
        answerKey: false,
        reason:
          "Maturation/remodeling phase strengthens and remodels tissue; granulation already formed.",
      },
      {
        answer: "Remodeling phase",
        answerKey: false,
        reason: "Same as above; granulation tissue precedes remodeling.",
      },
    ],
  },
  {
    id: 10,
    statement:
      "Which of the following statements about inguinal hernia is TRUE?",
    choices: [
      {
        answer: "Inguinal hernias are more common in females than in males",
        answerKey: false,
        reason: "Inguinal hernias are more common in males.",
      },
      {
        answer: "Direct inguinal hernias pass through the deep inguinal ring",
        answerKey: false,
        reason:
          "Direct hernias pass through Hesselbach's triangle, not the deep inguinal ring.",
      },
      {
        answer:
          "Indirect inguinal hernias are congenital and often present at birth",
        answerKey: true,
        reason:
          "Indirect hernias result from a patent processus vaginalis and may present in childhood or later.",
      },
      {
        answer: "The inguinal canal is located above the inguinal ligament",
        answerKey: true,
        reason:
          "Correct anatomical location; inguinal canal runs obliquely above the ligament.",
      },
      {
        answer:
          "Inguinal hernias are more common than femoral hernias in females",
        answerKey: false,
        reason:
          "Femoral hernias are more common in females than inguinal hernias.",
      },
    ],
  },
  {
    id: 11,
    statement: "Hepatocellular Carcinoma",
    choices: [
      {
        answer: "Is due to chronic hepatitis C infection",
        answerKey: true,
        reason:
          "Chronic hepatitis B or C infection is a major risk factor for HCC.",
      },
      {
        answer: "Alpha fetoprotein more than 10 ng/ml is diagnostic",
        answerKey: false,
        reason:
          "AFP >400 ng/ml is more specific; 10 ng/ml is too low to be diagnostic.",
      },
      {
        answer: "Liver biopsy in necessary for tissue diagnosis",
        answerKey: false,
        reason:
          "Imaging and AFP can be diagnostic; biopsy is risky and not always needed.",
      },
      {
        answer:
          "Transarterial chemoembolization is one of palliative treatment",
        answerKey: true,
        reason: "TACE is used for unresectable HCC for palliation.",
      },
      {
        answer:
          "Liver transplant is contraindicated for tumour with distant metastasis",
        answerKey: true,
        reason: "Extrahepatic spread is a contraindication for transplant.",
      },
    ],
  },
  {
    id: 12,
    statement: "Regarding gall stones",
    choices: [
      {
        answer: "Most are visible on plain X Ray",
        answerKey: false,
        reason:
          "Only 10–20% of gallstones are radiopaque; most are radiolucent.",
      },
      {
        answer: "Pure cholesterol stones comprise less than 10% of gall stones",
        answerKey: false,
        reason: "Cholesterol stones are the most common type (about 75%).",
      },
      {
        answer: "Oestrogen facilitates the chance of stone formation",
        answerKey: true,
        reason:
          "Oestrogen increases cholesterol secretion in bile, promoting stones.",
      },
      {
        answer:
          "Clofibrate, a cholesterol-lowering agent inhibit stone formation",
        answerKey: false,
        reason: "Clofibrate may actually increase gallstone formation.",
      },
      {
        answer: "Bile pigment stones are formed from conjugated bilirubin",
        answerKey: false,
        reason: "Pigment stones form from unconjugated bilirubin.",
      },
    ],
  },
  {
    id: 13,
    statement: "Post-operative hypotension may be due to",
    choices: [
      {
        answer: "Sepsis",
        answerKey: true,
        reason:
          "Sepsis causes vasodilation and hypovolemia leading to hypotension.",
      },
      {
        answer: "Dopamine",
        answerKey: false,
        reason:
          "Dopamine is a vasopressor; it raises BP rather than causing hypotension.",
      },
      {
        answer: "Hypervolemia",
        answerKey: false,
        reason: "Excess fluid usually increases BP.",
      },
      {
        answer: "Hypoxia",
        answerKey: true,
        reason: "Severe hypoxia can cause cardiac depression and hypotension.",
      },
      {
        answer: "Pain",
        answerKey: false,
        reason: "Pain usually raises sympathetic tone, increasing BP.",
      },
    ],
  },
  {
    id: 14,
    statement: "Aseptic techniques include",
    choices: [
      {
        answer: "Hand washing",
        answerKey: true,
        reason: "Hand hygiene is fundamental to asepsis.",
      },
      {
        answer: "Wearing caps and mask",
        answerKey: true,
        reason: "Prevents microbial contamination in sterile field.",
      },
      {
        answer: "Broad spectrum antibiotics",
        answerKey: false,
        reason: "Antibiotics are therapeutic, not part of aseptic technique.",
      },
      {
        answer: "Control of air quality in operation theatre",
        answerKey: true,
        reason: "Air filtration reduces airborne contamination.",
      },
      {
        answer: "Appropriate operation",
        answerKey: false,
        reason:
          "Correct surgery choice is clinical decision; not an aseptic measure.",
      },
    ],
  },
  {
    id: 15,
    statement: "The causes of acute retention of urine are",
    choices: [
      {
        answer: "Urethral stricture",
        answerKey: true,
        reason: "Obstructs urine flow causing retention.",
      },
      {
        answer: "Anal pain",
        answerKey: false,
        reason: "Anal pain may cause hesitancy but rarely acute retention.",
      },
      {
        answer: "Spinal anaesthesia",
        answerKey: true,
        reason: "Can temporarily block bladder innervation, causing retention.",
      },
      {
        answer: "Acute orchitis",
        answerKey: false,
        reason: "May cause pain but rarely causes complete retention.",
      },
      {
        answer: "Retroverted gravid uterus",
        answerKey: true,
        reason: "Can compress urethra in early pregnancy, causing retention.",
      },
    ],
  },
  {
    id: 16,
    statement:
      "Essential investigations of men with lower urinary tract symptoms",
    choices: [
      {
        answer: "Urine analysis",
        answerKey: true,
        reason: "Detects infection, hematuria, or crystals causing LUTS.",
      },
      {
        answer: "Urine culture",
        answerKey: true,
        reason: "Identifies bacterial infection contributing to symptoms.",
      },
      {
        answer: "Prostate specific antigen",
        answerKey: true,
        reason: "Screening for prostate malignancy in men with LUTS.",
      },
      {
        answer: "Serum creatinine",
        answerKey: true,
        reason: "Assesses renal function, can be affected by obstruction.",
      },
      {
        answer: "Urinary flow rate and residual volume measurement",
        answerKey: true,
        reason: "Functional assessment of bladder emptying.",
      },
    ],
  },
  {
    id: 17,
    statement: "Indications for surgery of solitary thyroid nodule",
    choices: [
      {
        answer: "Cosmetics",
        answerKey: false,
        reason: "Cosmetic concerns alone are not strong surgical indications.",
      },
      {
        answer: "Patient wishes",
        answerKey: false,
        reason:
          "Patient preference alone is insufficient without clinical indication.",
      },
      {
        answer: "Malignancy",
        answerKey: true,
        reason:
          "Confirmed or suspected malignancy is an absolute indication for surgery.",
      },
      {
        answer: "Toxic adenoma",
        answerKey: true,
        reason:
          "Toxic adenomas are surgically removed if causing hyperthyroidism.",
      },
      {
        answer: "None of the above all else",
        answerKey: false,
        reason: "Some options are valid indications, so this is false.",
      },
    ],
  },
  {
    id: 18,
    statement: "Dysphagia",
    choices: [
      {
        answer: "Is meant by painful swallowing",
        answerKey: false,
        reason: "Dysphagia = difficulty swallowing, not necessarily painful.",
      },
      {
        answer: "Is usually associated with vomiting",
        answerKey: false,
        reason: "Vomiting is not a defining feature of dysphagia.",
      },
      {
        answer: "Is associated with chest infection",
        answerKey: true,
        reason: "Aspiration due to dysphagia can cause chest infection.",
      },
      {
        answer: "Is caused by esophageal varices",
        answerKey: false,
        reason: "Varices cause hematemesis, not dysphagia.",
      },
      {
        answer: "Can follow corrosive poisoning",
        answerKey: true,
        reason: "Corrosive injury to esophagus can cause long-term dysphagia.",
      },
    ],
  },
  {
    id: 19,
    statement: "Features associated with blood loss",
    choices: [
      {
        answer: "Palpitation",
        answerKey: true,
        reason: "Reflex tachycardia occurs due to hypovolemia.",
      },
      {
        answer: "Oedema",
        answerKey: false,
        reason: "Oedema is not an immediate sign of acute blood loss.",
      },
      {
        answer: "Air-hunger",
        answerKey: true,
        reason: "Hypoxia from anemia can cause dyspnea and air-hunger.",
      },
      {
        answer: "Fever",
        answerKey: false,
        reason: "Fever is unrelated to acute blood loss.",
      },
      {
        answer: "Polyuria",
        answerKey: false,
        reason: "Urine output typically decreases in hypovolemia.",
      },
    ],
  },
  {
    id: 20,
    statement: "Ischaemic ulcer",
    choices: [
      {
        answer: "Is caused by an inadequate blood supply",
        answerKey: true,
        reason:
          "By definition, ischemic ulcers result from arterial insufficiency.",
      },
      {
        answer: "Is not common in elderly",
        answerKey: false,
        reason:
          "Common in elderly due to atherosclerosis and peripheral vascular disease.",
      },
      {
        answer: "Is very painful",
        answerKey: true,
        reason: "Pain at rest is typical due to tissue ischemia.",
      },
      {
        answer: "Often get deeper and larger",
        answerKey: true,
        reason: "Poor perfusion causes slow healing and deep ulceration.",
      },
      {
        answer: "Associate with rest pain",
        answerKey: true,
        reason:
          "Critical limb ischemia presents with rest pain and ulceration.",
      },
    ],
  },
  {
    id: 21,
    statement: "Regarding cystic hygroma",
    choices: [
      {
        answer: "They present at puberty",
        answerKey: false,
        reason: "Usually present at birth or in early childhood.",
      },
      {
        answer: "They are brilliantly translucent",
        answerKey: true,
        reason: "Cystic hygromas are filled with clear lymphatic fluid.",
      },
      {
        answer: "They are firm on palpation",
        answerKey: false,
        reason: "They are soft and compressible.",
      },
      {
        answer: "Cosmetic concern is the only indication for surgery",
        answerKey: false,
        reason:
          "Indications include cosmetic, airway obstruction, or infection.",
      },
      {
        answer: "They follow a predictable growth pattern",
        answerKey: false,
        reason: "Growth can be unpredictable; may enlarge or remain static.",
      },
    ],
  },
  {
    id: 22,
    statement: "Gas gangrene",
    choices: [
      {
        answer: "Is caused by Clostridium perferingens",
        answerKey: true,
        reason: "C. perfringens is the most common causative organism.",
      },
      {
        answer: "Spores are present in the soil",
        answerKey: true,
        reason:
          "Clostridial spores are ubiquitous in soil and can infect wounds.",
      },
      {
        answer: "Thrives in anaerobic conditions and produces endotoxins",
        answerKey: false,
        reason: "It produces exotoxins, not endotoxins.",
      },
      {
        answer: "Treatment consists of oxygen and penicillin",
        answerKey: true,
        reason:
          "High-flow oxygen, penicillin, and surgical debridement are standard therapy.",
      },
      {
        answer: "Early amputation may be life-saving in severe cases",
        answerKey: true,
        reason:
          "Severe cases may require amputation to prevent systemic spread.",
      },
    ],
  },
  {
    id: 23,
    statement: "Courvoisier’s law",
    choices: [
      {
        answer: "The length of skin flap in skin grafting",
        answerKey: false,
        reason: "Unrelated to Courvoisier’s law.",
      },
      {
        answer: "Ureteric colic",
        answerKey: false,
        reason: "Unrelated to Courvoisier’s law.",
      },
      {
        answer: "Obstruction of the CBD",
        answerKey: true,
        reason:
          "Courvoisier’s law: palpable, non-tender gallbladder usually indicates malignant obstruction of CBD rather than stone.",
      },
      { answer: "Alveolar gases", answerKey: false, reason: "Unrelated." },
      {
        answer: "Fibroblastic response",
        answerKey: false,
        reason: "Unrelated.",
      },
    ],
  },
  {
    id: 24,
    statement: "Features of thyrotoxicosis",
    choices: [
      {
        answer: "Weight gain",
        answerKey: false,
        reason: "Thyrotoxicosis typically causes weight loss.",
      },
      {
        answer: "Palpitation",
        answerKey: true,
        reason: "Common symptom due to increased sympathetic activity.",
      },
      {
        answer: "Proximal myopathy",
        answerKey: true,
        reason: "Muscle weakness, especially proximal muscles, is a feature.",
      },
      {
        answer: "Increase skin pigmentation",
        answerKey: false,
        reason: "Not a feature; occurs in Addison’s disease.",
      },
      {
        answer: "Pretibial myxedema",
        answerKey: true,
        reason: "Occurs in Graves’ disease, a form of thyrotoxicosis.",
      },
    ],
  },
  {
    id: 25,
    statement: "Routine preoperative preparation of colorectal cancer includes",
    choices: [
      {
        answer: "Mechanical bowel preparation",
        answerKey: true,
        reason: "Reduces fecal load to lower risk of infection.",
      },
      {
        answer: "Counselling and siting of stoma",
        answerKey: true,
        reason: "Essential for patients likely to need a stoma.",
      },
      {
        answer: "Radiotherapy",
        answerKey: true,
        reason: "Neoadjuvant radiotherapy may be required for rectal cancer.",
      },
      {
        answer: "Prophylactic antibiotics",
        answerKey: true,
        reason: "Reduces postoperative infection risk.",
      },
      {
        answer: "Prophylaxis for deep vein thrombosis",
        answerKey: true,
        reason: "Prevents postoperative thromboembolic complications.",
      },
    ],
  },
  {
    id: 26,
    statement: "ANDI of breast",
    choices: [
      {
        answer: "May present as an area of lumpiness",
        answerKey: true,
        reason: "Fibrocystic changes present as diffuse lumpiness.",
      },
      {
        answer: "Symptoms include mastalgia",
        answerKey: true,
        reason: "Pain is a common feature.",
      },
      {
        answer: "Change may be cyclical",
        answerKey: true,
        reason: "Fluctuates with menstrual cycle.",
      },
      {
        answer:
          "Hyperplasia of epithelium in the linings of duct and acini may occur",
        answerKey: true,
        reason: "Histological feature of ANDI.",
      },
      {
        answer: "May change into malignancy",
        answerKey: false,
        reason:
          "Most ANDI are benign; only atypical hyperplasia carries slight risk.",
      },
    ],
  },
  {
    id: 27,
    statement: "Aspects of Glasgow coma scale",
    choices: [
      { answer: "Tongue tremor", answerKey: false, reason: "Not part of GCS." },
      {
        answer: "Verbal response",
        answerKey: true,
        reason: "One of three components of GCS (Eye, Verbal, Motor).",
      },
      {
        answer: "The extensor plantar reflex",
        answerKey: false,
        reason: "Babinski reflex is not part of GCS.",
      },
      {
        answer: "Motor response",
        answerKey: true,
        reason: "Motor component of GCS.",
      },
      {
        answer: "Eye opening",
        answerKey: true,
        reason: "Eye opening is the third component of GCS.",
      },
    ],
  },
  {
    id: 28,
    statement: "Recognized association with carcinoma stomach",
    choices: [
      {
        answer: "Krukenberg’s tumours",
        answerKey: true,
        reason: "Ovarian metastases from gastric adenocarcinoma.",
      },
      {
        answer: "Blood group ‘A’",
        answerKey: true,
        reason: "Higher risk of gastric cancer in blood group A.",
      },
      {
        answer: "Troisier’s sign",
        answerKey: true,
        reason:
          "Left supraclavicular lymph node enlargement indicates gastric malignancy.",
      },
      {
        answer: "Linitis plastica",
        answerKey: true,
        reason: "Diffuse infiltrative type of gastric carcinoma.",
      },
      {
        answer: "Volvulus of the stomach",
        answerKey: false,
        reason: "Not associated with gastric cancer.",
      },
    ],
  },
  {
    id: 29,
    statement: "An anal fissure",
    choices: [
      {
        answer: "Is an ulcer of the anal mucosa",
        answerKey: true,
        reason: "Fissure is a tear/ulcer of anoderm or anal mucosa.",
      },
      {
        answer: "Usually lies anteriorly",
        answerKey: false,
        reason: "Most fissures are posterior in adults.",
      },
      {
        answer: "May be associated with hypertrophied skin tag",
        answerKey: true,
        reason: "Chronic fissures often have sentinel skin tag.",
      },
      {
        answer: "Is more common in man",
        answerKey: true,
        reason: "Anal fissures are slightly more common in males.",
      },
      {
        answer:
          "Can always be treated successfully with conservative treatment",
        answerKey: false,
        reason: "Some chronic fissures require surgical intervention.",
      },
    ],
  },
  {
    id: 30,
    statement: "Features of obstructed jaundice",
    choices: [
      {
        answer: "Marked increase alkaline phosphatase",
        answerKey: true,
        reason: "ALP rises significantly in cholestatic obstruction.",
      },
      {
        answer: "Marked increase in liver enzymes such as AST, ALT",
        answerKey: false,
        reason: "AST/ALT elevation is usually mild, not marked.",
      },
      {
        answer: "Clay coloured stool",
        answerKey: true,
        reason: "Biliary obstruction reduces stercobilin, causing pale stools.",
      },
      {
        answer: "Dilated biliary tree on ultrasonic examination",
        answerKey: true,
        reason:
          "Ultrasound shows dilated intra/extrahepatic ducts in obstruction.",
      },
      {
        answer: "Presence of HBsAg",
        answerKey: false,
        reason: "HBsAg indicates hepatitis B, unrelated to obstruction.",
      },
    ],
  },
];

export default SURGERY_UMM_GROUP_4;
