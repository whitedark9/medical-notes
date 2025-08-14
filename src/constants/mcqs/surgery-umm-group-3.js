const SURGERY_UMM_GROUP_3 = [
  {
    id: 1,
    statement: "Patients with osteoarthritis of the hip",
    choices: [
      {
        answer: "May present with pain in the knee",
        answerKey: true,
        reason: "Hip OA can cause referred pain to the knee.",
      },
      {
        answer: "May benefit from osteotomy",
        answerKey: true,
        reason:
          "Osteotomy can be used in younger patients to realign joint and delay arthroplasty.",
      },
      {
        answer: "Have a wide joint spaces on X-ray due to bony destruction",
        answerKey: false,
        reason:
          "OA typically shows **narrowed** joint spaces due to cartilage loss.",
      },
      {
        answer: "Rarely suffer pain when resting at night",
        answerKey: true,
        reason:
          "Mild OA pain may improve at rest, though severe cases can disturb sleep.",
      },
      {
        answer:
          "Suffer joint stiffness and pain that is often worse in the morning",
        answerKey: false,
        reason:
          "OA stiffness usually improves with activity; morning stiffness is brief (\\<30 min) compared to inflammatory arthritis.",
      },
    ],
  },
  {
    id: 2,
    statement: "Regarding thyrotoxicosis",
    choices: [
      {
        answer: "It is the usual sequel of Hashimoto’s disease",
        answerKey: false,
        reason:
          "Hashimoto’s usually causes hypothyroidism, not thyrotoxicosis.",
      },
      {
        answer: "It increases vascularity of the thyroid gland",
        answerKey: true,
        reason: "Hyperthyroidism increases thyroid blood flow.",
      },
      {
        answer: "Graves’ disease is the result of excess pituitary TSH",
        answerKey: false,
        reason:
          "Graves’ is due to TSH receptor antibodies, not pituitary TSH excess.",
      },
      {
        answer: "It may cause cardiac arrhythmias",
        answerKey: true,
        reason: "Atrial fibrillation is common in thyrotoxicosis.",
      },
      {
        answer: "It can be caused by solitary cold nodule",
        answerKey: false,
        reason:
          "Cold nodules are non-functioning and usually do not cause thyrotoxicosis.",
      },
    ],
  },
  {
    id: 3,
    statement: "Regarding Buerger’s disease (thromboangitis obliterans)",
    choices: [
      {
        answer:
          "It is the occlusion disease of the end arterioles of the extremities",
        answerKey: true,
        reason:
          "Buerger’s affects small and medium arteries and veins of extremities.",
      },
      {
        answer: "It causes an acute ischaemia of the lower limb",
        answerKey: false,
        reason: "It usually causes **chronic** ischemia, not acute.",
      },
      {
        answer: "It affects male under 40",
        answerKey: true,
        reason: "Typically affects young male smokers under 40.",
      },
      {
        answer: "Intermittent claudication is the common presentation",
        answerKey: true,
        reason: "Claudication is the usual initial symptom.",
      },
      {
        answer: "Femoral-popliteal bypass is the beneficial procedure",
        answerKey: false,
        reason: "Bypass is rarely feasible due to distal vessel involvement.",
      },
    ],
  },
  {
    id: 4,
    statement: "Causes of acute pancreatitis include",
    choices: [
      {
        answer: "Alcoholism",
        answerKey: true,
        reason: "Alcohol is a common cause of acute pancreatitis.",
      },
      {
        answer: "Trauma",
        answerKey: true,
        reason: "Blunt abdominal trauma can precipitate pancreatitis.",
      },
      {
        answer: "Hypercalcaemia",
        answerKey: true,
        reason: "High calcium can trigger pancreatic enzyme activation.",
      },
      {
        answer: "Hyperparathyroidism",
        answerKey: true,
        reason:
          "Secondary hypercalcemia from hyperparathyroidism can precipitate pancreatitis.",
      },
      {
        answer: "ERCP",
        answerKey: true,
        reason: "ERCP can induce iatrogenic pancreatitis.",
      },
    ],
  },
  {
    id: 5,
    statement:
      "Precipitating physiological events to the metabolic response to injury include",
    choices: [
      {
        answer: "Hypothermia",
        answerKey: true,
        reason: "Hypothermia worsens metabolic stress response.",
      },
      {
        answer: "Tissue oedema",
        answerKey: true,
        reason: "Tissue injury and edema increase metabolic response.",
      },
      {
        answer: "Early mobilization",
        answerKey: false,
        reason: "Early mobilization is beneficial, not a precipitating factor.",
      },
      {
        answer: "Starvation",
        answerKey: true,
        reason: "Starvation exaggerates catabolic response to injury.",
      },
      {
        answer: "Continuing haemorrhage",
        answerKey: true,
        reason: "Ongoing blood loss increases stress response.",
      },
    ],
  },
  {
    id: 6,
    statement:
      "Management of the unconscious patient with a head injury includes",
    choices: [
      {
        answer: "The patient being nursed in a darkened room",
        answerKey: false,
        reason: "Not essential; focus is on airway, breathing, circulation.",
      },
      {
        answer: "An x-ray of the skull",
        answerKey: false,
        reason: "CT is preferred; skull X-ray is rarely diagnostic.",
      },
      {
        answer: "The patient being nursed strictly in the supine position",
        answerKey: false,
        reason: "Head elevation is recommended to reduce ICP.",
      },
      {
        answer: "Immediate tracheostomy",
        answerKey: false,
        reason:
          "Tracheostomy is only indicated if prolonged airway management required.",
      },
      {
        answer: "Using coma scale",
        answerKey: true,
        reason:
          "GCS assessment is essential to monitor level of consciousness.",
      },
    ],
  },
  {
    id: 7,
    statement: "Carcinoma of the stomach",
    choices: [
      {
        answer: "Is associated with low acidity",
        answerKey: true,
        reason:
          "Chronic gastritis leading to hypochlorhydria is linked to gastric cancer.",
      },
      {
        answer: "Is common in blood group ‘o’",
        answerKey: false,
        reason: "More common in blood group A.",
      },
      {
        answer: "Can present with mass in epigastrium",
        answerKey: true,
        reason: "Advanced cancer may form a palpable mass.",
      },
      {
        answer: "Can present with anaemia",
        answerKey: true,
        reason: "Chronic blood loss can lead to iron-deficiency anemia.",
      },
      {
        answer: "Is more common in women",
        answerKey: false,
        reason: "Gastric carcinoma is more common in men.",
      },
    ],
  },
  {
    id: 8,
    statement: "BPH",
    choices: [
      {
        answer: "Can be assessed by PR examination",
        answerKey: true,
        reason: "Digital rectal exam allows prostate size estimation.",
      },
      {
        answer: "Is a pre-malignant condition",
        answerKey: false,
        reason: "BPH is benign; not pre-malignant.",
      },
      {
        answer: "Usually produce abnormalities in KUB X-ray",
        answerKey: false,
        reason: "KUB X-ray is not useful for BPH diagnosis.",
      },
      {
        answer: "Is treated by TURP",
        answerKey: true,
        reason:
          "Transurethral resection of prostate is standard surgical treatment.",
      },
      {
        answer: "Is treated by drugs such as beta blockers",
        answerKey: false,
        reason:
          "Drugs like alpha-blockers and 5-alpha-reductase inhibitors are used; beta blockers are not.",
      },
    ],
  },
  {
    id: 9,
    statement: "Clinical features of shock include",
    choices: [
      {
        answer: "Low cardiac output",
        answerKey: true,
        reason:
          "Shock is characterized by inadequate tissue perfusion, often with low cardiac output.",
      },
      {
        answer: "A rapid thready pulse",
        answerKey: true,
        reason: "Tachycardia with weak pulse is typical.",
      },
      {
        answer: "Decreased respiratory rate",
        answerKey: false,
        reason: "Respiratory rate is usually increased due to compensation.",
      },
      {
        answer: "Fall in urine output",
        answerKey: true,
        reason: "Oliguria occurs due to hypoperfusion.",
      },
      {
        answer: "Warm clammy extremities",
        answerKey: true,
        reason:
          "Peripheral vasoconstriction and cool extremities are common in hypovolemic/ cardiogenic shock; distributive shock may be warm.",
      },
    ],
  },
  {
    id: 10,
    statement: "In the management of cardiac arrest",
    choices: [
      {
        answer: "Airway must be patent",
        answerKey: true,
        reason: "Airway management is crucial for oxygenation.",
      },
      {
        answer:
          "Resuscitation should be started only when an assistant is present",
        answerKey: false,
        reason: "Immediate CPR is required; do not wait for help.",
      },
      {
        answer: "Endotracheal tube may be inserted",
        answerKey: true,
        reason: "Advanced airway can be used if trained personnel available.",
      },
      {
        answer: "ECG should be done",
        answerKey: true,
        reason: "To identify cardiac rhythm and guide treatment.",
      },
      {
        answer: "Pulse is checked by palpating the radial artery",
        answerKey: false,
        reason: "Central pulse (carotid) is preferred; radial may be absent.",
      },
    ],
  },
  {
    id: 11,
    statement: "Dysphagia",
    choices: [
      {
        answer: "Is meant by painful swallowing",
        answerKey: false,
        reason:
          "Dysphagia = difficulty swallowing; painful swallowing = odynophagia.",
      },
      {
        answer: "Is usually associated with vomiting",
        answerKey: false,
        reason: "Vomiting is not a defining feature.",
      },
      {
        answer: "Is associated with chest infection",
        answerKey: false,
        reason: "Aspiration may occur but not defining feature.",
      },
      {
        answer: "Is caused by esophageal varices",
        answerKey: false,
        reason: "Varices usually cause bleeding, not dysphagia.",
      },
      {
        answer: "Can follow corrosive poisoning",
        answerKey: true,
        reason:
          "Esophageal injury from corrosives can cause strictures and dysphagia.",
      },
    ],
  },
  {
    id: 12,
    statement: "Complications of groin hernias",
    choices: [
      {
        answer: "Irreducibility",
        answerKey: true,
        reason: "Incarceration is a common complication.",
      },
      {
        answer: "Obstruction",
        answerKey: true,
        reason: "Bowel obstruction can result from hernia incarceration.",
      },
      {
        answer: "Strangulation",
        answerKey: true,
        reason: "Strangulation leads to ischemia and necrosis.",
      },
      {
        answer: "Strangulation of colon",
        answerKey: false,
        reason: "Usually small bowel is involved; colon rarely strangulated.",
      },
      {
        answer: "Gangrene of skin",
        answerKey: false,
        reason: "Skin gangrene is rare; deeper tissues more commonly affected.",
      },
    ],
  },
  {
    id: 13,
    statement: "Fracture neck of femur",
    choices: [
      {
        answer: "Occur most commonly in elderly female",
        answerKey: true,
        reason:
          "Osteoporotic fractures of femoral neck are common in elderly women.",
      },
      {
        answer: "Present with pain and internally rotated limb",
        answerKey: false,
        reason: "Classic presentation: shortened, externally rotated limb.",
      },
      {
        answer: "Is best treated by early internal fixation",
        answerKey: false,
        reason:
          "Displaced fractures in elderly are usually treated with arthroplasty.",
      },
      {
        answer: "Is associated with 30-days mortality of about 30%",
        answerKey: false,
        reason:
          "30-day mortality is lower (~5–10%), 1-year mortality is higher (~30%).",
      },
      {
        answer: "Requires prolonged bed rest",
        answerKey: false,
        reason:
          "Early mobilization post-surgery is preferred to reduce complications.",
      },
    ],
  },
  {
    id: 14,
    statement: "A fistula will persist if",
    choices: [
      {
        answer: "A foreign body is present",
        answerKey: true,
        reason: "Foreign material prevents healing.",
      },
      {
        answer: "Tuberculosis is present",
        answerKey: true,
        reason: "TB fistulae persist without specific therapy.",
      },
      {
        answer: "The wall becomes lined with epithelium",
        answerKey: true,
        reason: "Epithelialization prevents closure.",
      },
      {
        answer: "There is unrelieved obstruction proximal to the fistula",
        answerKey: true,
        reason: "Obstruction maintains fistula output.",
      },
      {
        answer: "Intervening abscess cavity present",
        answerKey: true,
        reason: "Abscess prevents closure and promotes persistent fistula.",
      },
    ],
  },
  {
    id: 15,
    statement: "Varicose veins",
    choices: [
      {
        answer: "Occur more frequently in men than women",
        answerKey: false,
        reason: "Varicose veins are more common in women.",
      },
      {
        answer: "May be associated with chronic skin disease",
        answerKey: true,
        reason:
          "Chronic venous insufficiency may cause eczema or pigmentation.",
      },
      {
        answer: "In thigh may be treated with injection sclerotherapy",
        answerKey: true,
        reason: "Sclerotherapy is used for superficial varicosities.",
      },
      {
        answer: "May be associated with chronic leg ulceration",
        answerKey: true,
        reason: "Long-standing venous hypertension may cause ulceration.",
      },
      {
        answer: "May be tested clinically using trendelenberg test",
        answerKey: true,
        reason: "Trendelenburg test assesses valvular incompetence.",
      },
    ],
  },
  {
    id: 16,
    statement: "Regarding peptic ulceration",
    choices: [
      {
        answer: "H. pylori is a gram-positive bacillus",
        answerKey: false,
        reason: "H. pylori is a **gram-negative** curved bacillus.",
      },
      {
        answer: "Duodenal is more common than gastric ulceration",
        answerKey: true,
        reason: "Duodenal ulcers are more common than gastric ulcers.",
      },
      {
        answer:
          "Zollinger-Ellison syndrome is associated with gastrin hypo-secretion",
        answerKey: false,
        reason: "It is associated with **gastrin hypersecretion**.",
      },
      {
        answer: "H2-blockers will heal 85-95% of duodenal ulcers in 8 weeks",
        answerKey: true,
        reason:
          "H2 blockers are effective in healing most duodenal ulcers within 6–8 weeks.",
      },
      {
        answer:
          "Triple therapy can eradicate H. Pylori in 80% of patients in one week",
        answerKey: false,
        reason:
          "Triple therapy usually requires 1–2 weeks for 80–90% eradication.",
      },
    ],
  },
  {
    id: 17,
    statement: "Post-op complication after subtotal thyroidectomy includes",
    choices: [
      {
        answer: "Upper airway obstruction",
        answerKey: true,
        reason: "Swelling or hematoma may compress airway postoperatively.",
      },
      {
        answer: "Superior laryngeal nerve palsy",
        answerKey: true,
        reason: "Can occur due to nerve injury during surgery.",
      },
      {
        answer: "Ptosis of one eye lid",
        answerKey: false,
        reason: "Not related to thyroid surgery.",
      },
      {
        answer: "High fever",
        answerKey: false,
        reason: "Fever is not a typical complication unless infection occurs.",
      },
      {
        answer: "Hypothyroidism",
        answerKey: true,
        reason:
          "Subtotal thyroidectomy can reduce thyroid function causing hypothyroidism.",
      },
    ],
  },
  {
    id: 18,
    statement: "Risk factors for perforation of appendix",
    choices: [
      {
        answer: "Extreme of age",
        answerKey: true,
        reason:
          "Very young and elderly patients have higher risk of perforation.",
      },
      {
        answer: "Diabetes mellitus",
        answerKey: true,
        reason: "Immunocompromised states increase risk of complications.",
      },
      {
        answer: "Faecolith obstruction",
        answerKey: true,
        reason:
          "Obstruction promotes increased intraluminal pressure leading to perforation.",
      },
      {
        answer: "Retrocaecal appendix",
        answerKey: false,
        reason:
          "Position may delay diagnosis but does not directly increase perforation risk.",
      },
      {
        answer: "Immunosuppression",
        answerKey: true,
        reason: "Reduced immune response increases risk of perforation.",
      },
    ],
  },
  {
    id: 19,
    statement: "Basal cell carcinoma",
    choices: [
      {
        answer: "Common site is face and neck",
        answerKey: true,
        reason: "BCC predominantly occurs in sun-exposed areas.",
      },
      {
        answer: "Pearly nodule with central ulceration and telangiectasia",
        answerKey: true,
        reason: "Classical clinical appearance.",
      },
      {
        answer: "Is diagnosed by imaging",
        answerKey: false,
        reason: "Diagnosis is confirmed by biopsy, not imaging.",
      },
      {
        answer:
          "Histological feature is 'Palisading' arrangement of tumor cells",
        answerKey: true,
        reason: "Characteristic histopathological finding.",
      },
      {
        answer: "Treatment of choice is Surgery",
        answerKey: true,
        reason: "Surgical excision is standard treatment.",
      },
    ],
  },
  {
    id: 20,
    statement: "Methods applicable in control of bleeding esophageal varices",
    choices: [
      {
        answer: "Pitressin drip",
        answerKey: true,
        reason: "Vasopressin analogues reduce portal hypertension.",
      },
      {
        answer: "Sengstaken Blakemore tube",
        answerKey: true,
        reason: "Mechanical tamponade controls acute variceal bleeding.",
      },
      {
        answer: "Fogarty catheter to occlude the varices directly",
        answerKey: false,
        reason: "Not a standard method for varices.",
      },
      {
        answer: "Parenteral infusion of propranolol",
        answerKey: true,
        reason: "Beta blockers reduce portal pressure and prevent rebleeding.",
      },
      {
        answer: "Esophageal transection in the lower 5 cm of the oesophagus",
        answerKey: false,
        reason:
          "Surgical transection is rarely performed now; endoscopic therapy preferred.",
      },
    ],
  },
  {
    id: 21,
    statement: "General effects of burn injury",
    choices: [
      {
        answer: "Are independent of the size of the burn area",
        answerKey: false,
        reason: "Severity depends on total body surface area burned.",
      },
      {
        answer: "Include immune suppression",
        answerKey: true,
        reason: "Burns impair immune response.",
      },
      {
        answer: "Result in decreased urinary nitrogen concentrations",
        answerKey: false,
        reason:
          "Burns cause **catabolic state**, increasing nitrogen excretion.",
      },
      {
        answer: "Include hypoalbuminemia",
        answerKey: true,
        reason: "Protein loss occurs due to fluid shifts and catabolism.",
      },
      {
        answer: "Include hyponatremia",
        answerKey: true,
        reason: "Fluid shifts and resuscitation may lead to hyponatremia.",
      },
    ],
  },
  {
    id: 22,
    statement: "ANDI of breast",
    choices: [
      {
        answer: "May present as an area of lumpiness",
        answerKey: true,
        reason: "Fibrocystic changes often cause lumpiness.",
      },
      {
        answer: "Symptoms include mastalgia",
        answerKey: true,
        reason: "Pain is a common symptom of ANDI.",
      },
      {
        answer: "Change may be cyclical",
        answerKey: true,
        reason: "Cyclical changes relate to menstrual cycle.",
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
          "Most ANDI changes are benign; some hyperplasia with atypia may increase risk.",
      },
    ],
  },
  {
    id: 23,
    statement: "Indications for circumcision",
    choices: [
      {
        answer: "Repeated balanoposthitis",
        answerKey: true,
        reason: "Recurrent infections are a standard indication.",
      },
      {
        answer: "Para-phimosis",
        answerKey: true,
        reason: "Surgical intervention required for phimosis or paraphimosis.",
      },
      {
        answer: "Religion",
        answerKey: true,
        reason: "Religious or cultural reasons are accepted indications.",
      },
      {
        answer: "Hypospadias",
        answerKey: false,
        reason:
          "Hypospadias requires repair, not circumcision as primary treatment.",
      },
      {
        answer: "Meatal ulcer",
        answerKey: true,
        reason: "Persistent meatal lesions may justify circumcision.",
      },
    ],
  },
  {
    id: 24,
    statement: "Viable intestine at operation has",
    choices: [
      {
        answer: "Persistent dark color after oxygenation",
        answerKey: false,
        reason: "Viable intestine should regain pink color.",
      },
      {
        answer: "No bleeding",
        answerKey: false,
        reason: "Bleeding from cut edges indicates viability.",
      },
      {
        answer: "Shiny peritoneum",
        answerKey: true,
        reason: "Healthy intestine appears glistening and shiny.",
      },
      {
        answer: "Peristaltic waves",
        answerKey: true,
        reason: "Peristalsis indicates functional viability.",
      },
      {
        answer: "Flabby, thin and friable look",
        answerKey: false,
        reason: "Flabby, friable bowel indicates ischemia.",
      },
    ],
  },
  {
    id: 25,
    statement: "Aspects of Glasgow coma scale",
    choices: [
      {
        answer: "Tongue tremor",
        answerKey: false,
        reason: "Not part of GCS scoring.",
      },
      {
        answer: "Verbal response",
        answerKey: true,
        reason: "Part of GCS scoring (V1–V5).",
      },
      {
        answer: "The extensor planter reflex",
        answerKey: false,
        reason: "Babinski reflex is not part of GCS.",
      },
      {
        answer: "Motor response",
        answerKey: true,
        reason: "Part of GCS scoring (M1–M6).",
      },
      {
        answer: "Eye opening",
        answerKey: true,
        reason: "Part of GCS scoring (E1–E4).",
      },
    ],
  },
  {
    id: 26,
    statement: "An anal fissure",
    choices: [
      {
        answer: "Is an ulcer of the anal mucosa",
        answerKey: true,
        reason: "Definition of anal fissure.",
      },
      {
        answer: "Usually lies anteriorly",
        answerKey: false,
        reason: "Most fissures occur posteriorly.",
      },
      {
        answer: "May be associated with hypertrophied skin tag",
        answerKey: true,
        reason: "Chronic fissures often have sentinel skin tags.",
      },
      {
        answer: "Is more common in man",
        answerKey: true,
        reason: "Males are more frequently affected.",
      },
      {
        answer:
          "Can always be treated successfully with conservative treatment",
        answerKey: false,
        reason: "Some chronic fissures require surgery.",
      },
    ],
  },
  {
    id: 27,
    statement: "Wound dehiscence",
    choices: [
      {
        answer: "Usually occurs in transverse wounds",
        answerKey: false,
        reason: "More common in midline laparotomy incisions.",
      },
      {
        answer: "May occurs because of anastomotic leakage",
        answerKey: true,
        reason: "Leakage can weaken closure causing dehiscence.",
      },
      {
        answer: "Happens more in diabetic patient",
        answerKey: true,
        reason: "Poor healing increases risk.",
      },
      {
        answer: "Can develop incisional hernia",
        answerKey: true,
        reason: "Dehiscence can lead to hernia formation.",
      },
      {
        answer: "Occurs more often in smokers",
        answerKey: true,
        reason: "Smoking impairs wound healing.",
      },
    ],
  },
  {
    id: 28,
    statement: "Carbuncle",
    choices: [
      {
        answer: "Commonly occurs in cheek",
        answerKey: false,
        reason: "Usually occurs on back of neck, upper back or thighs.",
      },
      {
        answer: "Is infection of hair follicle",
        answerKey: true,
        reason: "It is a deep abscess involving multiple follicles.",
      },
      {
        answer: "Is usually associated with diabetes mellitus",
        answerKey: true,
        reason: "Diabetes increases susceptibility.",
      },
      {
        answer: "Needs surgical intervention",
        answerKey: true,
        reason: "Incision and drainage is often required.",
      },
      {
        answer: "Is one example of infective gangrene",
        answerKey: false,
        reason: "It is not gangrenous infection.",
      },
    ],
  },
  {
    id: 29,
    statement: "Complications from massive blood transfusion",
    choices: [
      {
        answer: "Coagulopathy",
        answerKey: true,
        reason: "Dilutional coagulopathy can occur with massive transfusion.",
      },
      {
        answer: "Hypothermia",
        answerKey: true,
        reason: "Transfusion of cold blood can lower body temperature.",
      },
      {
        answer: "Hyperkalaemia",
        answerKey: true,
        reason: "Stored blood may release potassium.",
      },
      {
        answer: "Hypokalaemia",
        answerKey: false,
        reason: "Not typical; hyperkalemia is more common.",
      },
      {
        answer: "Hypercalcemia",
        answerKey: false,
        reason:
          "Citrate in stored blood chelates calcium, causing hypocalcemia, not hypercalcemia.",
      },
    ],
  },
  {
    id: 30,
    statement: "Gas gangrene",
    choices: [
      {
        answer: "Is caused by Clostridium perferingens",
        answerKey: true,
        reason: "Most common causative organism.",
      },
      {
        answer: "Spores are present in the soil",
        answerKey: true,
        reason: "Clostridial spores are ubiquitous in soil.",
      },
      {
        answer: "Thrives in anaerobic conditions and produces endotoxins",
        answerKey: false,
        reason: "It produces exotoxins, not endotoxins.",
      },
      {
        answer: "Treatment consists of oxygen and penicillin",
        answerKey: true,
        reason: "High-flow oxygen and penicillin are mainstay treatments.",
      },
      {
        answer: "Early amputation may be life-saving in severe cases",
        answerKey: true,
        reason: "Severe limb involvement may require surgical removal.",
      },
    ],
  },
];

export default SURGERY_UMM_GROUP_3;
