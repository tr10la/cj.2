import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { EmpordaMap } from "@/components/emporda-map";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Com Arribar — Can Joan Empordà, Carrer de la Mar 5, Ordis",
  description: "Can Joan Empordà es troba al centre del poble d'Ordis, a l'Alt Empordà. Fàcil d'arribar-hi en cotxe des de l'autopista AP-7.",
};

const arrivals = [
  ["Barcelona", "up.bcn.p", "1 h 30 min en cotxe · AP-7 · sortida 4", "up.bcn.alt", "O bé tren fins a Figueres + 15 min en cotxe"],
  ["Girona aeroport", "up.gir.p", "40 min en cotxe · N-II nord", "up.gir.alt", "Lloguer de cotxe a l'aeroport"],
  ["Estació de tren", "up.ave.p", "Figueres Vilafant · AVE 1 h des de Barcelona", "up.ave.alt", "15 min en cotxe fins a Ordis"],
] as const;

const nearby = [
  ["NE", "Cap de Creus", "40 min"],
  ["E", "Cadaqués", "45 min"],
  ["SE", "L'Escala i Empúries", "25 min"],
  ["S", "Girona", "35 min"],
  ["SO", "Banyoles", "20 min"],
  ["O", "Besalú", "15 min"],
  ["NO", "Espolla i l'Albera", "20 min"],
] as const;

export default function UbicacioPage() {
  return (
    <SiteFrame current="ubicacio">
      <main>
        <PageHero
          eyebrow="Ubicació · com arribar"
          eyebrowI18n="up.eyebrow"
          titleI18n="up.h1"
          lede="Can Joan Empordà es troba al centre del poble d'Ordis, a l'Alt Empordà. Fàcil d'arribar-hi en cotxe des de l'autopista AP-7."
          ledeI18n="up.lede"
        >
          Com arribar-hi.
          <br />
          Carrer de la Mar, 5. Ordis.
        </PageHero>

        <section className={`grid grid-cols-1 items-start gap-14 pt-8 pb-24 min-[980px]:grid-cols-[5fr_7fr] min-[980px]:gap-16 ${gutter}`}>
          <div>
            <span className={`${mono.className} mb-3.5 block text-[10px] tracking-[0.18em] text-[#b1583a] uppercase`} data-i18n="up.micro">
              Com arribar-hi
            </span>
            <h2 className="m-0 mb-5 max-w-[18ch] text-[clamp(28px,3vw,38px)] leading-[1.1] font-light tracking-[-0.015em]" data-i18n="up.h2">
              Una hora i mitja des de Barcelona.
            </h2>
            <p className="m-0 mb-3.5 max-w-[44ch] text-pretty text-[17px] leading-[1.6] text-[#3a342d]" data-i18n="up.p">
              Ordis és a tocar de l&apos;AP-7 (sortida 4, Figueres Nord). Un cop al poble, la casa és al Carrer de la Mar, 5, al centre del nucli urbà.
            </p>
            <div className="mt-8 grid gap-[22px] border-t border-[#d9c9ac] pt-6">
              {arrivals.map(([place, textI18n, text, altI18n, alt]) => (
                <div key={place} className="grid grid-cols-1 items-baseline gap-2 min-[561px]:grid-cols-[130px_1fr] min-[561px]:gap-[22px]">
                  <b className={`${mono.className} text-[10px] font-normal tracking-[0.16em] text-[#6b6258] uppercase`}>{place}</b>
                  <p className="m-0 text-base leading-[1.5] text-[#1c1815]">
                    <span data-i18n={textI18n}>{text}</span>
                    <span className="mt-0.5 block text-sm text-[#6b6258]" data-i18n={altI18n}>
                      {alt}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 overflow-hidden border border-[#d9c9ac]">
              <EmpordaMap />
            </div>
            <span className={`${mono.className} mt-2.5 block text-[10px] tracking-[0.14em] text-[#6b6258] uppercase`} data-i18n="up.mapa.cap">
              Els cercles marquen 10, 25 i 50 km des de la portalada
            </span>
          </div>
          <div className="aspect-square min-h-0 w-full overflow-hidden min-[641px]:aspect-[4/3] min-[641px]:min-h-[400px]">
            <iframe
              title="Can Joan Empordà al mapa"
              className="block h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Carrer+de+la+Mar+5%2C+17772+Ordis%2C+Girona&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </section>

        <section className={`mt-0 pb-24 ${gutter}`}>
          <h3 className="m-0 mb-8 max-w-[30ch] text-[clamp(24px,2.6vw,32px)] font-light tracking-[-0.01em]" data-i18n="up.nearby">
            El que hi ha a prop, sense fer-ne una llista.
          </h3>
          <div className="grid gap-1 border-t border-[#d9c9ac]">
            {nearby.map(([dir, name, dist]) => (
              <div key={dir} className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b border-[#d9c9ac] py-[18px] min-[721px]:grid-cols-[100px_1fr_auto]">
                <div className={`${mono.className} text-[10px] tracking-[0.18em] text-[#b1583a] uppercase`}>{dir}</div>
                <div className="text-lg">{name}</div>
                <div className={`${mono.className} col-span-2 text-[11px] tracking-[0.14em] text-[#6b6258] uppercase min-[721px]:col-span-1 min-[721px]:text-right`}>
                  {dist}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
