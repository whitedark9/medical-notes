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
  "pre-bloc": {
    title: "Pre-Bloc",
    type: "menu",
    items: {
      ophthalmology: {
        title: "Ophthalmology",
        href: "/pre-bloc/ophthalmology",
      },
      ent: {
        title: "Ear-Nose-Throat",
        href: "/pre-bloc/ent",
      },
      anaesthesia: {
        title: "Anaesthesia",
        href: "/pre-bloc/anaesthesia",
      },
      radiology: {
        title: "Radiology",
        href: "/pre-bloc/radiology",
      },
      psychiatry: {
        title: "Psychiatry",
        href: "/pre-bloc/psychiatry",
      },
    },
  },
  bloc: {
    title: "Bloc",
    type: "menu",
    items: {
      medicine: {
        title: "Medicine",
        href: "/bloc/medicine",
      },
      og: {
        title: "Obstetric & Gynaecology",
        href: "/bloc/og",
      },
      paediatry: {
        title: "Paediatry",
        href: "/bloc/paediatry",
      },
      surgery: {
        title: "Surgery",
        href: "/bloc/surgery",
      },
    },
  },
};
