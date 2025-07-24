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
            padding: "15px",
          }}>
          <strong>„Najdi klíč pod hodinami. Nevěř tichu.“</strong>
        </p>
        <p>
          To bylo všechno. Žádný testament. Žádný formální dopis. Jen tenhle
          podivný vzkaz.
        </p>
        <p className="start_paragraph">
          Teď jsi na řadě ty, dopiš další řádek:
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
          3:33. Když jsem odsunul jejich těžké tělo od zdi, opravdu tam byl, na
          zemi ležel malý rezavý klíč, zavěšený na řetízku.
        </p>
        <p>Na zadní straně hodin bylo naškrábáno: „Pracovna“.</p>
        <p>
          Měl jsem pocit, že pod škrábanci něco je, ale pořádně jsem na to
          neviděl.
        </p>
      </>
    ),
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock" },
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
          zapadá, halu nyní prosvěcovalo denní světlo. Na stěnách jsem viděl
          nalepenou starodávnou zelenou tapetu s růžovými květinovými vzory. Na
          zdi, která vedla podél schodiště visely obrazy předků. Ve spodním
          patře se nacházelo několik masivních zavřených dřevěných dveří. Sice
          jsem tu již spoustu let nebyl, ale takhle strašidelné jsem si to z
          dětství nepamatoval. Snad to bude stát za to, pomyslel jsem si, a
          přiblížil jsem se k hodinám. Ohnul jsem se k dolní části hodin a
          zkoumal, co před chvíli upoutalo moji pozornost. Otevřenou dlaní jsem
          přejel přes nalepený papírek. Jednalo se o výrobní štítek s názvem
          společnosti „Mundus“.
        </p>
        <p>
          „Tohle byla ztráta času“ procedil jsem mezi zuby podrážděným tónem.
        </p>
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
        Cestou po schodech jsem sledoval obrazy předků a nemohl se ubránit
        pocitu, že mě svými pohledy sledují. Snažil jsem se zůstat v klidu a
        nenechat se ovládnout strachem. Pokusil jsem se znovu soustředit. Ve
        druhém patře na konci chodby jsem se konečně ocitl v jeho pracovně.
        Zdálo se, že zde bylo vše tak, jak to zanechal. Zápisníky, knihy a staré
        mapy. V rohu místnosti byly dveře, které jsem si jen mlhavě pamatoval z
        dětství, byly zamčené. Z kapsy jsem si vytáhl klíč, který jsem našel pod
        hodinami.
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
      },
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
        Běžel jsem chodbou, jak nejrychleji umím. Když jsem scházel schody dolů,
        zarazilo mě zjištění, že hodiny, které jsem odsunul, nyní stojí před
        vchodovými dveřmi. Byly otočené zády a slova vyrytá do dřeva se změnila:
        „Otoč se. Pracovna.“ Nezajímalo mě, co se tady stalo, chtěl jsem prostě
        tento dům opustit jednou pro vždy. Zatlačil jsem do hodin zboku, abych
        si uvolnil průchod ven. Jakmile se mi to povedlo a sevřel jsem kliku od
        dveří, začal mi zvonit telefon. Hlas na druhém konci se mě snažil
        varovat slovy: „Nesmíš odejít!“, a poté okamžitě zavěsil.
      </p>
    ),
    options: [
      { text: "Ignorovat varování a odejít", id: "leaveTheHouse" },
      { text: "Vrátit se zpátky k zamčeným dveřím", id: "openTheDoor" },
    ],
  },

  leaveTheHouse: {
    id: "leaveTheHouse",
    text: (
      <>
        <p>
          Sahl jsem na kliku a snažil se dveře otevřít, ale byly zamčené. V tu
          chvíli začaly znovu odbíjet hodiny. Rozběhl jsem se k nejbližšímu
          oknu, lomcoval s ním, snažil jsem se otočit klikou, ale nešlo otevřít.
          Srdce mi tluklo až v krku.
        </p>
        <p>
          A pak mi to došlo... náhlé ticho. Nebylo slyšet ani štěbetání ptáků,
          které mě v domě dosud provázelo, a hodiny byly opět potichu.
        </p>
        <p>
          Zpozorněl jsem, nastražil uši a zadržel dech. A pak jsem ucítil, jak
          opouštím své tělo. Zděšený jsem se snažil zakřičet, ale nevydal jsem
          ani hlásku. Všechno kolem mě náhle potemnělo, světla zhasla, a přesto
          jsem viděl. Viděl jsem sám sebe, jak tam stojím zkamenělý, s očima
          vytřeštěnýma, ruka stále svírala kliku. Ale já už nebyl uvnitř. Byl
          jsem mimo a pozoroval to zvenčí. Něco mě nahradilo. Něco, co čekalo,
          až vejdu do domu, aby se mohlo zmocnit mého těla.
        </p>
        <p>
          Postava v mém těle se porozhlédla po místnosti, usmála se, otevřela
          dveře a vyšla ven.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finishLost" }],
  },

  finishLost: {
    id: "finishLost",
    text: <p>Tak tohle nevyšlo, chceš to zkusit znovu?</p>,
    options: [{ text: "Pokračovat", id: "again" }],
  },

  openTheDoor: {
    id: "openTheDoor",
    text: (
      <p>
        Ruka se mi třásla, když jsem zasouval klíč do zámku. Kov zaškrábal, klíč
        zapadl dokonale. Otočil jsem jím, jedno klapnutí, pak druhé. Dveře se po
        chvíli samy, s tichým zaskřípěním, pootevřely. Za nimi byla tma a ve
        vzduchu byl cítit petrolej. Vstoupil jsem dovnitř a všiml si petrolejové
        lampy na stole. Z kapsy jsem vytáhl zapalovač a zapálil knot. Světlo se
        rozzářilo a odhalilo nástěnku pokrytou fotografiemi, novinovými
        výstřižky a ručně psanými poznámkami. Byl tam i psací stroj a černá
        tabule s křídovými značkami a slovy, která mi nedávala smysl.
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
        Rozhodl jsem se nejdříve prozkoumat místnost a v rohu jsem si všiml
        dalších dveří, které zprvu nebyly vidět. Byly menší než ty, které vedly
        do této místnosti, a působily mnohem starším, až starodávným dojmem.
        Jinak mě v místnosti nic dalšího nezaujalo.
      </p>
    ),
    options: [{ text: "Porozhlédnout se po stole", id: "checkTheDesk1" }],
  },
  checkTheDesk: {
    id: "checkTheDesk",
    text: (
      <p>
        Uprostřed stolu ležel starý psací stroj. V jeho útrobách byl zastrčený
        zažloutlý list papíru. Text na něm byl krátký, útržkovitý: „Někdo nás
        sleduje. Skrývá se v tichu. Pokud tohle čteš, víš, že tě pozoruje. Najdi
        můj zápisník..." Jakmile jsem dočetl poslední řádek, pocítil jsem náhlé
        napětí. V uších jsem cítil tlukot srdce, ale nikoho jsem neviděl.
        Všechno ve mně křičelo, abych odsud odešel. Pryč z tohoto domu. Pryč od
        toho všeho. Ale věděl jsem, že odpovědi se skrývají v dědečkově
        zápisníku. Teď už jsem nemohl couvnout. Zhluboka jsem se nadechl a
        snažil se zklidnit. A právě tehdy jsem si všiml drobnosti: vedle psacího
        stroje ležel malý klíč. Schoval jsem si ho do kapsy, třeba se bude
        hodit.
      </p>
    ),
    options: [{ text: "Prozkoumat podrobněji místnost", id: "checkTheRoom1" }],
  },

  checkTheRoom1: {
    id: "checkTheRoom1",
    text: (
      <p>
        Chtěl jsem se ještě porozhlédnout po místnosti, možná mi něco uniklo.
        Koutkem oka jsem zavadil o obrys dveří, kterých jsem si předtím nevšiml.
        Byly menší než ty, které vedly do této místnosti, a působily mnohem
        starším, až starodávným dojmem. Klíč, který jsem našel, možná pasuje
        právě do těchto dveří.
      </p>
    ),
    options: [{ text: "Použít klíč", id: "useTheKey" }],
  },

  checkTheDesk1: {
    id: "checkTheDesk1",
    text: (
      <p>
        Uprostřed stolu ležel starý psací stroj. V jeho útrobách byl zastrčený
        zažloutlý list papíru. Text na něm byl krátký, útržkovitý: „Někdo nás
        sleduje. Skrývá se v tichu. Pokud tohle čteš, víš, že tě pozoruje. Najdi
        můj zápisník…“ Jakmile jsem dočetl poslední řádek, pocítil jsem náhlé
        napětí. Všechno ve mně křičelo, abych odsud odešel. Pryč z tohoto domu.
        Pryč od toho všeho. Ale věděl jsem, že odpovědi se skrývají v dědečkově
        zápisníku. Teď už jsem nemohl couvnout. Zhluboka jsem se nadechl a
        snažil se zklidnit. A právě tehdy jsem si všiml drobnosti: vedle psacího
        stroje ležel malý klíč. Určitě bude od těch malých dveří.
      </p>
    ),
    options: [{ text: "Použít klíč", id: "useTheKey" }],
  },

  useTheKey: {
    id: "useTheKey",
    text: (
      <p>
        Vložil jsem malý klíček do zámku dveří, který jsem před chvílí našel na
        stole. Kov tiše zaklapl a s lehkým odporem se otočil. V ten moment jsem
        uslyšel, jak v dolním patře začaly odbíjet hodiny, přitom když jsem do
        domu vstoupil, nefungovaly. Zadržel jsem dech a právě tehdy mi v hlavě
        vyvstal ten jediný vzkaz, který všechno začal: „Nevěř tichu.“
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
        Stál jsem nehybně jako kámen a snažil se téměř nedýchat. Všechny smysly
        jsem měl nastražené a čekal jsem, co se bude dít. K mému údivu se nedělo
        nic. Rozhodl se vstoupit do dveří.
      </p>
    ),
    options: [{ text: "Vstoupit do dveří", id: "goInside" }],
  },

  goInside: {
    id: "goInside",
    text: (
      <>
        <p>
          Rukou jsem tlačil na dřevěné dveře, které se s vrzáním pomalu
          otevřely. Místnost byla holá. Žádný nábytek, žádné okno, jen stůl, na
          něm nějaký přístroj a vedle něj starý kožený kufřík. Přístroj vypadal
          jako podivný hybrid mezi starým radiopřijímačem a laboratorním
          zařízením z padesátých let. Prohlédl jsem si ho ze všech stran, ale
          žádný zřetelný nápis, který by napověděl, k čemu vlastně slouží. Možná
          měří tlak, záření nebo čas?
        </p>
        <p>
          Prsty jsem přejel po studeném kovu, jako bych se chtěl zeptat, co tu
          vlastně dělá... a v tom v něm něco tiše cvaklo.
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
          páčku, přístroj se spustil. Zpočátku se nic nedělo. Vypadalo to, že je
          rozbitý. Ale po chvíli začal blikat a na displeji se pomalu začala
          vykreslovat křivka. Zatímco graf nabíral na intenzitě, otevřel jsem
          kufřík. Hned na první pohled mě zaujala poznámka, která mě
          znepokojila. Stálo na ní:
        </p>
        <p>„Jestli tohle čteš, přístroj nezapínej a znič ho!“</p>
        <p>
          Graf ukazoval čím dál vyšší hodnoty a spolu s tím rostla i moje
          nervozita. Najednou se kolem mě všechno ponořilo do husté tmy a
          naprostého ticha. Hodiny, které dříve odbíjely, najednou ztichly. Když
          se mi obraz pomalu vyjasnil, spatřil jsem něco naprosto
          nepochopitelného - díval jsem se sám na sebe. Něco mě nahradilo a já
          jsem zůstal uvězněný v tom naprostém tichu. Postava, která teď obývala
          mé tělo, se pomalu porozhlédla po místnosti… a pak vykročila ze dveří.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finishLost" }],
  },

  startTheMachine: {
    id: "startTheMachine",
    text: (
      <>
        <p>
          Ačkoliv jsem se snažil přesvědčit sám sebe, abych ten přístroj
          nezapínal, abych ho okamžitě zničil, zvědavost byla silnější než
          strach. Chtěl jsem jen na chvíli slyšet to, co slyšel dědeček.
        </p>
        <p>
          Zapnul jsem přístroj a napjatý jsem sledoval, co se stane. V místnosti
          zavládlo ticho, přerušované jen slabým pípáním a monotónním pohybem
          ručičky grafu, která se začala prudce vychylovat. Po chvíli jsem
          pocítil, jak mě opouští síla. Všechno kolem se začalo rozplývat do tmy
          a do naprostého ticha. Ticha, které mě doslova pohltilo. Když se mi
          obraz zase začal vracet, bylo něco špatně. Uviděl jsem sám sebe.
          Vnímal jsem vlastní postavu, jak stojí naproti mně, živá, dýchající,
          ale nebyl jsem to já. Něco jiného mě nahradilo. Já zůstal uvězněný v
          tom nicotném tichu, a ta postava - ten druhý já - se beze slova
          rozhlédl po místnosti, pomalu se otočil a vykročil směrem ke dveřím.
        </p>
      </>
    ),
    options: [{ text: "KONEC PŘÍBĚHU", id: "finishLost" }],
  },

  destroyTheMachine: {
    id: "destroyTheMachine",
    text: (
      <>
        <p>
          Chvíli jsem jen stál a přemýšlel nad tím, co jsem se právě dozvěděl.
          Ale nestačilo mi to, potřeboval jsem vědět víc. Odnesl jsem kufřík do
          vedlejší místnosti, kde stála petrolejová lampa, a snažil jsem se z
          toho pochopit co nejvíc. Četl jsem všechno několikrát a pomalu. A s
          každým slovem jsem lépe chápal, co se tady stalo.
        </p>
        <p>
          Dědeček psal, že přístroj otevírá zvukovou trhlinu, slabé místo v
          našem světě skrz které proniká něco, co nemá tvar ani jméno, ale
          dokáže se přisát na mysl. Co tě vysaje a nahradí. Prý ji uzavřel, ale
          stálo ho to život. Pochopil jsem, že když ten přístroj znovu spustím,
          bude to jako znovu otevřít dveře, které měly zůstat navždy zavřené.
        </p>
        <p>
          Měl jsem chuť to zkusit, jen na chvíli slyšet, co slyšel on. Ale pak
          jsem si vzpomněl na jeho tělo, na ten výkřik, který se mu zasekl v
          hrdle, a rozhodl se ho poslechnout.
        </p>
      </>
    ),
    options: [{ text: "Pokračovat", id: "fight" }],
  },

  fight: {
    id: "fight",
    text: (
      <p>
        V domě jsem našel staré kladivo a v okamžiku, kdy jsem zvedl ruku,
        rozhodnutý přístroj rozbít, jsem si uvědomil, že vše kolem ztichlo.
        Cítil jsem, jak se mi pomalu začíná svět kolem zatemňovat, a právě v ten
        moment mi došlo, že dědeček trhlinu sice uzavřel, ale něco z ní v domě
        zůstalo a teď mi chce ukrást to nejcennější, co mám: mě samotného, mou
        identitu, mé vědomí.
      </p>
    ),
    options: [{ text: "Pokračovat", id: "finish" }],
  },

  finish: {
    id: "finish",
    text: (
      <>
        <p>Paráda, gratuluji! :) </p>
        <p>
          Došel jsi až na samotný konec. Dům je zbaven všeho zlého a ty se můžeš
          v klidu vrátit domů. Nebo si to chceš projet ještě jednou?{" "}
        </p>
        <p>Pokud ano, klikni na Pokračovat</p>
      </>
    ),
    options: [{ text: "Pokračovat", id: "again" }],
  },

  ignoreTheLetter: {
    id: "ignoreTheLetter",
    text: (
      <>
        <p>
          Roztrhal jsem dopis na několik kousků a vhodil ho do koše. Každý
          útržek jako by odnášel malý kousek bolesti, která mě tížila.
          Nezapomenu na něj nikdy, ale nechtěl jsem, aby mě to dál drželo v
          minulosti.
        </p>
        <p>
          V hlavě mi stačilo pár krásných vzpomínek: jeho hlas, když se smál,
          kůže na rukou ztvrdlá prací a ta jeho vůně... vždycky voněl po
          doutníku, ne těžce, ale jemně, jako by ten kouř byl součástí jeho
          osobnosti. Byl to jeho tichý rituál, chvíle klidu uprostřed dne. A
          právě proto jsem teď sáhl do zásuvky po doutníku, který mi kdysi dal.
          Zapálil jsem ho pomalu, s úctou, a když první obláček dýmu vystoupal
          ke stropu, zavřel jsem oči. Vzpomínal jsem na dědečka, ne se smutkem,
          ale s úsměvem na rtech. Ten doutník byl mostem mezi mnou a jím.
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
          Sáhl jsem do skříňky a vytáhl lahev whiskey, starou, kvalitní,
          otevřenou jen při výjimečných příležitostech. Nalil jsem si sklenku a
          posadil se do křesla. Pil jsem pomalu, jako bych tím chtěl rozpustit i
          poslední zbytky napětí.
        </p>
        <p>
          Dolil jsem si třetí a pak i čtvrtou sklenku a vlivem náročného dne a
          alkoholu mi hlava klesla na opěradlo a víčka ztěžkla. Usnul jsem.
        </p>
        <p>
          Zdál se mi zvláštně živý sen. Byl jsem v dědečkově domě a procházel
          chodbami, které znám zpaměti. Najednou jsem stál před dveřmi do jeho
          pracovny v patře. Ty dveře byly pootevřené. Vešel jsem dovnitř a na
          stole ležel malý kožený kufřík. Opatrně jsem ho otevřel. Uvnitř byly
          zápisníky plné poznámek, všechno v jeho známém rukopise. Chtěl jsem si
          je přečíst detailněji a více to pochopit, ale nestihl jsem to a
          probudil jsem se.
        </p>
      </>
    ),
    options: [
      { text: "Jít do dědečkova domu", id: "listenDream" },
      { text: "Ignorovat sen", id: "ignoreTheDream" },
    ],
  },

  cigar: {
    id: "cigar",
    text: (
      <>
        Po náročném dni jsem byl tak unavený, že jsem si po doutníku hned šel
        lehnout. Ve spánku se mi zdál zvláštní, až živý sen. Ocitl jsem se v
        dědečkově domě a procházel chodbami, které znám nazpaměť. Najednou
        stojím před dveřmi do jeho pracovny v patře. Jsou pootevřené. Vejdu
        dovnitř a na stole přede mnou leží malý kožený kufřík. Opatrně ho
        otevřu, uvnitř jsou zápisníky plné poznámek, psané jeho známým
        rukopisem. Chci si je přečíst důkladněji a lépe pochopit, co v nich
        stojí, ale nestihnu to a probouzím se.
      </>
    ),
    options: [
      { text: "Jít do dědečkova domu", id: "listenDream" },
      { text: "Ignorovat sen", id: "ignoreTheDream" },
    ],
  },

  listenDream: {
    id: "listenDream",
    text: (
      <>
        <p>
          Probudil jsem se celý rozlámaný z gauče, na kterém jsem večer usnul s
          hlavou plnou myšlenek. Jen co jsem se trochu protáhl, vybavil se mi
          sen, který se mi zdál. Byl až nepříjemně živý, jako bych v tom domě
          skutečně byl. Bylo mi hned jasné, že se tam musím vydat a zjistit,
          jestli tam ten kufřík opravdu je.
        </p>
        <p>
          Za chvíli jsem už přijížděl k domu mého dědečka. Vstupní hala se
          schodištěm byla ponořená do šera a tlumené závěsy na oknech
          nepropouštěly téměř žádné světlo. Robustní hodiny z ořechového dřeva u
          schodiště už netikaly. Ručičky na ciferníku stály, přesně na 3:33.
          Když jsem jejich masivní tělo odsunul od zdi, opravdu tam byl. Na
          podlaze ležel malý rezavý klíč, zavěšený na starém řetízku. Na zadní
          straně hodin bylo vyryté slovo: „Pracovna“.
        </p>
        <p>
          Pod rýhami se zdálo být ještě něco dalšího, ale v přítmí jsem to
          nedokázal rozpoznat.
        </p>
      </>
    ),
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock" },
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  ignoreTheDream: {
    id: "ignoreTheDream",
    text: (
      <>
        <p>
          Seděl jsem na gauči a ještě několik minut jen zíral do stropu. Ten sen
          byl tak skutečný, jako bych v tom domě opravdu byl. Celý den mi ten
          obraz ležel v hlavě. Kufřík, pracovna, poznámky. Snažil jsem se to
          vytěsnit, ale znovu a znovu mi to před očima naskakovalo. K večeru
          jsem to už nevydržel. Oblékl jsem se, vzal klíče a vyrazil k
          dědečkovému domu.
        </p>
      </>
    ),
    options: [{ text: "Jít do dědečkova domu", id: "followTheDream" }],
  },

  followTheDream: {
    id: "followTheDream",
    text: (
      <>
        <p>
          Cestou jsem si říkal, jestli jsem přece jen neměl počkat alespoň do
          rána. Nemusel bych se pak potloukat po starém domě ve tmě. Ale
          zvědavost zvítězila. Chtěl jsem to mít rychle za sebou. Vejít do domu,
          zjistit, že tam žádný kufřík není, a vrátit se v klidu domů. Když jsem
          vešel dovnitř, vzduch byl těžký. Vstupní hala a schodiště nešly přes
          tmu vůbec vidět. Elektřina v domě už byla vypnutá, ale naštěstí jsem
          si do batohu přibalil baterku. Když jsem ji rozsvítil, uviděl jsem
          robustní podlahové hodiny z ořechového dřeva, které už netikaly.
          Odsunul jsem je trochu od zdi a uviděl jsem na zemi malý rezavý klíč
          zavěšený na řetízku. Na zadní straně hodin bylo naškrábáno:
          „Pracovna“. Měl jsem pocit, že pod těmi škrábanci je ještě něco
          dalšího… ale v té tmě jsem to nedokázal pořádně přečíst.
        </p>
      </>
    ),
    options: [
      { text: "Prozkoumat hodiny", id: "checkTheClock2" },
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },

  checkTheClock2: {
    id: "checkTheClock2",
    text: (
      <>
        <p>
          Klekl jsem si k hodinám a přitom jsem cítil, jak se mi záda ozývají po
          celém dni. Snažil jsem se prstem setřít špínu kolem rytiny, ale nápis
          pod škrábanci odolával. Pevně jsem sevřel baterku mezi zuby, opřel
          jsem se o bok hodin a zatlačil ještě víc. Dřevo skřípalo, klouby mi
          zapraskaly a konečně se těžké tělo hodin pohnulo dál od zdi. S námahou
          jsem se naklonil a pokusil se očistit prostor za nimi. Dlaně jsem měl
          od prachu, tričko se mi lepilo na zádech. Tahle snaha mě stála víc
          sil, než jsem čekal. Konečně jsem se dostal k místu, které zaujalo
          moji pozornost a zjistil jsem, že se jedná o výrobní štítek s názvem
          společnosti „Mundus“.
        </p>
        <p>
          „Tohle byla ztráta času“ procedil jsem mezi zuby podrážděným tónem.
        </p>
      </>
    ),
    options: [
      { text: "Pokračovat do dědečkovy pracovny", id: "goToTheOffice" },
    ],
  },
};
