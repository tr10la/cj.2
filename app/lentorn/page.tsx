import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "L'Entorn — Can Joan Empordà · Cadaqués, Dalí, Costa Brava",
  description: "Des d'Ordis accedeixes en minuts a les cales de la Costa Brava, els pobles medievals de l'interior i el Triangle Dalí.",
};

const areas = [
  {
    micro: "Costa",
    microI18n: "lp.costa.micro",
    title: "La costa.",
    titleI18n: "lp.costa.h",
    text: "La Costa Brava ofereix molt més que les platges massificades. A pocs quilòmetres de Can Joan trobareu cales verges accessibles a peu, el Parc Natural del Cap de Creus i les aigües cristal·lines de l'Alt Empordà.",
    textI18n: "lp.costa.p",
    soft: true,
    places: [
      ["emp-cadaques.jpg", "Cadaqués, poble pesquer de la Costa Brava", "Cadaqués · 35 km", "lp.costa.1.cap", "Poble blanc sobre el mar.", "lp.costa.1.sub"],
      ["emp-capdecreus.jpg", "Cap de Creus, Parc Natural del far més oriental de la Península Ibèrica", "Cap de Creus · 40 km", "lp.costa.2.cap", "Parc natural amb cales a peu.", "lp.costa.2.sub"],
      ["emp-empuries.jpg", "Ruïnes d'Empúries, jaciment grec i romà a l'Escala", "Empúries · 25 km", "lp.costa.3.cap", "Ruïnes greco-romanes davant del mar.", "lp.costa.3.sub"],
      ["emp-portllligat.jpg", "Port Lligat, cala tranquil·la prop de Cadaqués on vivia Salvador Dalí", "Portlligat · 38 km", "lp.costa.4.cap", "Casa-estudi de Salvador Dalí.", "lp.costa.4.sub"],
    ],
  },
  {
    micro: "Interior",
    microI18n: "lp.interior.micro",
    title: "L'interior.",
    titleI18n: "lp.interior.h",
    text: "Besalú · 22 km. Peratallada · 35 km. Banyoles · 28 km. Pobles medievals, vinyes i paisatge rural.",
    textI18n: "lp.interior.p",
    soft: false,
    places: [
      ["emp-besalu.jpg", "Pont medieval de Besalú, vila romànica de la Garrotxa", "Besalú", "lp.interior.1.cap", "25 min — pont, jueria, formatges", "lp.interior.1.sub"],
      ["santperederodes.jpg", "Monestir de Sant Pere de Rodes, Parc Natural del Cap de Creus", "Sant Pere de Rodes", "lp.interior.2.cap", "30 min — monestir medieval, vistes al mar", "lp.interior.2.sub"],
      ["emp-peretallada.jpg", "Peratallada, poble medieval de pedra del Baix Empordà", "Peratallada · 35 km", "lp.interior.3.cap", "Poble medieval tallat en pedra.", "lp.interior.3.sub"],
      ["emp-banyoles.jpg", "Estany de Banyoles, llac natural a 30 minuts d'Ordis", "Banyoles · 20 km", "lp.interior.4.cap", "Llac natural, casc antic.", "lp.interior.4.sub"],
    ],
  },
  {
    micro: "Dalí",
    microI18n: "lp.dali.micro",
    title: "El Triangle Dalí.\nTres espais, un geni.",
    titleI18n: "lp.dali.h",
    text: "L'Alt Empordà és l'escenari de la vida i l'obra de Salvador Dalí. Els tres museus del Triangle Dalí formen un dels itineraris artístics més singulars d'Europa.",
    textI18n: "lp.dali.p",
    soft: true,
    places: [
      ["emp-dali.jpg", "Teatre-Museu Dalí de Figueres, a 12 km d'Ordis", "Teatre-Museu Dalí · Figueres", "lp.dali.1.cap", "12 km — el gran museu surrealista. Dalí el va concebre, dissenyar i habitar. Hi ha enterrat a la cripta.", "lp.dali.1.sub"],
      ["emp-portllligat.jpg", "Casa-Museu Salvador Dalí a Portlligat, Cadaqués", "Casa Salvador Dalí · Portlligat", "lp.dali.2.cap", "39 km — la casa-estudi on Dalí va viure i treballar durant dècades. Vistes a la badia de Cadaqués.", "lp.dali.2.sub"],
      ["emp-pubol.jpg", "Castell Gala Dalí de Púbol, part del Triangle Dalí", "Castell Gala Dalí · Púbol", "lp.dali.3.cap", "45 km — el castell medieval que Dalí va regalar i decorar per a la seva mussa i esposa, Gala.", "lp.dali.3.sub"],
    ],
  },
] as const;

