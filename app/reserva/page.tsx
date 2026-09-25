import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { PageHero } from "@/components/page-hero";
import { ReserveForm } from "@/components/reserve-form";
import { SiteFrame } from "@/components/site-frame";
import { StayCalendar } from "@/components/stay-calendar";

export const metadata: Metadata = {
  title: "Reserves i Tarifes — Can Joan Empordà",
  description: "Consulteu disponibilitat, preus i condicions. Podeu reservar directament o a través de les principals plataformes.",
};

const seasons = [
  ["low", "bg-[#7a7a4f]", "Temporada baixa", "rp.baixa", "Octubre, novembre, desembre, gener, febrer i març.", "rp.baixa.em", "330 €"],
  ["mid", "bg-[#a98456]", "Temporada mitjana", "rp.mitjana", "Abril, maig, juny i setembre.", "rp.mitjana.em", "340 €"],
  ["high", "bg-[#b1583a]", "Temporada alta", "rp.alta", "Juliol.", "rp.alta.em", "360 €"],
  ["top", "bg-[#1c1815]", "Agost", "rp.agost", "Mínim 5 nits.", "rp.agost.em", "390 €"],
] as const;

const specials = [
  ["Pont de la Puríssima", "rp.purissima", "Del 6 al 8 de desembre.", "rp.purissima.em", "350 €"],
  ["Sant Joan", "rp.stjoan", "Nit del 23 al 24 de juny.", "rp.stjoan.em", "360 €"],
  ["Nadal", "rp.nadal", "Mínim 3 nits.", "rp.nadal.em", "390 €"],
  ["Cap d'Any", "rp.capdany", "Mínim 3 nits.", "rp.capdany.em", "390 €"],
] as const;

const faqs = [
  ["faq.1.q", "Es pot fumar dins de casa?", "faq.1.a", "No, dins no. A la terrassa sí."],
  ["faq.2.q", "Hi ha piscina?", "faq.2.a", "No. És una casa de poble al centre d'Ordis, no una masia aïllada. La platja és a 25 minuts, i Banyoles a 20 si voleu aigua dolça."],
  ["faq.3.q", "Tenim un nadó. Hi ha bressol?", "faq.3.a", "Sí, tenim un bressol de viatge i una trona, gratuïts. Demaneu-ho quan reserveu i us ho preparem. Si veniu amb biberons, hi ha esterilitzador."],
  ["faq.4.q", "Acceptem animals?", "faq.4.a", "En general no, però consulteu-nos abans de reservar."],
  ["faq.5.q", "Es pot fer una festa o un esdeveniment?", "faq.5.a", "Aniversaris, sopars d'amics, retrobaments de família: cap problema. No es pot posar música alta a la nit."],
  ["faq.6.q", "Quins són els horaris d'entrada i sortida?", "faq.6.a", "Entrada a partir de les 17 h. Sortida abans de les 11 h. Si arribeu abans o marxeu més tard, normalment ho podem encabir — depèn de qui hi hagi els dies anteriors o posteriors. Pregunteu-ho."],
  ["faq.7.q", "Hi ha lloc per aparcar?", "faq.7.a", "Sí. Hi ha lloc lliure al carrer mateix i a l'aparcament de l'església, a dos minuts a peu. No fa falta reservar plaça ni pagar res."],
  ["faq.8.q", "I si volem venir per feina (anar a una conferència a Girona, per exemple)?", "faq.8.a", "Cap problema. Tenim Wi-Fi de fibra a totes les plantes i taules adequades per treballar. Si veniu sols entre setmana fora de temporada, podem fer-vos un preu reduït — escriviu-nos."],
] as const;

function Season({
  dot,
  title,
  titleI18n,
  detail,
  detailI18n,
  price,
}: {
  dot: string;
  title: string;
  titleI18n: string;
  detail: string;
  detailI18n: string;
  price: string;
}) {
  return (
    <div className="grid grid-cols-[14px_1fr_auto] items-baseline gap-[18px] border-b border-[#d9c9ac] py-4">
      <span className={`mt-2 h-2.5 w-2.5 rounded-full ${dot}`} />
      <div className="text-[17px]">
        <span data-i18n={titleI18n}>{title}</span>
        <em className="mt-1 block text-sm font-normal text-[#6b6258]" data-i18n={detailI18n}>
          {detail}
        </em>
      </div>
      <div className="text-xl whitespace-nowrap">
        {price}
        <span className={`${mono.className} ml-1 text-[10px] tracking-[0.16em] text-[#6b6258] uppercase`} data-i18n="rp.nit">
          / nit
        </span>
      </div>
    </div>
  );
}

