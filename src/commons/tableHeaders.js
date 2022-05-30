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
        value: "Dijagndoza",
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
  } else if (contentType === "scheduledVisits") {
    return [
      {
        key: "zakazanLaboratorijskiPregledId",
        value: "Id",
      },
      {
        key: "lbp",
        value: "LBP",
      },
      {
        key: "lbz",
        value: "LBZ",
      },
      {
        key: "odeljenjeId",
        value: "Id odeljenja",
      },
      {
        key: "zakazanDatum",
        value: "Datum pregleda",
      },
      {
        key: "statusPregleda",
        value: "Status pregleda",
      },
      {
        key: "napomena",
        value: "Napomena",
      },
    ];
  } else if (contentType === "unrealizedLabReferrals") {
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
        key: "datumRodjenja",
        value: "Datum",
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
  } else if (contentType === "labVisits") {
    return [
      {
        key: "id",
        value: "Id lab pregleda",
      },
      {
        key: "lbpPacijenta",
        value: "LBP",
      },
      {
        key: "lbzTehnicara",
        value: "LBZ",
      },
      {
        key: "napomena",
        value: "Napomena",
      },
      {
        key: "datumPregleda",
        value: "Datum",
      },
      {
        key: "statusPregledaZakazaniPacijenti",
        value: "Status pregleda",
      },
    ];
  } else if (contentType === "detailedResultPreview") {
    return [
      {
        key: "analysisId",
        value: "ID naloga",
      },
      {
        key: "analysisName",
        value: "Naziv analize",
      },
      {
        key: "parameterId",
        value: "ID parametra",
      },
      {
        key: "parameterName",
        value: "Naziv parametra",
      },
      {
        key: "unit",
        value: "Jedinica",
      },
      {
        key: "lowerThreshold",
        value: "Donja granica",
      },
      {
        key: "upperThreshold",
        value: "Gornja granica",
      },
      {
        key: "doctorName",
        value: "Ime lekara",
      },
      {
        key: "doctorSurname",
        value: "Prezime lekara",
      },
    ];
  }
  return [];
};
