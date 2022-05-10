export const getTableHeaders = (contentType) => {
  if (contentType === "employeePreview") {
    return [
      {
        key: "name",
        value: "Ime",
      },
      {
        key: "surname",
        value: "Prezime",
      },
      {
        key: "lbz",
        value: "LBZ",
      },
      {
        key: "contact",
        value: "Kontakt",
      },
      {
        key: "email",
        value: "Email",
      },
      {
        key: "title",
        value: "Titula",
      },
      {
        key: "profession",
        value: "Zanimanje",
      },
      {
        key: "department",
        value: "Odeljenje",
      },
    ];
  } else if (contentType === "patientPreview") {
    return [
      {
        key: "ime",
        value: "Ime",
      },
      {
        key: "prezime",
        value: "Prezime",
      },
      {
        key: "kontaktTelefon",
        value: "Kontakt",
      },
      {
        key: "email",
        value: "Email",
      },
      // {
      //   key: "zanimanje",
      //   value: "Zanimanje",
      // },
      {
        key: "lbp",
        value: "LBP",
      },
    ];
  } else if (contentType === "examinationHistory") {
    return [
      {
        key: "datumPregleda",
        value: "Datum",
      },
      {
        key: "glavneTegobe",
        value: "Glavne tegobe",
      },
      {
        key: "objektivniNalaz",
        value: "Objektivni nalaz",
      },
    ];
  } else if (contentType === "diseaseHistory") {
    return [
      {
        key: "dijagnoza",
        value: "Dijagnoza",
      },
      {
        key: "pocetak",
        value: "Pocetak",
      },
      {
        key: "zavrsetak",
        value: "Zavrsetak",
      },
      {
        key: "rezultatLecenja",
        value: "Rezultat lecenja",
      },
      {
        key: "tekuceStanje",
        value: "Tekuce stanje",
      },
      {
        key: "validanOd",
        value: "Validan od",
      },
      {
        key: "validanDo",
        value: "Validan do",
      },
    ];
  } else if (contentType === "labReportPreview") {
    return [
      {
        key: "id",
        value: "ID izvestaja",
      },
      {
        key: "lbpPacijenta",
        value: "LBP",
      },
      {
        key: "ime",
        value: "Ime",
      },
      {
        key: "prezime",
        value: "Prezime",
      },
    ];
  } else if (contentType === "unrealizedLabReports") {
    return [
      {
        key: "id",
        value: "ID izvestaja",
      },
      {
        key: "ime",
        value: "Ime",
      },
      {
        key: "prezime",
        value: "Prezime",
      },
      {
        key: "datum",
        value: "Datum",
      },
      {
        key: "vreme",
        value: "Vreme",
      },
      {
        key: "odeljenje",
        value: "Odeljenje",
      },
      {
        key: "spisakAnaliza",
        value: "spisakAnaliza",
      },
      {
        key: "komentar",
        value: "Komentar",
      },
    ];
  }
  return [];
};
