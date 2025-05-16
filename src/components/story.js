export const story = {
  start: {
    id: "start",
    text: (
      <>
        <p>
          Můj dědeček zemřel náhle. Lékaři to označili za srdeční selhání, ale
          žádná pitva neproběhla. Když jsme ho našli, seděl u stolu ve své
          pracovně, oči dokořán, ústa otevřená jako by naposledy křičel, ale
          nikdo ho neslyšel. Byl úplně sám. Nebo aspoň tak to tvrdí ostatní.
        </p>
        <p>
          Po pohřbu mi přišel balíček bez zpáteční adresy. Uvnitř byla jen
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

  findTheKey: {
    id: "findTheKey",
    text: (
      <>
        <p>
          Rozhodl jsem se jet do jeho starého domu, který už roky chátral. Nikdo
          tam nevkročil od chvíle, kdy dědečka odvezli. Vzduch uvnitř byl těžký,
          vstupní hala a schodiště byly zakryté v šeru. Okny zatemněnými těžkými
          závěsy neprocházelo příliš mnoho světla. Robustní podlahové hodiny z
          ořechového dřeva už netikaly, ručičky na ciferníku se zastavily ve
          3:33. Když jsem odsunul jejich těžké tělo od zdi, opravdu tam byl – na
          zemi ležel malý rezavý klíč, zavěšený na řetízku.
        </p>
        <p>Na zadní straně hodin bylo naškrábáno: „Pracovna“.</p>
        <p>Mám pocit, že pod škrábanci něco je, ale pořádně na to nevidím.</p>
      </>
    ),
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock" }, //odečet síly o 25%
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  checkTheClock: {
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

  goToTheOffice: {
    id: "goToTheOffice",
    text: (
      <p>
        Cestou po schodech sleduji obrazy předků a nemůžu se ubránit pocitu, že
        mě svými pohledy sledují. Ve druhém patře na konci chodby se konečně
        ocitám v jeho pracovně. Zdá se, že zde bylo vše tak, jak to zanechal.
        Zápisníky, knihy a staré mapy. Co však nejvíce upoutalo mojí pozornost a
        způsobilo nepříjemnou husí kůži na zátylku, byly podivné náčrty postavy
        v černé kápi bez obličeje. Snažím se zůstat v klidu a nenechat se
        ovládnout strachem. Pokusím se znovu soustředit. V rohu místnosti jsou
        dveře, které si jen mlhavě pamatuji z dětství – jsou zamčené. Z kapsy si
        vytáhnu klíč, který jsem našel pod hodinami.
      </p>
    ),
    options: [
      {
        text: (
          <p>
            Mám strach, možná by některé věci
            <br /> nemusely být vysvětleny za každou cenu
          </p>
        ),
        id: "goHome",
      }, // odečet síly o 25%
      {
        text: (
          <p>
            Chvíli zvažuji, jestli to chci <br />
            opravdu vědět, ale pak klíč zasunu do zámku
          </p>
        ),
        id: "openTheDoor",
      },
    ],
  },

  goHome: {
    id: "goHome",
    text: (
      <p>
        Běžím chodbou, jak nejrychleji umím. Když scházím schody dolů, zarazí mě
        zjištění, že hodiny, které jsem odsunul, nyní stojí před vchodovými
        dveřmi. Jsou otočené zády a slova vyrytá do dřeva se změnila: „Otoč se.
        Pracovna.“ Nezajímá mě, co se tady stalo, chci prostě tento dům opustit
        jednou pro vždy. Zatlačím do hodin zboku, abych si uvolnil průchod ven.
        Jakmile se mi to povedlo a sevřel jsem kliku od dveří, začal mi zvonit
        telefon. Hlas na druhém konci se mě snaží varovat slovy: „Nesmíš
        odejít!“, a poté okamžitě zavěsí.
      </p>
    ),
    options: [
      { text: "Ignorovat varování a odejít", id: "leaveTheHouse" }, // odečet síly o 25%
      { text: "Vrátit se zpátky k zamčeným dveřím", id: "openTheDoor" },
    ],
  },

  leaveTheHouse: {
    id: "leaveTheHouse",
    text: (
      <>
        <p>
          Sahám na kliku a snažím se dveře otevřít, ale jsou zamčené. V tu
          chvíli začnou hodiny odbíjet a z chodby se ozvou pomalé, těžké kroky,
          blížící se ke mě. Rozběhnu se k nejbližšímu oknu, lomcuju s ním,
          snažím se otočit klikou, ale nejde otevřít. Srdce mi tluče až v krku.
        </p>
        <p>A pak si to uvědomím ...náhlé ticho.</p>
        <p>
          Kroky zmizely. Zpozorním, uši mám nastražené, dech zadržuju. A pak to
          ucítím. Studený dech na zátylku a šepot přímo u ucha: „Měl jsi
          poslechnout!“. Zděšením se snažím křičet, ale nevydám ze sebe ani
          hlásku. Všechno kolem mě náhle potemní, světla zhasnou, ale i přesto
          vidím. Vidím sebe, jak tam stojím, zkamenělý, oči vytřeštěné, ruka
          stále svírá kliku. Ale já už nejsem vevnitř. Jsem mimo a pozoruji to
          zvenčí. Něco mě nahradilo. Něco, co čekalo na okamžik slabosti, na to
          až mi dojdou síly.
        </p>
        <p>
          Postava v mém těle se porozhlédne po místnosti, usměje se, otevře
          dveře a vyjde ven.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finish" }],
  },

  openTheDoor: {
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
        křídovými značkami a slovy, které mi nedávaly smysl.
      </p>
    ),
    options: [
      { text: "Prozkoumat podrobněji místnost", id: "checkTheRoom" },
      { text: "Porozhlédnout se po stole", id: "checkTheDesk" },
    ],
  },

  checkTheRoom: {
    id: "checkTheRoom",
    text: (
      <p>
        Rozhodnu se nejdříve prozkoumat místnost a v rohu si všimnu dalších
        dveří, které zprvu nebyly vidět. Jsou menší než ty, které vedly do této
        místnosti a vypadají však mnohem starším, až starodávným vzhledem. Jinak
        mě nic dalšího v místnosti nezaujalo.
      </p>
    ),
    options: [{ text: "Porozhlédnout se po stole", id: "checkTheDesk1" }],
  },
  checkTheDesk: {
    id: "checkTheDesk",
    text: (
      <p>
        Uprostřed stolu leží starý psací stroj. V jeho útrobách je zastrčený
        zažloutlý list papíru. Text na něm je krátký, útržkovitý: „Někdo nás
        sleduje. Skrývá se v tichu. Pokud tohle čteš, víš, že tě pozoruje. Najdi
        můj zápisník..." Inkoust v posledních znacích je roztřesený, jako by byl
        psán ve spěchu… nebo ve strachu. Jakmile dočtu poslední řádek, pocítím
        náhlé napětí. V uších cítím tlukot srdce, ale nikde nikoho nevidím.
        Všechno ve mně křičí, abych odsud odešel. Pryč z tohoto domu. Pryč od
        toho všeho. Ale vím, že odpovědi se skrývají v dědečkově deníku. A teď
        už nemohu couvnout. Zhluboka se nadechnu, snažím se zklidnit. A právě
        tehdy si všimnu drobnosti: Vedle psacího stroje leží malý klíč. Schovám
        si ho do kapsy, třeba se bude hodit.
      </p>
    ),
    options: [{ text: "Prozkoumat podrobněji místnost", id: "checkTheRoom1" }],
  },

  checkTheRoom1: {
    id: "checkTheRoom1",
    text: (
      <p>
        Chci se ještě porozhlédnout po místnosti, možná mi něco uniklo. Koutkem
        oka zavadím o obrys dveří, který jsem si předtím nevšiml. Jsou menší než
        ty, které vedly do této místnosti a vypadají však mnohem starším, až
        starodávným vzhledem. Klíč, který jsem našel bude možná pasovat do
        těchto dveří.
      </p>
    ),
    options: [{ text: "Použít klíč", id: "useTheKey" }],
  },

  checkTheDesk1: {
    id: "checkTheDesk1",
    text: (
      <p>
        Uprostřed stolu leží starý psací stroj. V jeho útrobách je zastrčený
        zažloutlý list papíru. Text na něm je krátký, útržkovitý: „Někdo nás
        sleduje. Skrývá se v tichu. Pokud tohle čteš, víš, že tě pozoruje. Najdi
        můj zápisník..." Inkoust v posledních znacích je roztřesený, jako by byl
        psán ve spěchu… nebo ve strachu. Jakmile dočtu poslední řádek, pocítím
        náhlé napětí. V uších cítím tlukot srdce, ale nikde nikoho nevidím.
        Všechno ve mně křičí, abych odsud odešel. Pryč z tohoto domu. Pryč od
        toho všeho. Ale vím, že odpovědi se skrývají v dědečkově deníku. A teď
        už nemohu couvnout. Zhluboka se nadechnu, snažím se zklidnit. A právě
        tehdy si všimnu drobnosti: Vedle psacího stroje leží malý klíč. Určitě
        bude od těch malých dveří.
      </p>
    ),
    options: [{ text: "Použít klíč", id: "useTheKey" }],
  },

  useTheKey: {
    id: "useTheKey",
    text: (
      <p>
        Vložím malý, zrezivělý klíček do zámku dveří – ten samý, který jsem před
        chvílí našel na stole. Kov tiše zaklapne a s lehkým odporem se otočí. V
        ten moment se z dolního patra ozve zvláštní zvuk doprovázený pomalými
        kroky. Jako kdyby někdo – nebo něco – pomalu sestupovalo po schodech.
        Zadržím dech. Ale pak… naprosté ticho. Ne to obyčejné ticho, které
        zažíváš v prázdném domě. To ticho je husté, těžké, dusivé. Mám pocit, že
        se mi hrudník stahuje, jako by se vzduch najednou ztratil. A právě tehdy
        mi v hlavě vyvstane ten jediný vzkaz, který všechno začal: „Nevěř
        tichu.“
      </p>
    ),
    options: [
      { text: "Zůstat stát a poslouchat", id: "stay" },
      { text: "Vstoupit do dveří", id: "goInside" },
    ],
  },

  stay: {
    id: "stay",
    text: (
      <p>
        Stojím nehybně jako kámen a snažím se téměř nedýchat. Všechny smysly mám
        nastražené a čekám, co se bude dít. K mému údivu se neděje nic. Rozhodnu
        se vstoupit do dveří.
      </p>
    ),
    options: [{ text: "Vstoupit do dveří", id: "goInside" }],
  },

  goInside: {
    id: "goInside",
    text: (
      <>
        <p>
          Rukou tlačím na dřevěné dveře, které se s vrzáním pomalu otevírají.
          Místnost je holá. Žádný nábytek, žádné okno, jen stůl a na něm nějaký
          přístroj a vedle něj ležel starý kožený kufřík. Přístroj vypadal jako
          podivný hybrid mezi starým radiopřijímačem a laboratorním zařízením
          <br /> z padesátých let. Prohlídl jsem si ho ze všech stran, ale žádný
          zřetelný nápis, který by napověděl, k čemu vlastně slouží. Možná tlak?
          Možná záření? Možná čas?
        </p>
        <p>
          Prsty jsem přejel po studeném kovu, jako bych se chtěl zeptat, co tu
          vlastně dělá - a v tom <br />v něm něco tiše cvaklo.
        </p>
      </>
    ),
    options: [
      { text: "Prohlédnout si kufřík", id: "suitcase" },
      { text: "Prozkoumat, co cvaklo", id: "checkTheMachine" },
    ],
  },

  suitcase: {
    id: "suitcase",
    text: (
      <>
        <p>
          Otevírám kufřík a doufám, že tam dědeček zanechal návod k použití. Po
          přečtení jeho zápisků zjišťuji, že existují zvukové prahy, jakési
          mezery v realitě, které lidské ucho neslyší, ale technologie ano.
          Nazýval je „zvukové díry“. V dalších poznámkách se nejčastěji opakuje
          věta - vědomí skryté v tichu. Jedna poznámka vyčnívala mezi ostatními
          a znepokojila mě ještě více než samotný dědečkův výzkum.
        </p>
        <p>
          „Nikdy neotvírej úplné ticho, protože tě někdo uslyší. Jestli tohle
          čteš, přístroj nezapínej a znič ho!"
        </p>
      </>
    ),
    options: [
      { text: "Zničit přístroj", id: "destroyTheMachine" },
      { text: "Zapnout přístroj", id: "startTheMachine" },
    ],
  },

  checkTheMachine: {
    id: "checkTheMachine",
    text: (
      <>
        <p>
          Cvaknutí mě zaujalo a snažil jsem se zjistit, odkud pochází. Opatrně
          jsem obcházel přístroj ze všech stran, až jsem nechtěně zatáhl za
          páčku – a přístroj se spustil. Zpočátku se nic nedělo. Vypadalo to, že
          je rozbitý. Ale po chvíli začal blikat a na displeji se pomalu začala
          vykreslovat křivka. Zatímco graf nabíral na intenzitě, otevřel jsem
          kufřík. Hned na první pohled mě zaujala poznámka, která mi rozbušila
          srdce. Stálo na ní:
        </p>
        <p>
          „Nikdy neotvírej úplné ticho, protože tě někdo uslyší. Jestli tohle
          čteš, přístroj nezapínej a znič ho!“
        </p>
        <p>
          Graf vykazoval čím dál vyšší hodnoty a zároveň s tím rostla i moje
          nervozita. Najednou se všechno kolem mě ponořilo do tmy. Když se obraz
          znovu vyjasnil, uviděl jsem něco nepochopitelného – díval jsem se sám
          na sebe. Něco mě nahradilo a já jsem zůstal uvězněný v tichu. Postava,
          která teď obývala mé tělo, se usmála… a vykročila ze dveří.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finish" }],
  },

  destroyTheMachine: {
    id: "destroyTheMachine",
    text: (
      <>
        <p>
          Chvíli jsem jen stála přemýšlel nad tím, co jsem se zrovna dozvěděl.
          Ale nestačilo mi to, potřeboval jsem vědět více. Odnesl jsem kufřík do
          vedlejší místnosti, kde bylo více světla a snažil jsem se z toho
          pochopit co nejvíce. Četl jsem vše několikrát a pomalu. A s každým
          slovem jsem víc chápal, co se tady stalo.
        </p>
        <p>
          Dědeček psal, že přístroj otevírá zvukovou trhlinu – slabé místo v
          našem světě, skrz které proniká něco, co nemá tvar ani jméno, ale co
          se dokáže přisát na mysl. Co tě vysaje a nahradí. Prý ji uzavřel, ale
          stálo ho to život. Pochopil jsem, že když ten přístroj znovu spustím,
          bude to jako znovu otevřít dveře, které měly zůstat navždy zavřené.
        </p>
        <p>
          Měl jsem chuť to zkusit, jen na chvíli slyšet, co slyšel on. Ale pak
          jsem si vzpomněl na jeho tělo, na ten výkřik, který se mu zasekl v
          hrdle a rozhodl se ho poslechnout.
        </p>
      </>
    ),
    options: [{ text: "Pokračovat", id: "goOn" }],
  },

  goOn: {
    id: "goOn",
    text: (
      <p>
        V domě jsem našel staré kladivo a v okamžiku, kdy jsem zvedl ruku,
        rozhodnut přístroj rozbit, jsem si uvědomil, že vše kolem ztichlo. Cítil
        jsem, jak se mi pomalu začíná svět kolem zatemňovat a v tom jsem si to
        uvědomil. Dědeček trhlinu uzavřel, ale něco z ní zůstalo v domě a teď mi
        chce ukrást to nejcennější, co mám. Mě, moji identitu, mé vědomí.
        {/* Každý kus kovu, každou
        součástku, každou lampu. Když jsem skončil, cítil jsem, jak se kolem mě
        něco zklidnilo. Jako by dům konečně vydechl. Jako by čekal na tenhle
        okamžik. Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak
        nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v
        tom tichu. */}
      </p>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finish" }],
  },

  finish: {
    id: "finish",
    text: (
      <>
        <p>
          Došel jsi až na samotný konec… Ale každý konec je jen začátek nového
          rozhodnutí.
        </p>
        <p>
          Chceš prožít příběh znovu s vědomím, které už máš? Klikni na
          Pokračovat.
        </p>
      </>
    ),
    options: [{ text: "Pokračovat", id: "again" }],
  },

  ignoreTheLetter: {
    id: "ignoreTheLetter",
    text: (
      <>
        <p>
          Roztrhal jsem dopis na několik kousků a vhodil do koše. Každý útržek
          jako by odnášel malý kousek bolesti, která mě tížila. Nezapomenu na
          něj nikdy, ale nechci, aby mě to dál drželo v minulosti.
        </p>
        <p>
          V hlavě mi stačí pár krásných vzpomínek – jeho hlas, když se smál,
          kůže na rukou ztvrdlá prací a ta jeho vůně... vždycky voněl po
          doutníku, ne těžce, ale jemně, jako by ten kouř byl součástí jeho
          osobnosti. Byl to jeho tichý rituál, chvíle klidu uprostřed dne. A
          právě proto teď sahám do zásuvky po doutníku, který mi kdysi dal.
          Zapaluji ho pomalu, s úctou, a když první obláček dýmu vystoupá ke
          stropu, zavírám oči. Vzpomínám na dědečka – ne se smutkem, ale s
          úsměvem na rtech. Ten doutník je teď most mezi mnou a jím.
        </p>
      </>
    ),
    options: [
      { text: "Dát si k doutníku i whiskey", id: "whiskey" },
      { text: "Zůstat jen u doutníku", id: "cigar" },
    ],
  },

  whiskey: {
    id: "whiskey",
    text: (
      <>
        <p>
          Sahám do skříňky a vytahuji lahev whiskey – starou, kvalitní,
          otevřenou jen při výjimečných příležitostech. Nalévám si sklenku a
          posadím se do křesla. Piju pomalu, jako bych tím chtěl rozpustit i
          poslední zbytky napětí.
        </p>
        <p>
          Dolévám si třetí a pak i čtvrtou sklenku a vlivem náročného dne a
          alkoholu mi hlava klesá na opěradlo a víčka těžknou. Usínám.
        </p>
        <p>
          V noci se mi zdá zvláštně živý sen. Jsem v dědečkově domě a procházím
          chodbami, které znám zpaměti. Najednou stojím před dveřmi do jeho
          pracovny v patře. Ty dveře jsou pootevřené. Vejdu dovnitř a na stole
          leží malý kožený kufřík. Opatrně ho otevřu. Uvnitř jsou zápisníky plné
          poznámek. Všechno v jeho známém rukopise. Chtěl jsem si je přečíst
          detailněji a více to pochopit, ale nestihnu to, probouzím se.
        </p>
      </>
    ),
    options: [
      { text: "Jít do dědečkova domu", id: "listenDream" },
      { text: "Ignorovat sen", id: "ignoreTheDream" },
    ],
  },
  ignoreTheDream: {
    id: "ignoreTheDream",
    text: (
      <>
        <p>
          Sedím na gauči a ještě několik minut jen zírám do stropu. Ten sen byl
          tak skutečný, jako bych v tom domě opravdu byl. Celý den mi ten obraz
          leží v hlavě. Kufřík, pracovna, poznámky. Snažím se to vytěsnit, ale
          znovu a znovu mi to před očima naskakuje. K večeru už to nevydržím.
          Oblékám se, beru klíče a vyrážím. Mířím k dědečkovému domu.
        </p>
      </>
    ),
    options: [{ text: "Jít do dědečkova domu", id: "followTheDream" }],
  },
};
