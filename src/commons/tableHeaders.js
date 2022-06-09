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
        key: "id",
        value: "Id",
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
        value: "Datum pregleda",
      },
      {
        key: "statusPregleda",
        value: "Status pregleda",
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
        key: "datum",
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
      {
        key: "kreiraj",
        value: "",
      },
    ];
  } else if (contentType === "unrealizedReferrals") {
    return [
      {
        key: "id",
        value: "ID uputa",
      },
      {
        key: "lekar",
        value: "Ime i prezime lekara",
      },
      {
        key: "datum",
        value: "Datum i vreme kreiranja uputa",
      },
      {
        key: "odeljenje",
        value: "Odeljenje",
      },
      {
        key: "dijagnoza",
        value: "Dijagnoza",
      },
      {
        key: "odabir",
        value: "Odabir uputa",
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
  } else if (contentType === "patientsAdmissions") {
    return [
      {
        key: "id",
        value: "ID zakazanog termina",
      },
      {
        key: "lbpNumber",
        value: "LBP",
      },
      {
        key: "departmentId",
        value: "ID odeljenja",
      },
      {
        key: "datum",
        value: "Datum i vreme prijema",
      },
      {
        key: "pacijent",
        value: "Ime i prezime pacijenta",
      },
      {
        key: "statusPrijemZakazaniPacijent",
        value: "Status termina",
      },
      {
        key: "komentarStacionar",
        value: "",
      },
    ];
  } else if (contentType === "hospitalRoom") {
    return [
      {
        key: "id",
        value: "ID sobe",
      },
      {
        key: "departmentId",
        value: "ID odeljenja",
      },
      {
        key: "roomNumber",
        value: "Broj sobe",
      },
      {
        key: "roomName",
        value: "Naziv sobe",
      },
      {
        key: "capacity",
        value: "Kapacitet",
      },
      {
        key: "occupancy",
        value: "Popunjenost",
      },
      {
        key: "odaberiSobu",
        value: "",
      },
    ];
  }
  return [];
};
