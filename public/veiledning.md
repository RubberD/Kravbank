# Veiledning til IKT-kravbanken

Kravbanken er en samling krav du kan bruke når du skal anskaffe digitale tjenester. Du finner fram til kravene som passer anskaffelsen din, velger dem ut og eksporterer dem til en CSV-fil som kan åpnes i Excel.

## Slik finner du krav

### Søk

Skriv i søkefeltet øverst til venstre. Søket treffer ID, overskrift, kravtekst, rasjonale, kategori, underkategori og kravsett. Du kan for eksempel søke på `SIK-004`, `logg` eller `GDPR`.

### Filtre

I panelet til venstre kan du begrense listen:

- **Kategori:** fagområdet kravet hører til, for eksempel *Informasjonssikkerhet* eller *Drift*.
- **Relevant for:** leveransemodellen kravet gjelder for: *On-prem*, *IaaS*, *PaaS* eller *SaaS*.
- **Kravsett:** ferdige samlinger av krav på tvers av kategorier, for eksempel *Skyanskaffelse (SaaS)*.
- **Vektning:** *Obligatorisk*, *Høy* eller *Lav*.
- **Prioritet:** prioriteten til kravet, der 1 er høyest.

Velger du flere verdier innenfor samme filter, vises krav som matcher **minst én** av dem. Velger du verdier i flere filtre, må kravet matche **alle** filtrene. Klikk **Nullstill** for å fjerne alle filtre og søket.

Tallet ved hver verdi viser hvor mange krav i hele kravbanken som har den verdien.

### Gruppering og sortering

Over kravlisten kan du velge hvordan kravene vises:

- **Grupper:** samle kravene under *Kategori*, *Underkategori* eller *Kravsett*, eller velg *Ingen* for én samlet liste. Et krav som tilhører flere kravsett, vises i hver av gruppene.
- **Sorter:** sorter på *ID* (standard), *Overskrift*, *Kategori* eller *Kravsett*.

## Slik velger du krav

- Klikk på et krav for å velge det. Klikk igjen for å fjerne valget.
- **Velg alle synlige** velger alle krav som vises med gjeldende søk og filtre.
- **Tøm valg** fjerner alle valg.

Antall valgte krav vises øverst til høyre. Lenker i et krav åpnes i en ny fane uten at kravet blir valgt.

## Eksport til CSV

Klikk **Eksporter** øverst til høyre.

- Har du valgt krav, eksporteres bare de valgte.
- Har du ikke valgt noe, eksporteres alle krav som vises med gjeldende søk og filtre.

Filen er semikolonseparert og lagret slik at æ, ø og å vises riktig i norsk Excel. Kravene kommer i samme rekkefølge som på siden.

| Kolonne | Innhold |
|---|---|
| ID | Kravets faste ID, for eksempel `DRI-001` |
| Kategori / Underkategori | Fagområde og tema |
| Overskrift / Kravtekst | Kort tittel og selve kravet |
| Rasjonale | Hvorfor kravet stilles |
| Referanse | Standarder, lover eller kilder, skilt med komma |
| Referanse-lenke | Lenkene til referansene, skilt med komma |
| Kravsett | Kravsettene kravet tilhører |
| Vektning / Prioritet | Hvor viktig kravet er |
| Relevant for | Leveransemodellene kravet gjelder for |

## Hva betyr feltene?

- **ID:** fast identifikator for kravet. Bruk ID-en når du viser til et krav i konkurransegrunnlag og dialog med leverandører.
- **Rasjonale:** begrunnelsen for kravet. Den hjelper deg å vurdere om kravet er relevant for din anskaffelse.
- **Referanse:** standarden, loven eller kilden kravet bygger på. Referanser med lenke kan klikkes.
- **Vektning:** *Obligatorisk* betyr at kravet bør stilles som et absolutt krav. *Høy* og *Lav* sier hvor tungt kravet bør vektes.

## For redaktører: slik vedlikeholder du kravene

Kravene ligger som markdown-filer i mappen `krav/`, én fil per kategori. Overskriften øverst i filen (`# Drift`) blir kategorinavnet.

Hver fil har én tabell med disse kolonnene:

```
| ID | Underkategori | Overskrift | Kravtekst | Rasjonale | Referanse | Kravsett | On-prem | IaaS | PaaS | SaaS | Vektning | Prioritet |
```

- **ID:** prefiks for kategorien og løpenummer, for eksempel `SIK-011`. En ID skal aldri gjenbrukes eller nummereres om. Fjernes et krav, blir nummeret stående ubrukt.
- **Referanse:** flere referanser skilles med komma. Lenker skrives som `[Tekst](https://adresse)`. Komma inne i en lenke deler den ikke.
- **Kravsett:** flere kravsett skilles med komma.
- **On-prem, IaaS, PaaS, SaaS:** skriv `x` der kravet er relevant, og la cellen stå tom ellers.
- **Vektning:** `Obligatorisk`, `Høy` eller `Lav`.
- **Prioritet:** et tall, der 1 er høyest.

Tegnet `|` kan ikke brukes inne i en celle, fordi det skiller kolonnene.

Lager du en ny kategorifil, må filnavnet også legges inn i `krav/manifest.json`. Ellers blir den ikke lest inn.