export default function ReservaPage() {
  return (
    <SiteFrame current="reserva">
      <main>
        <PageHero
          eyebrow="Reserva · disponibilitat i preus"
          eyebrowI18n="rp.eyebrow"
          titleI18n="rp.h1"
          lede="Consulteu disponibilitat, preus i condicions. Podeu reservar directament o a través de les principals plataformes."
          ledeI18n="rp.lede"
        >
          Quan voleu
          <br />
          venir?
        </PageHero>

        <section className={`grid grid-cols-1 items-start gap-14 pt-8 pb-24 min-[980px]:grid-cols-[5fr_7fr] min-[980px]:gap-20 ${gutter}`}>
            <div>
              <span className={`${mono.className} mb-3.5 block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="rp.tarifes">
                Tarifes
              </span>
              <h2 className="m-0 mb-[22px] max-w-[16ch] text-[clamp(28px,3vw,38px)] leading-[1.1] font-light tracking-[-0.015em]" data-i18n="rp.h2">
                El que costa, segons quan veniu.
              </h2>
              <div className="mt-6 border-t border-[#d9c9ac]">
                {seasons.map(([key, dot, title, titleI18n, detail, detailI18n, price]) => (
                  <Season key={key} dot={dot} title={title} titleI18n={titleI18n} detail={detail} detailI18n={detailI18n} price={price} />
                ))}
              </div>
              <h3 className={`${mono.className} mt-9 mb-0 text-[10px] font-normal tracking-[0.18em] text-[#6b6258] uppercase`} data-i18n="rp.especials">
                Dates especials
              </h3>
              <div className="mt-6 border-t border-[#d9c9ac]">
                {specials.map(([title, titleI18n, detail, detailI18n, price]) => (
                  <Season key={titleI18n} dot="border-[1.5px] border-[#b1583a] bg-transparent" title={title} titleI18n={titleI18n} detail={detail} detailI18n={detailI18n} price={price} />
                ))}
              </div>
              <div className={`${mono.className} mt-10 grid gap-3 border-t border-[#d9c9ac] pt-[22px] text-[11px] leading-[1.6] tracking-[0.12em] text-[#6b6258] uppercase`}>
                <div>
                  <b className="font-medium text-[#1c1815]">Mínim d&apos;estada</b> · 2 nits en general · 5 nits a l&apos;agost · 3 nits a Nadal i festius
                </div>
                <div>
                  <b className="font-medium text-[#1c1815]">Reserva</b> · 30% en fer la reserva · resta a l&apos;arribada
                </div>
                <div>
                  <b className="font-medium text-[#1c1815]">Cancel·lació</b> · gratuïta fins a 14 dies abans · després, 50% retornat
                </div>
              </div>
              <div className="mt-10 border border-[#e7d7ba] bg-[#faf2e4] p-6 text-[15px] leading-[1.55] text-[#3a342d]">
                <div className="mb-3.5 flex items-center gap-3.5">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#efe1c8] text-[22px] text-[#6b6258]">CI</div>
                  <div>
                    <b className="block font-medium text-[#1c1815]">Carme i Isaac</b>
                    <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[#6b6258] uppercase`} data-i18n="rp.prop">
                      Propietaris
                    </span>
                  </div>
                </div>
                <p className="m-0 mb-3.5" data-i18n="rp.prop.p">
                  Som nosaltres qui us respondrem. Escriviu-nos directament i us ajudem amb el que calgui.
                </p>
                <div className="grid gap-1.5 border-t border-[#d9c9ac] pt-3.5">
                  <a className="text-base text-[#1c1815] no-underline hover:text-[#b1583a]" href="mailto:isaac@canjoanemporda.com">
                    isaac@canjoanemporda.com
                  </a>
                  <a className="text-base text-[#1c1815] no-underline hover:text-[#b1583a]" href="tel:+34633978676">
                    +34 633 978 676
                  </a>
                </div>
              </div>
              <StayCalendar />
            </div>
            <div>
              <span className={`${mono.className} mb-3 block text-[10px] tracking-[0.18em] text-[#b1583a] uppercase`} data-i18n="rp.step.label">
                Pregunteu-nos disponibilitat
              </span>
              <h3 className="m-0 mb-[18px] text-[clamp(24px,2.8vw,32px)] leading-[1.1] font-light tracking-[-0.01em]" data-i18n="rp.form.h">
                Un formulari, com qualsevol altre.
              </h3>
              <ReserveForm />
            </div>
        </section>

        <section className={`border-b border-[#d9c9ac] bg-[#faf2e4] py-12 pb-16 ${gutter}`}>
          <div className="max-w-[900px]">
            <span className={`${mono.className} mb-3 block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="rp.online.eyebrow">
              Reserva en línia
            </span>
            <h2 className="m-0 mb-6 text-[clamp(24px,3vw,36px)] font-light tracking-[-0.015em]" data-i18n="rp.online.h">
              Comprova disponibilitat i reserva ara.
            </h2>
            <div className="min-h-[500px] w-full">
              <iframe
                id="cri-can-joan"
                title="Reserva en línia de Can Joan Empordà"
                src="https://www.casasrurales.net/ebooking/mod_2.php?id=75737&k=650065d172a768b1863954ce4efdb45c"
                className="block h-[500px] w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className={`border-t border-[#e7d7ba] bg-[#faf2e4] py-24 ${gutter}`}>
          <h2 className="m-0 mb-10 max-w-[22ch] text-[clamp(28px,3.4vw,42px)] leading-[1.1] font-light tracking-[-0.015em]" data-i18n="faq.h">
            Les coses que sempre ens pregunten
          </h2>
          <div className="max-w-[880px]">
            {faqs.map(([questionI18n, question, answerI18n, answer], index) => (
              <details key={questionI18n} className={`group border-t border-[#d9c9ac] py-[22px] open:pb-7 ${index === faqs.length - 1 ? "border-b" : ""}`}>
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 text-[19px] [&::-webkit-details-marker]:hidden">
                  <span data-i18n={questionI18n}>{question}</span>
                  <span className={`${mono.className} text-lg font-normal text-[#6b6258] group-open:hidden`}>+</span>
                  <span className={`${mono.className} hidden text-lg font-normal text-[#6b6258] group-open:inline`}>—</span>
                </summary>
                <p className="mt-3.5 max-w-[70ch] text-pretty text-base leading-[1.6] text-[#3a342d]" data-i18n={answerI18n}>
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
