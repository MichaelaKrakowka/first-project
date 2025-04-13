import React from "react";
import "./MainStory.css";

export const MainStory = ({ isCLicked }) => {
  return (
    <section>
      {isCLicked && (
        <div className="main_story">
          <p>
            Můj dědeček zemřel náhle. Lékaři to označili za srdeční selhání, ale
            žádná pitva neproběhla. Když jsme ho našli, seděl u stolu ve své
            pracovně, oči dokořán, ústa otevřená jako by naposledy křičel – ale
            nikdo ho neslyšel. Byl úplně sám. <br />
            Nebo aspoň tak to tvrdí ostatní.
            <br />
            Po pohřbu mi přišel balíček. Bez zpáteční adresy. Uvnitř byla jen
            zažloutlá obálka, na ní moje jméno psané jeho písmem. A v ní… jeden
            řádek:
            <br />
            <b>„Najdi klíč pod hodinami. Nevěř tichu.“</b>
          </p>
        </div>
      )}
    </section>
  );
};
