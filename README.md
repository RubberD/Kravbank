# Kravbank html #
Dette er et enkelt html verktøy for å lage en kravbank og som gis ut til fri brukk av de som måtte trenge det. Den fungerer ved at html filen laster markdown filer i krav mappen med javascript og publiserer krav, kategorier og kravsett på siden. Brukeren kan markere kravene som ønskes hentet ut og laste de ned som csv. Oppdatering gjøres ved å oppdatere Markdown filene. Kravdokumentene er strukturert som en tabell i markdown. Den inneholder følgende:

| Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | Kravsett | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|---|---|---|---|---|
|En underinndeling av krav | Enkel overskrift for struktur, kan bruke tall om man ønsker | Selve kravet | En begrunnelse for hvorfor kravet stilles | Enkel etikette eller lenke til hvor kravet kommer fra | referanse til et eller flere kravsett adskilt med komma | relevant for | relevant for | relevant for | relevant for |

Bruker man Git vil man få versjonsstyring på oppdatering av kravene.

# Hvorfor? #
Jeg har jobbet med offentlig anskaffelse i 9 år og har sett mange spennende forsøk på å lage kravbanker i alt fra programvare for prosjektstyring til sharepoint, business intellgence og kjøp av avanserte verktøyer. Personlig tror jeg ikke det trenger å være så vanskelig. Litt HTML, Git og Claude kommer man lang vei med.

# Data i apllikasjonen #
Data i apllikasjonen idag er eksempel data som er generert av KI. Kravene hørtes kanskje ikke så dumme ut, men jeg kan dessverre ikke si god for kvaliteten på disse selvom de kan være nok så overbevisende. Selv om krav gjerne kan leses nok så universelle er de gjerne tilpasset en kontekst for en organisasjon.

# Screenshot

[![Bilde av applikasjonen](https://github.com/RubberD/Kravbank/blob/d4ee923689f2481bca36838eca16f47fa7785ef4/assets/screenshot.png)]


# Kjøre applikasjonen #

## Docker fra hub ##
Kjør det som en container fra Docker Hub med kommandoen:

    Docker run -p 3000:3000 lstorgaard/kravbank_html:1.1

Men det er ikke mulig å endre på kravene.

## Clon repo ##
Først klon repo:

    git clone https://github.com/RubberD/Kravbank/

1. Last opp index.html support.js, mappene krav og assets til en publiseringstjeneste 
2. eller kjør NodeJs serveren som en container du bygger i din favourit Hyperskaler eller privatsky.