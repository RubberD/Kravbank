# Drift

| Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | Kravsett | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|---|---|---|---|---|
| Tilgjengelighet | Oppetidsgaranti | Tjenesten skal ha en garantert oppetid på minimum 99,5 % målt per måned, definert i en tjenestenivåavtale (SLA). | Forutsigbar tilgjengelighet er avgjørende for virksomhetskritiske tjenester. | SLA – bilag til avtale | Skyanskaffelse (SaaS) |  | x | x | x |
| Sikkerhetskopiering | Sikkerhetskopiering | Det skal tas regelmessig sikkerhetskopi av data, og kopiene skal kunne gjenopprettes innen avtalt tid. | Beskytter mot datatap ved feil, angrep eller menneskelige feil. | ISO/IEC 27001:2022 A.8.13 | Skyanskaffelse (SaaS), Personopplysninger | x | x | x | x |
| Gjenoppretting | Gjenopprettingsmål | Løsningen skal ha definerte mål for gjenopprettingstid (RTO) og gjenopprettingspunkt (RPO). | Tydelige mål gir forutsigbarhet for hvor mye data og tid som kan gå tapt ved en hendelse. | ISO/IEC 27031 | Skyanskaffelse (SaaS) |  | x | x | x |
| Overvåking | Tjenesteovervåking | Tjenesten skal overvåkes kontinuerlig, og kunden skal varsles ved hendelser som påvirker tilgjengeligheten. | Proaktiv overvåking reduserer nedetid og gir kunden innsyn i tjenestens helse. | NSM Grunnprinsipper 3.1 | Skyanskaffelse (SaaS) |  | x | x | x |
| Support | Brukerstøtte | Leverandøren skal tilby brukerstøtte med definerte responstider for ulike alvorlighetsgrader. | Forutsigbar support sikrer rask håndtering av feil og redusert virkning for brukerne. | SLA – bilag til avtale | Skyanskaffelse (SaaS) |  | x | x | x |
| Endringshåndtering | Varsling om endringer | Leverandøren skal varsle kunden i god tid før planlagte endringer og vedlikehold som kan påvirke tjenesten. | Gir kunden mulighet til å planlegge og redusere virkning for egne brukere. | ITIL – Change Management | Skyanskaffelse (SaaS) |  | x | x | x |
| Kapasitet | Skalerbarhet | Løsningen skal kunne skalere kapasitet i takt med endret behov uten vesentlig nedetid. | Sikrer at tjenesten håndterer vekst og topplast uten degradert ytelse. | ISO/IEC 27017 | Skyanskaffelse (SaaS) |  | x | x | x |
