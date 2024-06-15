export default {
  "*": { type: "page" },
  index: {
    title: "Home",
    display: "hidden",
    theme: {
      typesetting: "article",
      toc: false,
      sidebar: false,
      breadcrumb: false,
      pagination: false,
    },
  },
  "pre-block": {
    title: "Pre-Block",
    type: "menu",
    items: {
      ophthalmology: {
        title: "Ophthalmology",
        href: "/pre-block/ophthalmology",
      },
      ent: {
        title: "Ear-Nose-Throat",
        href: "/pre-block/ent",
      },
      anaesthesia: {
        title: "Anaesthesia",
        href: "/pre-block/anaesthesia",
      },
      radiology: {
        title: "Radiology",
        href: "/pre-block/radiology",
      },
    },
  },
  medicine: "Medicine",
  og: "Obstetric & Gynaecology",
  pediatrics: "Pediatrics",
};
