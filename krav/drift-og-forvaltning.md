# Drift og forvaltning

| Kategori | Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|---|---|---|---|---|
| Drift | Tilgjengelighet | Oppetidsgaranti | Tjenesten skal ha en garantert oppetid på minimum 99,5 % målt per måned, definert i en tjenestenivåavtale (SLA). | Forutsigbar tilgjengelighet er avgjørende for virksomhetskritiske tjenester. | SLA – bilag til avtale |  | x | x | x |
| Drift | Sikkerhetskopiering | Sikkerhetskopiering | Det skal tas regelmessig sikkerhetskopi av data, og kopiene skal kunne gjenopprettes innen avtalt tid. | Beskytter mot datatap ved feil, angrep eller menneskelige feil. | ISO/IEC 27001:2022 A.8.13 | x | x | x | x |
| Drift | Gjenoppretting | Gjenopprettingsmål | Løsningen skal ha definerte mål for gjenopprettingstid (RTO) og gjenopprettingspunkt (RPO). | Tydelige mål gir forutsigbarhet for hvor mye data og tid som kan gå tapt ved en hendelse. | ISO/IEC 27031 |  | x | x | x |
| Drift | Overvåking | Tjenesteovervåking | Tjenesten skal overvåkes kontinuerlig, og kunden skal varsles ved hendelser som påvirker tilgjengeligheten. | Proaktiv overvåking reduserer nedetid og gir kunden innsyn i tjenestens helse. | NSM Grunnprinsipper 3.1 |  | x | x | x |
| Drift | Support | Brukerstøtte | Leverandøren skal tilby brukerstøtte med definerte responstider for ulike alvorlighetsgrader. | Forutsigbar support sikrer rask håndtering av feil og redusert virkning for brukerne. | SLA – bilag til avtale |  | x | x | x |
| Drift | Endringshåndtering | Varsling om endringer | Leverandøren skal varsle kunden i god tid før planlagte endringer og vedlikehold som kan påvirke tjenesten. | Gir kunden mulighet til å planlegge og redusere virkning for egne brukere. | ITIL – Change Management |  | x | x | x |
| Drift | Kapasitet | Skalerbarhet | Løsningen skal kunne skalere kapasitet i takt med endret behov uten vesentlig nedetid. | Sikrer at tjenesten håndterer vekst og topplast uten degradert ytelse. | ISO/IEC 27017 |  | x | x | x |
| Forvaltning | Dokumentasjon | Driftsdokumentasjon | Leverandøren skal levere oppdatert dokumentasjon av drift, konfigurasjon og avhengigheter. | Nødvendig for forvaltning, feilsøking og ved eventuell leverandørbytte. | ISO/IEC 27001:2022 A.5.37 | x | x | x |  |
| Forvaltning | Exit | Avslutningsbistand | Leverandøren skal yte bistand til kontrollert avvikling og overføring av data og tjenester ved avtaleopphør. | Reduserer innelåsing og sikrer kontinuitet ved leverandørbytte. | Exit-plan – bilag til avtale |  | x | x | x |
