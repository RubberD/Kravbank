# Arkitektur og integrasjon

| Kategori | Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|---|---|---|---|---|
| Arkitektur | API | Åpent programmeringsgrensesnitt | Løsningen skal tilby et dokumentert API basert på åpne standarder (REST/JSON) for integrasjon med andre systemer. | Åpne grensesnitt sikrer samhandling og reduserer innelåsing. | [Referansearkitektur – Digdir](https://www.digdir.no/) | x | x | x | x |
| Arkitektur | Standarder | Bruk av åpne standarder | Løsningen skal benytte åpne standarder for datautveksling der slike finnes. | Åpne standarder gir leverandøruavhengighet og bedre samhandlingsevne. | [Referansekatalogen](https://www.digdir.no/standarder/referansekatalogen/2206) | x | x | x | x |
| Arkitektur | Dataeierskap | Eksport av data | Kunden skal til enhver tid kunne eksportere egne data i et åpent og dokumentert format. | Sikrer dataeierskap og muliggjør leverandørbytte uten tap av data. | Referansekatalogen – format | x | x | x | x |
| Integrasjon | Identitet | Føderert pålogging | Løsningen skal støtte føderert pålogging mot kundens eksisterende katalogtjeneste. | Reduserer antall pålogginger og forenkler tilgangsadministrasjon. | SAML 2.0 / OpenID Connect |  | x | x | x |
| Integrasjon | Meldingsutveksling | Hendelsesbasert integrasjon | Løsningen bør støtte hendelsesbasert integrasjon (webhooks eller meldingskø) for sanntidsoppdateringer. | Muliggjør effektiv og løst koblet integrasjon mot andre systemer. | CloudEvents 1.0 |  |  | x | x |
| Arkitektur | Portabilitet | Containerbasert leveranse | Løsningen bør kunne leveres som containere basert på åpne standarder (OCI). | Forenkler flytting mellom miljøer og reduserer plattformavhengighet. | OCI Image Spec | x | x | x |  |
| Arkitektur | Ytelse | Responstid | Sentrale brukeroperasjoner skal ha en responstid på under 2 sekunder under normal last. | God ytelse er avgjørende for brukeropplevelse og effektivitet. | Ytelseskrav – bilag til avtale | x | x | x | x |
| Arkitektur | Sporbarhet | Sporbarhet av endringer | Endringer i data skal være sporbare med tidspunkt og ansvarlig bruker. | Sporbarhet er nødvendig for revisjon, feilsøking og ansvarliggjøring. | ISO/IEC 27001:2022 A.8.15 | x | x | x | x |
