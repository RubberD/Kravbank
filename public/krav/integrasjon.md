# Integrasjon

| Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | Kravsett | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|---|---|---|---|---|
| Identitet | Føderert pålogging | Løsningen skal støtte føderert pålogging mot kundens eksisterende katalogtjeneste. | Reduserer antall pålogginger og forenkler tilgangsadministrasjon. | SAML 2.0 / OpenID Connect | Skyanskaffelse (SaaS) |  | x | x | x |
| Meldingsutveksling | Hendelsesbasert integrasjon | Løsningen bør støtte hendelsesbasert integrasjon (webhooks eller meldingskø) for sanntidsoppdateringer. | Muliggjør effektiv og løst koblet integrasjon mot andre systemer. | CloudEvents 1.0 |  |  |  | x | x |