export default function LentornPage() {
  return (
    <SiteFrame current="entorn">
      <main>
        <PageHero
          eyebrow="L'entorn · Alt Empordà"
          eyebrowI18n="lp.eyebrow"
          titleI18n="lp.h1"
          lede="Des d'Ordis accedeixes en minuts a les cales de la Costa Brava, els pobles medievals de l'interior i el Triangle Dalí."
          ledeI18n="lp.lede"
        >
          L&apos;entorn.
          <br />
          Un paisatge per descobrir.
        </PageHero>

        <div className="h-[56vh] min-h-[380px] overflow-hidden bg-[#efe1c8]">
          <img src="/img/emp-cadaques.jpg" alt="Cadaqués des del mar, Costa Brava, a 35 km d'Ordis" className="block h-full w-full object-cover" />
        </div>
        <div className={`${mono.className} px-5 pt-2.5 pb-20 text-[10px] tracking-[0.16em] text-[#6b6258] uppercase sm:px-[clamp(20px,4vw,56px)]`} data-i18n="lp.cap">
          Costa Brava · Cadaqués · Alt Empordà
        </div>

        {areas.map((area) => (
          <section key={area.microI18n} className={`grid grid-cols-1 gap-10 py-16 min-[920px]:grid-cols-[4fr_8fr] min-[920px]:gap-16 ${area.soft ? "border-y border-[#e7d7ba] bg-[#faf2e4]" : ""} ${gutter}`}>
            <div>
              <span className={`${mono.className} mb-3.5 block text-[10px] tracking-[0.18em] text-[#b1583a] uppercase`} data-i18n={area.microI18n}>
                {area.micro}
              </span>
              <h2 className="m-0 mb-[18px] text-[clamp(32px,4vw,48px)] leading-[1.05] font-light tracking-[-0.02em] whitespace-pre-line" data-i18n={area.titleI18n}>
                {area.title}
              </h2>
              <p className="m-0 max-w-[38ch] text-pretty text-[17px] leading-[1.6] text-[#3a342d]" data-i18n={area.textI18n}>
                {area.text}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3.5 min-[720px]:grid-cols-2 min-[720px]:gap-[18px]">
              {area.places.map(([src, alt, caption, captionI18n, sub, subI18n]) => (
                <figure key={captionI18n} className="m-0">
                  <img src={`/img/${src}`} alt={alt} loading="lazy" className="block aspect-[4/3] w-full object-cover" />
                  <figcaption className="mt-2.5 text-base leading-[1.4]">
                    <span data-i18n={captionI18n}>{caption}</span>
                    <span className={`${mono.className} mt-1 block text-[10px] tracking-[0.14em] text-[#6b6258] uppercase`} data-i18n={subI18n}>
                      {sub}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}

        <section className={`py-24 text-center ${gutter}`}>
          <h2 className="mx-auto mb-[18px] max-w-[22ch] text-[clamp(28px,3.4vw,42px)] leading-[1.1] font-light tracking-[-0.015em]" data-i18n="lp.cta.h">
            L&apos;Empordà és fàcil d&apos;explorar des d&apos;Ordis.
          </h2>
          <p className="mx-auto max-w-[48ch] text-[17px] leading-[1.55] text-[#3a342d]" data-i18n="lp.cta.p">
            A 15 minuts de Figueres, 25 de la costa i 40 del Cap de Creus.
          </p>
        </section>
      </main>
    </SiteFrame>
  );
}
