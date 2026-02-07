export type Clause = {
    id: string
    content: string
    subItems?: string[]
}

export type TermsSection = {
    title: string
    clauses: Clause[]
}

export const termsSections: TermsSection[] = [
    {
        title: 'I. Ochrana osobních údajů',
        clauses: [
            {
                id: '1.1',
                content:
                    'Stisknutím tlačítka „Rozumím" pod těmito podmínkami, potvrzuje uživatel, že je srozuměn s podmínkami ochrany osobních údajů, že vyjadřuje svůj souhlas s jejich zněním, a že je v celém rozsahu akceptuje.',
            },
            {
                id: '1.2',
                content:
                    'Poskytovatel je správcem osobních údajů uživatelů podle čl. 4 bod 7) nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (obecné nařízení o ochraně osobních údajů) (dále jen: „GDPR"). Poskytovatel se zavazuje zpracovávat osobní údaje v souladu s právními předpisy, zejm. GDPR.',
            },
            {
                id: '1.3',
                content:
                    'Osobními údaji jsou veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.',
            },
            {
                id: '1.4',
                content:
                    'Při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení objednávky (jméno a adresa, kontakt). Účelem zpracování osobních údajů je vyřízení objednávky uživatele a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Poskytovatelem a Uživatelem. Účelem zpracování osobních údajů je dále zasílání obchodních sdělení a činění dalších marketingových aktivit. Zákonným důvodem pro zpracování osobních údajů je plnění smlouvy dle čl. 6 odst. 1 písm. b) GDPR, plnění právní povinnosti správce dle čl. 6 odst. 1 písm. c) GDPR a oprávněný zájem Poskytovatele dle čl. 6 odst. 1 písm. f) GDPR. Oprávněným zájmem Poskytovatele je zpracování osobních údajů pro účely přímého marketingu.',
            },
            {
                id: '1.5',
                content:
                    'Poskytovatel pro plnění licenční smlouvy používá služeb subdodavatelů, zejména poskytovatele mailingových služeb (osobní údaje jsou ukládány v 3. zemích) a poskytovatele webhostingu. Subdodavatelé jsou prověřeni z hlediska bezpečného zpracování osobních údajů. Poskytovatel a subdodavatel webhostingu uzavřeli smlouvu o zpracování osobních údajů, dle které subdodavatel odpovídá za řádně zabezpečení fyzického, hardwarového i softwarového perimetru, a tedy nese vůči uživateli přímou odpovědnost za jakýkoli únik či narušení osobních údajů.',
            },
            {
                id: '1.6',
                content:
                    'Poskytovatel ukládá osobní údaje uživatele po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi poskytovatelem a uživatelem a uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu). Po jejím uplynutí budou údaje vymazány.',
            },
            {
                id: '1.7',
                content:
                    'Uživatel má právo požadovat od poskytovatele přístup ke svým osobním údajům dle čl. 15 GDPR, opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR. Uživatel má právo na výmaz osobních údajů dle čl. 17 odst. 1 písm. a), a c) až f) GDPR. Dále má uživatel právo vznést námitku proti zpracování dle čl. 21 GDPR a právo na přenositelnost údajů dle čl. 20 GDPR.',
            },
            {
                id: '1.8',
                content:
                    'Uživatel má právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domnívá, že bylo porušeno jeho právo na ochranu osobních údajů.',
            },
            {
                id: '1.9',
                content:
                    'Uživatel nemá povinnost osobní údaje poskytnout. Poskytnutí osobních údajů je však nutným požadavkem pro uzavření a plnění smlouvy a bez poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze strany poskytovatele plnit.',
            },
            {
                id: '1.10',
                content:
                    'Ze strany Poskytovatele nedochází k automatickému individuálnímu rozhodování ve smyslu č. 22 GDPR.',
            },
            {
                id: '1.11',
                content:
                    'Zájemce o využívání služeb Poskytovatele vyplněním kontaktního formuláře:',
                subItems: [
                    'souhlasí s použitím svých osobních údajů pro účely elektronického zasílání obchodních sdělení, reklamních materiálů, přímého prodeje, průzkumů trhu a přímých nabídek produktů ze strany Poskytovatele a třetích subjektů, ne však častěji, než 1x týdně, a zároveň',
                    'prohlašuje, že zasílání informací dle bodu 1.11.1 nepovažuje za nevyžádanou reklamu ve smyslu zák. č. 40/1995 Sb. ve znění novel, neboť uživatel se zasílám informací dle bodu 1.11.1 ve spojení s § 7 zák. č. 480/2004 Sb. výslovně souhlasí.',
                    'Souhlas dle tohoto odstavce může uživatel kdykoli písemně odvolat na info@dorijana.cz',
                ],
            },
            {
                id: '1.12',
                content:
                    'Poskytovatel používá v rámci zvyšování kvality služeb, personalizace nabídky, sběru anonymních dat a pro analytické účely ve své prezentaci tzv. soubory cookie. Používáním webu Uživatel souhlasí s použitím zmíněné technologie.',
            },
        ],
    },
    {
        title: 'II. Práva a povinnosti mezi správcem a zpracovatelem (zpracovatelská smlouva)',
        clauses: [
            {
                id: '2.1',
                content:
                    'Poskytovatel je ve vztahu k osobním údajům klientů uživatelů zpracovatelem dle čl. 28 GDPR. Uživatel je správcem těchto údajů.',
            },
            {
                id: '2.2',
                content:
                    'Tyto podmínky upravují vzájemná práva a povinnosti při zpracování osobních údajů, ke kterým Poskytovatel získal přístup v rámci plnění licenční smlouvy uzavřené formou odsouhlasení všeobecných obchodních podmínek na www.dorijana.cz (dále jen licenční „smlouva") uzavřené s Uživatelem ke dni zřízení uživatelského účtu.',
            },
            {
                id: '2.3',
                content:
                    'Poskytovatel se zavazuje pro Uživatele zpracovávat osobní údaje v rozsahu a za účelem stanovenými v čl. 2.4 – 2.7 těchto podmínek. Prostředky zpracování budou automatizované. Poskytovatel bude v rámci zpracování osobní údaje shromažďovat, ukládat na nosiče informací, uchovávat, blokovat a likvidovat. Poskytovatel není oprávněn osobní údaje zpracovávat v rozporu nebo nad rámec stanovený těmito podmínkami.',
            },
            {
                id: '2.4',
                content:
                    'Poskytovatel se zavazuje pro uživatele zpracovávat osobní údaje v tomto rozsahu:',
                subItems: [
                    'běžné osobní údaje,',
                    'zvláštní kategorie údajů podle čl. 9 GDPR, které Uživatel získal v souvislosti s vlastní obchodní činností.',
                ],
            },
            {
                id: '2.5',
                content:
                    'Poskytovatel se zavazuje pro uživatele zpracovávat osobní údaje za účelem zpracování poptávek a požadavků klientů získaných z kontaktního formuláře.',
            },
            {
                id: '2.6',
                content:
                    'Osobní údaje je možné zpracovávat pouze na pracovištích Poskytovatele nebo jeho subdodavatelů podle čl. 2.8 těchto podmínek, a to na území Evropské unie.',
            },
            {
                id: '2.7',
                content:
                    'Poskytovatel se zavazuje pro Uživatele zpracovávat osobní údaje klientů Uživatele, to vše po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Poskytovatelem a Uživatelem a z uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu).',
            },
            {
                id: '2.8',
                content:
                    'Uživatel uděluje povolení se zapojením subdodavatele jakožto dalšího zpracovatele podle čl. 28 odst. 2 GDPR, kterým je poskytovatel hostingu aplikace. Uživatel dále uděluje Poskytovateli obecné povolení zapojit do zpracování dalšího zpracovatele osobních údajů, Poskytovatel však musí uživatele písemně informovat o všech zamýšlených změnách týkajících se přijetí dalších zpracovatelů nebo jejich nahrazení a poskytnout uživateli možnost vyslovit vůči těmto změnám námitky. Poskytovatel musí uložit svým subdodavatelům v postavení zpracovatele osobních údajů stejné povinnosti na ochranu osobních údajů, jak jsou stanoveny v těchto podmínkách.',
            },
            {
                id: '2.9',
                content:
                    'Poskytovatel se zavazuje, že zpracovávání osobních údajů bude zabezpečeno zejména následujícím způsobem:',
                subItems: [
                    'Osobní údaje jsou zpracovávány v souladu s právními předpisy a na základě pokynů Uživatele, tj. pro výkon veškerých činností potřebných pro poskytování webové platformy.',
                    'Poskytovatel se zavazuje, že technicky a organizačně zabezpečí ochranu zpracovávaných osobních údajů tak, aby nemohlo dojít k neoprávněnému nebo nahodilému přístupu k údajům, k jejich změně, zničení či ztrátě, neoprávněným přenosům, k jejich jinému neoprávněnému zpracování, jakož i k jinému zneužití a aby byly personálně a organizačně nepřetržitě po dobu zpracovávání údajů zabezpečeny veškeré povinnosti zpracovatele osobních údajů, vyplývající z právních předpisů.',
                    'Přijatá technická a organizační opatření odpovídají míře rizika. Poskytovatel pomocí nich zajišťuje neustálou důvěrnost, integritu, dostupnost a odolnost systémů a služeb zpracování, a včas obnovuje dostupnost osobních údajů a přístup k nim v případě fyzických či technických incidentů.',
                    'Poskytovatel tímto prohlašuje, že ochrana osobních údajů podléhá interním bezpečnostním předpisům Poskytovatele.',
                    'K osobním údajům budou mít přístup pouze oprávněné osoby Poskytovatele a subdodavatelů dle čl. 2.8 těchto podmínek, které budou mít Poskytovatelem stanoveny podmínky a rozsah zpracování údajů a každá taková osoba bude přistupovat k osobním údajům pod svým jednoznačným identifikátorem.',
                    'Oprávněné osoby Poskytovatele, které zpracovávají osobní údaje podle těchto podmínek, jsou povinny zachovávat mlčenlivost o osobních údajích a o bezpečnostních opatřeních, jejichž zveřejnění by ohrozilo jejich zabezpečení. Poskytovatel zajistí jejich prokazatelné zavázání k této povinnosti. Poskytovatel zajistí, že tato povinnost pro Poskytovatele i oprávněné osoby bude trvat i po skončení pracovně právního nebo jiného vztahu k Poskytovateli.',
                    'Poskytovatel bude uživateli nápomocen prostřednictvím vhodných technických a organizačních opatření, pokud je to možné, pro splnění uživatelovy povinnosti reagovat na žádosti o výkon práv subjektu údajů stanovených v GDPR; stejně tak při zajišťování souladu s povinnostmi podle čl. 32 až 36 GDPR, a to při zohlednění povahy zpracování a informací, jež má Poskytovatel k dispozici.',
                    'Po ukončení poskytování plnění, které je spojeno se zpracováním, dle čl. 2.7 těchto podmínek, je Poskytovatel povinen všechny osobní údaje vymazat, nebo je vrátit Uživateli, pokud nemá povinnost uložit osobní údaje na základě zvláštního zákona.',
                    'Poskytovatel poskytne Uživateli veškeré informace potřebné k doložení toho, že byly splněny povinnosti podle této smlouvy a GDPR, umožní audity, včetně inspekcí, prováděné Uživatelem nebo jiným auditorem, kterého uživatel pověřil.',
                ],
            },
            {
                id: '2.10',
                content:
                    'Uživatel se zavazuje neprodleně ohlašovat všechny jemu známé skutečnosti, které by mohly nepříznivě ovlivnit řádné a včasné plnění závazků vyplývajících z těchto podmínek a poskytnout Poskytovateli součinnost nezbytnou pro plnění těchto podmínek.',
            },
        ],
    },
    {
        title: 'III. Závěrečná ustanovení',
        clauses: [
            {
                id: '3.1',
                content:
                    'Tyto podmínky pozbývají platnosti uplynutím doby uvedené v čl. 1.6 a čl. 2.7 těchto podmínek.',
            },
            {
                id: '3.2',
                content:
                    'Uživatel souhlasí s těmito podmínkami zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu vyjadřuje uživatel, že si tyto podmínky přečetl, že s nimi vyjadřuje svůj souhlas a že je v celém rozsahu akceptuje.',
            },
            {
                id: '3.3',
                content:
                    'Poskytovatel je oprávněn tyto podmínky změnit. Poskytovatel je povinen bez zbytečného odkladu zveřejnit novou verzi podmínek na svých internetových stránkách, popř. zašle novou verzi Uživateli na jeho e-mailovou adresu.',
            },
            {
                id: '3.4',
                content:
                    'Kontaktní údaje Poskytovatele ve věcech týkajících se těchto podmínek: +420 777 700 202, info@dorijana.cz',
            },
            {
                id: '3.5',
                content:
                    'Vztahy těmito podmínkami výslovně neupravené se řídí GDPR a právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanský zákoník, v platném znění.',
            },
        ],
    },
]
