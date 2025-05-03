export const story = [
  {
    id: "start",
    text: (
      <>
        <p>
          Můj dědeček zemřel náhle. Lékaři to označili za srdeční selhání, ale
          žádná pitva neproběhla. Když jsme ho našli, seděl u stolu ve své
          pracovně, oči dokořán, ústa otevřená jako by naposledy křičel – ale
          nikdo ho neslyšel. Byl úplně sám. Nebo aspoň tak to tvrdí ostatní.
        </p>
        <p>
          Po pohřbu mi přišel balíček. Bez zpáteční adresy. Uvnitř byla jen
          zažloutlá obálka, na ní moje jméno psané jeho písmem. A v ní jen jeden
          řádek:
        </p>

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}>
          <strong>„Najdi klíč pod hodinami. Nevěř tichu.“</strong>
        </p>
        <p>
          To bylo všechno. Žádný testament. Žádný formální dopis. Jen tenhle
          podivný vzkaz.
        </p>
        <p
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}>
          Nyní se musíš rozhodnout, kterou cestou se vydáš:
        </p>
      </>
    ),
    options: [
      { text: "Vzkaz ignorovat a zahodit ho.", id: "ignoreTheLetter" },
      { text: "Zajít do domu a najít klíč.", id: "findTheKey" },
    ],
  },

  {
    id: "ignoreTheLetter",
    text: (
      <>
        <p>Roztrhal jsem dopis a hodil jsem ho do koše.</p>
        <p>
          Už se nechci trápit, chci za úmrtím dědečka udělat tlustou čáru a
          pokračovat ve svém životě. Stačí mi v mysli pár krásných vzpomínek na
          něj. Otevírám bar plný whiskey a utírám si slzu, která mi stéká po
          tváři.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "start" }], //vymyslet, jak spustit novou hru
  },

  {
    id: "findTheKey",
    text: (
      <>
        <p>
          Rozhodl jsem se jet do jeho starého domu, který už roky chátral. Nikdo
          tam nevkročil od chvíle, kdy dědečka odvezli. Vzduch uvnitř byl těžký,
          vstupní hala a schodiště byly zakryté v šeru. Okny zatemněnými těžkými
          závěsy neprocházelo příliš mnoho světla. Robustní podlahové hodiny z
          ořechového dřeva stály – ručičky nehybné ve 3:33. Když jsem odsunul
          jejich těžké tělo od zdi, opravdu tam byl – na zemi ležel malý rezavý
          klíč, zavěšený na řetízku.
        </p>
        <p>Na zadní straně hodin bylo naškrábáno:„Sleduj. Pracovna.“.</p>
        <p>Mám pocit, že pod škrábanci něco je, ale pořádně na to nevidím.</p>
      </>
    ),
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock" },
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  {
    id: "checkTheClock",
    text: (
      <>
        <p>
          Se silným skřípotem závěsy spadly na zem. Svým dopadem na dřevěnou
          podlahu zvířily hustý oblak prachu, který mi ihned rozdráždil
          sliznici. Začal jsem nekontrolovaně kašlat. I když slunce rychle
          zapadá, halu nyní prosvěcovalo denní světlo. Na stěnách vidím
          nalepenou starodávnou zelenou tapetu s růžovými květinovými vzory. Na
          zdi, která vede podél schodiště visí obrazy předků. Ve spodním patře
          se nachází několik masivních zavřených dřevěných dveří. Sice jsem tu
          již spoustu let nebyl, ale takhle strašidelné si to z dětství
          nepamatuji. Snad to bude stát za to, pomyslím si, a přiblížím se k
          hodinám. Shýbám se k dolní části hodin a zkoumám, co před chvíli
          upoutalo moji pozornost. Otevřenou dlaní přejíždím přes nalepený
          papírek. Jedná se o výrobní štítek s názvem společnosti „Mundus“.
        </p>
        <p>„Tohle byla ztráta času“ procedím mezi zuby podrážděným tónem.</p>
      </>
    ),
    options: [
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  {
    id: "goToTheOffice",
    text: (
      <p>
        Cestou po schodech sleduji obrazy předků a nemůžu se ubránit pocitu, že
        mě svými pohledy sledují. Ve druhém patře na konci chodby se konečně
        ocitám v jeho pracovně. Zdá se, že zde bylo vše tak, jak to zanechal.
        Zápisníky, knihy a staré mapy. Co však nejvíce upoutalo mojí pozornost a
        způsobilo nepříjemnou husí kůži na zátylku, byly podivné náčrty lidských
        postav bez obličejů. Snažím se zůstat v klidu a nenechat se ovládnout
        strachem. Pokusím se znovu soustředit. V rohu místnosti jsou dveře,
        které si jen mlhavě pamatuji z dětství – jsou zamčené. Z kapsy si
        vytáhnu klíč, který jsem našel pod hodinami.
      </p>
    ),
    options: [
      {
        //jak nastylovat jen toto konkretni tlacitko?
        text: "Mám strach, možná by některé věci nemusely být vysvětleny za každou cenu",
        id: "goHome",
      },
      { text: "Otevřít dveře", id: "openTheDoor" },
    ],
  },

  {
    id: "goHome",
    text: (
      <p>
        Běžím chodbou, jak nejrychleji umím. Když scházím schody dolů, zarazí mě
        zjištění, že hodiny, které jsem odsunul, nyní stojí před vchodovými
        dveřmi. Jsou otočené zády a slova vyrytá do dřeva se změnila: „Otoč se.
        Pracovna.“ Nezajímá mě, co se tady stalo, chci prostě tento dům opustit
        jednou pro vždy. Zatlačím do hodin zboku, abych si uvolnil průchod ven.
        Jakmile jsem nahmatal kliku od dveří, začal mi zvonit telefon. Hlas na
        druhém konci se mě snaží varovat slovy: „Nesmíš odejít!“, a poté
        okamžitě zavěsí.
      </p>
    ),
    options: [
      { text: "Ignorovat varování a odejít", id: "leaveTheHouse" },
      { text: "Vrátit se zpátky k zamčeným dveřím", id: "openTheDoor" },
    ],
  },

  {
    id: "leaveTheHouse",
    text: (
      <>
        <p>
          Popadla mě panika. S tímhle nechci mít nic společného. Sahám na kliku
          a snažím se dveře otevřít – ale jsou zamčené. Zámek ani necvakne. V tu
          chvíli začnou hodiny odbíjet a z potemnělé chodby se ozvou pomalé,
          těžké kroky, blížící se za mnou.
        </p>
        <p>
          Rozběhnu se k nejbližšímu oknu, lomcuju jím, ale nejde otevřít. Srdce
          mi tluče až v krku.
        </p>
        <p>A pak náhlé ..ticho.</p>
        <p>
          Kroky zmizely. Zpozorním, uši mám nastražené, dech zadržuju. A pak to
          ucítím. Studený dech na zátylku. A šepot přímo u ucha: „Svým
          rozhodnutím jsi změnil kletbu. Nyní ji ponese každý prvorozený.“
          Zděšením se snažím křičet, ale i přes snahu ze sebe nevydám ani
          hlásku. Padám na podlahu, oči dokořán a ústa jako by naposled
          křičela...
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "start" }],
  },

  {
    id: "openTheDoor",
    text: (
      <p>
        Ruka se mi třásla, když jsem zasunoval klíč do zámku. Kov zaškrábal,
        klíč seděl dokonale. Otočil jsem ho – jedno klapnutí, pak druhé. Dveře
        se po chvíli samy s tichým zaskřípěním pootevřely. Za nimi byla tma. Ne
        přirozená, ale těžká. Hustá. Jako by pohlcovala světlo. Přesto jsem
        vstoupil dovnitř. Místnost nebyla velká. V jejím středu stál stůl, nad
        nímž visela lampa. Když jsem zatáhl za šňůrku, světlo se rozzářilo – a
        odhalilo nástěnku pokrytou fotografiemi, výstřižky z novin, a ručně
        psanými poznámkami. Taky byl vidět psací stroj a černá tabule s
        křídovými značkami a na ní zakroužkované datumy, jména našich předků a
        slova jako “opakování” a “linie”.
      </p>
    ),
    options: [
      { text: "Prozkoumat podrobněji místnost", id: "checkTheRoom" },
      { text: "Porozhlédnout se po stole", id: "checkTheDesk" },
    ],
  },

  {
    id: "checkTheRoom",
    text: (
      <p>
        Rozhodnu se nejdříve prozkoumat místnost a v rohu najdu další dveře,
        které zprvu nebyly vidět. Jsou menší než ty, které vedly do této
        místnosti a vypadají však mnohem starším, až starodávným vzhledem.
      </p>
    ),
    options: [{ text: "Porozhlédnout se po stole", id: "checkTheDesk" }],
  },
  {
    id: "checkTheDesk",
    text: (
      <p>
        Uprostřed stolu leží starý psací stroj. V jeho útrobách je zastrčený
        zažloutlý list papíru. Text na něm je krátký, útržkovitý: „Někdo nás
        sleduje. Skrývá se v tichu. Pokud tohle čteš, víš, že tě pozoruje. Najdi
        můj zápisník..." Inkoust v posledních znacích je roztřesený, jako by byl
        psán ve spěchu… nebo ve strachu. Jakmile dočtu poslední řádek, pocítím
        náhlé napětí. Oči mi těkají po místnosti. Sleduji každý stín, každý
        kout. V uších mi buší tlukot srdce. Nikde nikdo. Jen ticho. Třesoucí se
        rukou vytahuji papír z psacího stroje. Na jeho zadní straně je inkoustem
        nakreslený zvláštní znak – geometrický, neznámý, znepokojivý. Netuším,
        co znamená, ale něco na něm mě zneklidňuje až do morku kostí. Všechno ve
        mně křičí, abych odsud odešel. Pryč z tohoto domu. Pryč od toho všeho.
        Ale vím, že odpovědi se skrývají v dědečkově deníku. A teď už nemohu
        couvnout. Zhluboka se nadechnu, snažím se zklidnit. A právě tehdy si
        všimnu drobnosti: Vedle psacího stroje leží malý klíč.
      </p>
    ),
    options: [
      { text: "Prozkoumat podrobněji místnost", id: "checkTheRoom" },
      { text: "Použít klíč", id: "useTheKey" },
    ],
  },

  {
    id: "useTheKey",
    text: (
      <p>
        Vložím malý, zrezivělý klíček do zámku dveří – ten samý, který jsem před
        chvílí našel na stole. Kov tiše zaklapne a s lehkým odporem se otočí. V
        ten moment se z dolního patra ozve zvláštní zvuk. Rytmické klapání. Jako
        kdyby někdo – nebo něco – pomalu sestupovalo po schodech. Zadržím dech.
        Ale pak… naprosté ticho. Ne to obyčejné ticho, které zažíváš v prázdném
        domě. To ticho je husté, těžké. Dusivé. Mám pocit, že se mi hrudník
        stahuje, jako by se vzduch najednou ztratil. A právě tehdy mi v hlavě
        vytane ten jediný vzkaz, který všechno začal: „Nevěř tichu.“
      </p>
    ),
    options: [
      { text: "Zůstat stát a poslouchat", id: "stay" },
      { text: "Vstoupit do dveří", id: "goInside" },
    ],
  },

  {
    id: "stay",
    text: (
      <p>
        Stojím nehybně jako kámen a snažím se téměř nedýchat. Všechny smysly mám
        nastražené a čekám, co se bude dít. Neděje se nic, tak se rozhodnu
        vstoupit do dveří.
      </p>
    ),
    options: [{ text: "Vstoupit do dveří", id: "goInside" }],
  },

  {
    id: "goInside",
    text: (
      <p>
        Rukou tlačím na dřevěné dveře, které se s vrzáním pomalu otevírají.
        Místnost je velmi malá a tmavá. Světlo se do ní dostává pouze z vedlejší
        místnosti. Vedle stěny je křeslo a na něm hnědý kožený deník s iniciály
        tvého dědečka. Musím se vrátit do místnosti s psacím strojem a lampou,
        abych v něm mohl číst. Stránky byly plné poznámek, náčrtů symbolů a
        jmen, které mi nic neříkaly. Spousta stránek bylo prázdných. Jen
        předposlední strana lehce vyčnívala z deníku. Rukopis nebyl podobný
        tomu, jaký používal dědeček. Na stránce bylo napsáno inkoustovým perem:
        „Každý třetí v linii nese tíhu. Já to byl. Teď ty. Celý náš rod je
        součástí cyklu a nejde předtím utéct. Obětuj se a napiš zde své jméno,
        jinak přejde kletba na každého potomka. Nechápu, co to vše má znamenat,
        ale není tak těžké si spočítat, že zrovna já jsem po dědečkovi třetí v
        pořadí. Hlavou se mi prohánějí myšlenky - „že by naše rodina byla
        prokletá a tento dům je s tím vším spojený? Proto mi tady všude nechal
        dědeček indicie? Ale proč?“ Napadlo mě, že za tím udělám tlustou čáru,
        odejdu a dům nechám napospas i s jeho prokletím, jenže najednou jsem měl
        pocit, že nejsem sám. Mé myšlenky přerušil přibližující se klapavý zvuk.
        Otočil jsem se, ale nic tam nebylo. Když jsem se chtěl otočit zpátky,
        koutkem oka jsem si všiml, že se na tabuli právě začalo psát další
        jméno. To moje.
      </p>
    ),
    options: [
      { text: "Zpanikařit a utéct oknem", id: "runAway" },
      { text: "Napsat do deníku své jméno a tím se obětovat", id: "writeName" },
    ],
  },

  {
    id: "runAway",
    text: (
      <p>
        Okno se s hlasitým prasknutím dřevěných rámů rozlétlo dokořán. Neváhám
        ani vteřinu a vyskakuji ven – pod oknem je úzká dřevěná stříška, která
        sotva unese mou váhu. Pomalu se sunu po šindelové střeše směrem k
        okraji, když za sebou zaslechnu rychlý dusot kroků. Nestačím se otočit.
        Náhlé postrčení mě vyvede z rovnováhy. Padám. Vzduch mi vyráží dech,
        svět se rozmazává. Náraz na studený kámen je krutý a neúprosný. Ležím
        bez hnutí. V puse cítím železitou pachuť krve. Snažím se zaostřit pohled
        vzhůru, ale obrysy se mi rozplývají. Přesto zahlédnu siluetu postavy,
        která se ke mně pomalu blíží. Těžce dýchá. Sklání se ke mně, cítím její
        dech na uchu. A pak šeptá: „Svým rozhodnutím jsi změnil běh kletby. Nyní
        ji ponese každý prvorozený. Navždy.“ Nedokážu odpovědět. Myšlenky mi
        bloudí. Vidím tvář svého syna – jasnou, nevinnou, nic netušící. Slzy mi
        stékají po spáncích. Ne kvůli bolesti. Kvůli němu. A pak přichází ticho.
      </p>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "start" }],
  },

  {
    id: "writeName",
    text: (
      <p>
        Vzpomenu si na pero s inkoustem, které jsem zahlédl na stole v dědečkově
        pracovně. Téměř automaticky se rozběhnu zpět. Usedám na jeho místo,
        otevírám deník na poslední stranu a inkoustovým perem pomalu píšu své
        jméno. Jakmile dopíšu poslední písmeno, cosi se změní. Hodiny dole v
        hale se zničehonic dávají do pohybu. Zvednu zápěstí — 3:33. Úplně stejně
        jako tehdy. Najednou začnou odbíjet. Každý úder jako by otřásal
        samotnými zdmi domu. Leknu se, zalapám po dechu — otevřu oči dokořán,
        snažím se zakřičet, ale nic... žádný zvuk. Jen... Ticho.
      </p>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "start" }],
  },
];
