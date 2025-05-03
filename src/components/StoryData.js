const story = {
  start: {
    text: `Můj dědeček zemřel náhle. Lékaři to označili za srdeční selhání, ale žádná pitva neproběhla. 
    Když jsme ho našli, seděl u stolu ve své pracovně, oči dokořán, ústa otevřená jako by naposledy křičel –
     ale nikdo ho neslyšel. Byl úplně sám.
    Nebo aspoň tak to tvrdí ostatní.
    Po pohřbu mi přišel balíček. Bez zpáteční adresy.
    Uvnitř byla jen zažloutlá obálka, na ní moje jméno psané jeho písmem. A v ní jen jeden řádek:
    **„Najdi klíč pod hodinami. Nevěř tichu.“**
    To bylo všechno. Žádný testament. Žádný formální dopis. Jen tenhle podivný vzkaz.`,
    options: [
      { text: "Vzkaz ignorovat a zahodit ho.", id: "ignoreTheLetter" },
      { text: "Zajít do domu a najít klíč.", id: "findTheKey" },
    ],
  },
  ignoreTheLetter: {
    text: `Roztrhal jsem dopis a hodil jsem ho do koše.
            Už se nechci trápit, chci za úmrtím dědečka udělat tlustou čáru a pokračovat ve svém životě.
            Stačí mi v mysli pár krásných vzpomínek na něj.
            Otevírám bar plný whiskey a utírám si slzu, která mi stéká po tváři.`,
    options: [{ text: "KONEC PŘÍBĚHU", id: "newGame" }], //vymyslet, jak spustit novou hru
  },

  findTheKey: {
    text: `Rozhodl jsem se jet do jeho starého domu, který už roky chátral.
    Nikdo tam nevkročil od chvíle, kdy dědečka odvezli. Vzduch uvnitř byl těžký,
    vstupní hala a schodiště byly zakryté v šeru.
    Okny zatemněnými těžkými závěsy neprocházelo příliš mnoho světla.
    Robustní podlahové hodiny z ořechového dřeva stály – ručičky nehybné ve 3:33.
    Když jsem odsunul jejich těžké tělo od zdi, opravdu tam byl – na zemi ležel malý rezavý klíč,
     zavěšený na řetízku. Na zadní straně hodin bylo naškrábáno:„Sleduj. Pracovna.“.
     Mám pocit, že pod škrábanci něco je, ale pořádně na to nevidím.`,
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock" },
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },
  checkTheClock: {
    text: `Se silným skřípotem závěsy spadly na zem. 
    Svým dopadem na dřevěnou podlahu zvířily hustý oblak prachu,
     který mi ihned rozdráždil sliznici. Začal jsem nekontrolovaně kašlat. 
     I když slunce rychle zapadá, halu nyní prosvěcovalo denní světlo. 
     Na stěnách vidím nalepenou starodávnou zelenou tapetu s růžovými květinovými vzory.
     Na zdi, která vede podél schodiště visí obrazy předků. 
     Ve spodním patře se nachází několik masivních zavřených dřevěných dveří. 
     Sice jsem tu již spoustu let nebyl, ale takhle strašidelné si to z dětství nepamatuji. 
     Snad to bude stát za to, pomyslím si, a přiblížím se k hodinám. 
     Shýbám se k dolní části hodin a zkoumám, co před chvíli upoutalo moji pozornost.
     Otevřenou dlaní přejíždím přes nalepený papírek. Jedná se o výrobní štítek s názvem společnosti „Mundus“. 
     „Tohle byla ztráta času“ procedím mezi zuby podrážděným tónem.`,
    options: [
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  goToTheOffice: {
    text: `Cestou po schodech sleduji obrazy předků a nemůžu se ubránit pocitu, že mě svými pohledy sledují.
     Ve druhém patře na konci chodby se konečně ocitám v jeho pracovně. 
     Zdá se, že zde bylo vše tak, jak to zanechal. Zápisníky, knihy a staré mapy. 
     Co však nejvíce upoutalo mojí pozornost a způsobilo nepříjemnou husí kůži na zátylku,
      byly podivné náčrty lidských postav bez obličejů. Snažím se zůstat v klidu a nenechat se ovládnout strachem.
       Pokusím se znovy soustředit. V rohu místnosti jsou dveře, které si jen mlhavě pamatuji z dětství – jsou zamčené.
        Z kapsy si vytáhnu klíč, který jsem našel pod hodinami.`,
    options: [
      {
        text: "Mám strach, možná by některé věci nemusely být vysvětleny za každou cenu",
        id: "goHome",
      },
      { text: "Otevřít dveře", id: "openTheDoor" },
    ],
  },
  goHome: {
    text: `Běžím chodbou, jak nejrychleji umím. Když scházím schody dolů, zarazí mě zjištění,
     že hodiny, které jsem odsunul, nyní stojí před vchodovými dveřmi. 
     Jsou otočené zády a slova vyrytá do dřeva se změnila: „Otoč se. Pracovna.“ 
     Nezajímá mě, co se tady stalo, chci prostě tento dům opustit jednou pro vždy. 
     Zatlačím do hodin zboku, abych si uvolnil průchod ven. Jakmile jsem nahmatal kliku od dveří, 
     začal mi zvonit telefon. Hlas na druhém konci se mě snaží varovat slovy: „Nesmíš odejít!“, a poté okamžitě zavěsí.`,
    options: [
      { text: "Ignorovat varování a odejít", id: "leaveTheHouse" },
      { text: "Vrátit se zpátky k zamčeným dveřím", id: "openTheDoor" },
    ],
  },
  openTheDoor: {
    text: `Ruka se mi třásla, když jsem zasunoval klíč do zámku. 
    Kov zaškrábal, klíč seděl dokonale. Otočil jsem ho – jedno klapnutí, pak druhé. 
    Dveře se po chvíli samy s tichým zaskřípěním pootevřely. Za nimi byla tma. Ne přirozená, ale těžká. Hustá. 
    Jako by pohlcovala světlo. Přesto jsem vstoupil dovnitř. Místnost nebyla velká. 
    V jejím středu stál stůl, nad nímž visela lampa. Když jsem zatáhl za šňůrku, 
    světlo se rozzářilo – a odhalilo nástěnku pokrytou fotografiemi, výstřižky z novin, 
    a ručně psanými poznámkami. Taky byl vidět psací stroj a černá tabule s křídovými značkami a na ní zakroužkované datumy,
     jména našich předků a slova jako “opakování” a “vyvolený”.`,
    options: [
      { text: "Prozkoumat podrobněji místnost", id: "chechTheRoom" },
      { text: "Porozhlédnout se po stole", id: "chechTheDesk" },
    ],
  },
  checkTheRoom: {
    text: `Rozhodnu se nejdříve prozkoumat místnost a v rohu najdu další dveře, 
    které zprvu nebyly vidět. Jsou menší než ty, které vedly do této místnosti a 
    vypadají však mnohem starším, až starodávným vzhledem.`,
    options: [{ text: "Porozhlédnout se po stole", id: "checkTheDesk" }],
  },
};
