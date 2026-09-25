import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Can Joan Empordà — Casa Rural a Caques, Alt Empordà",
  description:
    "Casa de poble del segle XVII rehabilitada a Ordis. 4 habitacions, fins a 11 persones, terrassa i jardí. Reserva directa sense comissions.",
};

export default function Home() {
  return (
    <SiteFrame current="inici">
        <section className={`pt-6 ${gutter}`}>
          <div className="grid grid-cols-1 items-start gap-8 min-[920px]:grid-cols-[5fr_7fr] min-[920px]:items-end min-[920px]:gap-12">
            <div className="pb-6">
              <span className={`${mono.className} mb-6 block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="open.eyebrow">
                Casa rural · Ordis · Alt Empordà
              </span>
              <h1 className="m-0 mb-[22px] text-[clamp(40px,6vw,78px)] leading-[1.02] font-light tracking-[-0.02em] text-balance text-[#1c1815]">
                <span data-i18n="open.title">Una casa de poble</span>
                <span className="block font-light text-[#b1583a] italic" data-i18n="open.accent">
                  a l&apos;Alt Empordà.
                </span>
              </h1>
              <p className="m-0 mb-7 max-w-[38ch] text-lg leading-[1.55] text-pretty text-[#3a342d]" data-i18n="open.lede">
                Tres plantes, pedra original i onze places. Rehabilitada el 2021 conservant els elements originals de la casa.
              </p>
              <div className={`${mono.className} flex flex-wrap gap-x-7 gap-y-3 border-t border-[#d9c9ac] pt-[18px] text-[11px] tracking-[0.14em] text-[#6b6258] uppercase`}>
                <span>
                  <b className="font-medium text-[#1c1815]">11</b> places
                </span>
                <span>
                  <b className="font-medium text-[#1c1815]">3</b> plantes
                </span>
                <span>
                  <b className="font-medium text-[#1c1815]">2021</b> rehabilitada
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-[#efe1c8] min-[920px]:aspect-[5/6]">
              <img
                src="/img/portalada-2.jpg"
                alt="La gran portalada de pedra i fusta de Can Joan Empordà, al Carrer de la Mar d'Ordis"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                className={`${mono.className} absolute bottom-4 left-4 bg-[rgba(28,24,21,0.66)] px-2.5 py-1.5 text-[10px] tracking-[0.18em] text-[#faf2e4] uppercase backdrop-blur-[2px]`}
                data-i18n="open.cap"
              >
                La portalada · Carrer de la Mar
              </span>
            </div>
          </div>
        </section>

      <main>

        <section className={`grid grid-cols-1 gap-10 py-24 pb-14 min-[980px]:grid-cols-[3fr_8fr_2fr] min-[980px]:gap-14 ${gutter}`}>
          <div />
          <div>
            <h2 className="m-0 mb-8 max-w-[22ch] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-light tracking-[-0.015em] text-balance" data-i18n="letter.h">
              Una casa de poble, recuperada amb cura.
            </h2>
            <p
              className="m-0 max-w-[56ch] text-[19px] leading-[1.62] text-pretty text-[#3a342d] first-letter:float-left first-letter:pt-1 first-letter:pr-2.5 first-letter:text-[3.4em] first-letter:leading-[0.92] first-letter:font-light first-letter:text-[#b1583a]"
              data-i18n="letter.p"
            >
              Can Joan és una casa del segle XVII al cor d&apos;Ordis, rehabilitada el 2021 conservant la pedra, les bigues i els terres originals. Tres plantes, 3 habitacions dobles i 1 de 5 llits, i una terrassa. Ideal per a grups i famílies que volen explorar l&apos;Alt Empordà.
            </p>
          </div>
          <div />
        </section>

        <section id="essencial" className={`border-t border-[#e7d7ba] bg-[#faf2e4] py-20 ${gutter}`}>
          <div className="mx-auto max-w-[1320px]">
            <span className={`${mono.className} mb-5 block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="ess.eyebrow">
              Essencial
            </span>
            <h2 className="m-0 mb-7 text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light tracking-[-0.02em] italic" data-i18n="ess.h">
              Un espai únic.
            </h2>
            <hr className="m-0 border-0 border-t border-[#d9c9ac]" />
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[720px]:grid-cols-4">
              {[
                ["ess.col1.h", "Pedra i volta", "ess.col1.p", "Murs, voltes catalanes i bigues originals del segle XVII, conservats tal com eren."],
                ["ess.col2.h", "Tres plantes", "ess.col2.p", "Cuina equipada, sala, 3 habitacions dobles i 1 habitació de 5 llits, i terrassa."],
                ["ess.col3.h", "Onze places", "ess.col3.p", "Per a grups i famílies. Una sala d'estar i dues sales de jocs a la planta baixa."],
                ["ess.col4.h", "Ben situat", "ess.col4.p", "Entre la Costa Brava i els pobles medievals. 15 min de Figueres, 25 de la costa, 45 de Cadaqués."],
              ].map(([hKey, title, pKey, copy]) => (
                <div
                  key={hKey}
                  className="border-t border-[#d9c9ac] px-0 pt-5 first:border-t-0 min-[480px]:border-t-0 min-[480px]:px-5 min-[480px]:pt-6 min-[480px]:odd:border-l-0 min-[480px]:odd:pl-0 min-[480px]:even:border-l min-[480px]:even:pr-0 min-[480px]:even:pl-5 min-[720px]:border-l min-[720px]:pt-8 min-[720px]:pr-8 min-[720px]:pl-7 min-[720px]:first:border-l-0 min-[720px]:first:pl-0"
                >
                  <h3 className="m-0 mb-2.5 text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.15] font-light tracking-[-0.01em] italic" data-i18n={hKey}>
                    {title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-pretty text-[#3a342d]" data-i18n={pKey}>
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="la-casa" className={`border-t border-[#e7d7ba] bg-[#faf2e4] pt-16 pb-14 ${gutter}`}>
          <div className="mb-14 grid grid-cols-1 items-end gap-6 min-[920px]:grid-cols-[5fr_7fr] min-[920px]:gap-14">
            <h2 className="m-0 text-[clamp(36px,5vw,64px)] leading-[1.02] font-light tracking-[-0.02em]" data-i18n="casa.h">
              La casa
            </h2>
            <p className="m-0 max-w-[50ch] text-lg leading-[1.55] text-pretty text-[#3a342d]" data-i18n="casa.lede">
              Tres plantes, pedra original, quatre habitacions i una terrassa. Onze places.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 min-[641px]:gap-3.5">
            {[
              [
                ["1.5004", "/img/sala-n2.jpg", "Sofà de la sala d'estar de Can Joan Empordà davant el mur de pedra"],
                ["0.6665", "/img/bany2-n1.jpg", "Bany 2 de Can Joan Empordà amb doble lavabo sota arc de pedra"],
              ],
              [
                ["0.6665", "/img/hab1-n7.jpg", "Habitació 1 — aplic de lectura i lleixa de fusta"],
                ["1.5004", "/img/jocs-n1.jpg", "Sala de jocs de Can Joan Empordà sota volta de pedra, amb taula de ping-pong"],
              ],
              [
                ["1.5004", "/img/detall-n1.jpg", "Fornícula amb ceràmica i vidre a la sala de Can Joan Empordà"],
                ["0.6665", "/img/hab2-n5.jpg", "Habitació 2 sota la volta catalana original"],
              ],
            ].map((row) => (
              <div key={row[0][1]} className="flex flex-col gap-2.5 min-[641px]:flex-row min-[641px]:gap-3.5">
                {row.map(([ratio, src, alt]) => (
                  <figure
                    key={src}
                    className={`m-0 min-w-0 max-[640px]:w-full ${ratio === "1.5004" ? "min-[641px]:flex-[1.5004_1_0]" : "min-[641px]:flex-[0.6665_1_0]"}`}
                  >
                    <img src={src} alt={alt} loading="lazy" className="block h-auto w-full bg-[#efe1c8]" />
                  </figure>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 min-[920px]:grid-cols-[5fr_7fr] min-[920px]:gap-16">
            <div>
              <h3 className="m-0 mb-[18px] text-[clamp(24px,2.6vw,32px)] font-light tracking-[-0.015em]" data-i18n="floor.distrib.h">
                Distribució
              </h3>
              <p className="m-0 max-w-[34ch] leading-[1.55] text-[#3a342d]" data-i18n="floor.distrib.p">
                Tres plantes connectades per una escala interior. Cada planta té el seu propi espai i ambient.
              </p>
            </div>
            <div>
              {[
                ["floor.baixa", "Planta baixa", "floor.baixa.h", "Entrada i dues sales de jocs.", "floor.baixa.p", "Dues sales de jocs: una amb billar i l'altra amb ping-pong."],
                ["floor.primera", "Planta primera", "floor.primera.h", "Cuina, sala i tres habitacions.", "floor.primera.p", "Cuina equipada amb taula gran. Tres habitacions dobles, dos banys —un en suite."],
                ["floor.segona", "Planta segona", "floor.segona.h", "Habitació i terrassa.", "floor.segona.p", "Habitació de cinc llits. La terrassa és una planta més amunt, accessible per unes escales addicionals."],
                ["floor.terrat", "Terrat", "floor.terrat.h", "Terrassa amb vistes al poble.", "floor.terrat.p", "Terrassa exterior amb barbacoa i zona de foc."],
              ].map(([numKey, num, hKey, heading, pKey, copy], index, floors) => (
                <div
                  key={numKey}
                  className={`grid grid-cols-1 gap-2 border-t border-[#d9c9ac] py-[18px] min-[480px]:grid-cols-[minmax(90px,auto)_1fr] min-[480px]:items-baseline min-[480px]:gap-[22px] ${index === floors.length - 1 ? "border-b" : ""}`}
                >
                  <span className={`${mono.className} text-[11px] tracking-[0.16em] text-[#6b6258] uppercase`} data-i18n={numKey}>
                    {num}
                  </span>
                  <div>
                    <h4 className="m-0 mb-1.5 text-xl font-normal tracking-[-0.005em]" data-i18n={hKey}>
                      {heading}
                    </h4>
                    <p className="m-0 text-[15px] leading-[1.55] text-[#3a342d]" data-i18n={pKey}>
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ordis" className={`py-24 min-[980px]:py-[120px] min-[980px]:pb-24 ${gutter}`}>
          <div className="grid grid-cols-1 items-start gap-10 min-[980px]:grid-cols-2 min-[980px]:gap-[72px]">
            <div>
              <span className={`${mono.className} mb-[18px] block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="ordis.eyebrow">
                El poble
              </span>
              <h2 className="m-0 mb-7 text-[clamp(36px,5vw,60px)] leading-[1.02] font-light tracking-[-0.02em]" data-i18n="ordis.h">
                Ordis, Alt Empordà.
              </h2>
              <p className="m-0 mb-[18px] max-w-[52ch] text-[17px] leading-[1.6] text-pretty text-[#3a342d]" data-i18n="ordis.p1">
                Ordis és un poble tranquil de l&apos;Alt Empordà, a tocar de tot el que fa especial aquesta comarca. A 25 minuts de la Costa Brava, a 45 de Cadaqués, a 20 de Besalú, a 35 de Girona. Un bon punt de partida per explorar-ho tot sense pressa.
              </p>
              <a
                href="/lentorn"
                className={`${mono.className} mt-7 inline-block border border-[#1c1815] px-6 py-2.5 text-[11px] tracking-[0.16em] text-[#1c1815] no-underline uppercase transition-opacity hover:opacity-60`}
                data-i18n="ordis.btn"
              >
                Veure l&apos;entorn →
              </a>
            </div>

            <div>
              <div className="relative aspect-[5/7] overflow-hidden bg-[#efe1c8]">
                <img src="/img/ordis.jpg" alt="Carrer d'Ordis, poble de l'Alt Empordà" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <span className={`${mono.className} mt-2.5 block text-[10px] tracking-[0.14em] text-[#6b6258] uppercase`} data-i18n="ordis.cap">
                Ordis · un carrer del poble
              </span>
              <div className="mt-3.5 bg-[#efe1c8]">
                <img
                  src="/img/portalada-4.jpg"
                  alt="Detall de la porta de fusta amb la placa de Can Joan Empordà, al Carrer de la Mar"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="entorn" className={`bg-[#2b2521] py-24 text-[#faf2e4] ${gutter}`}>
          <span className={`${mono.className} mb-[18px] block text-xs tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.eyebrow">
            L&apos;entorn
          </span>
          <h2 className="m-0 mb-[22px] max-w-[18ch] text-[clamp(36px,5vw,60px)] leading-[1.02] font-light tracking-[-0.02em]" data-i18n="entorn.h">
            El que hi ha al voltant, segons el dia.
          </h2>

          <div className="grid grid-cols-1 gap-9 min-[720px]:grid-cols-2 min-[720px]:gap-x-14 min-[1100px]:grid-cols-3">
            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.mar.label">
                Si voleu mar
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.mar.h">Els tres llocs on anem nosaltres</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Cala Tavallera</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Cap de Creus</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Sant Martí d&apos;Empúries</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>L&apos;Escala</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Cadaqués</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Cap de Creus</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.bici.label">
                Si voleu un dia de bici o caminant
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.bici.h">Pels camins de carro</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.bici.1">Vies Verdes — tram d&apos;Olot</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Girona</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Puig Neulós</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Albera</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.bici.3">El camí de ronda de Llançà</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Cap de Creus</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.menjar.label">
                Si voleu menjar bé
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.menjar.h">On us enviaríem</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>La Tartana de Can Massanet</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Vilafant</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Restaurant Can Mach</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`} data-i18n="entorn.menjar.2.where">
                    A tapis
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Boga Restaurant</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>Figueres</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.plou.label">
                Si plou
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.plou.h">Coses per fer sense mullar-se</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.plou.1">Museu Dalí — Figueres</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>15 min</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.plou.2">Windoor Empuriabrava</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>25 min</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Cellers d&apos;Espolla</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>20 min</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.fam.label">
                Si veniu en família
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.fam.h">Coses que els nens han de veure</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Aiguamolls de l&apos;Empordà</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>15 MIN</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div>Estany de Banyoles</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>30 MIN</span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.fam.3">Ruïnes d&apos;Empúries</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`}>10 MIN</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(246,236,220,0.22)] pt-[22px]">
              <div className={`${mono.className} mb-3 text-[10px] tracking-[0.18em] text-[#c9a87a] uppercase`} data-i18n="entorn.res.label">
                Si voleu no fer res
              </div>
              <h3 className="m-0 mb-[18px] text-[26px] leading-[1.15] font-light tracking-[-0.01em]" data-i18n="entorn.res.h">Les nostres recomanacions</h3>
              <ul className="m-0 list-none p-0">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dotted border-[rgba(246,236,220,0.18)] py-3 text-[15.5px] leading-[1.4] text-[rgba(246,236,220,0.92)]">
                  <div>
                    <div data-i18n="entorn.res.1">Quedeu-vos a la terrassa</div>
                  </div>
                  <span className={`${mono.className} text-[10px] tracking-[0.14em] text-[rgba(246,236,220,0.5)] uppercase whitespace-nowrap`} data-i18n="entorn.res.where">
                    A Can Joan
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`bg-[#f5f0e8] py-16 ${gutter}`}>
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-12 text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.015em]" data-i18n="reviews.h">
              Què diuen els nostres hostes.
            </h2>
            <div className="grid grid-cols-1 gap-10 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
              {[
                ["Casa con encanto en lugar muy bien ubicado para realizar visitas y excursiones a pueblecitos muy bonitos.", "Anna E. · Abril 2026"],
                ["Casa molt confortable per grups grans. Les habitacions dobles còmodes, els banys nous. Ens va faltar temps.", "Gemma P. · Novembre 2023"],
                ["Una casa molt ben decorada, acollidora i ben situada.", "Família Dupond · Setembre 2024"],
              ].map(([quote, cite]) => (
                <blockquote key={cite} className="m-0 p-0">
                  <div className="mb-3 text-lg text-[#b1583a]">★★★★★</div>
                  <p className="mb-4 text-base leading-[1.6] text-[#3a342d]">&quot;{quote}&quot;</p>
                  <cite className={`${mono.className} text-[11px] tracking-[0.12em] text-[#6b6258] not-italic uppercase`}>{cite}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="grid min-h-0 grid-cols-1 border-t border-[#d9c9ac] min-[720px]:min-h-[560px] min-[720px]:grid-cols-2">
          <div className={`flex flex-col justify-center py-14 min-[720px]:py-[72px] ${gutter}`}>
            <span className={`${mono.className} mb-5 block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="loft.eyebrow">
              Can Joan Loft
            </span>
            <h2 className="m-0 mb-[22px] text-[clamp(38px,4.5vw,64px)] leading-[1.02] font-light tracking-[-0.02em]" data-i18n="loft.h">
              El germà petit.
            </h2>
            <p className="m-0 mb-8 max-w-[38ch] text-lg leading-[1.6] text-pretty text-[#3a342d]" data-i18n="loft.p">
              Un loft de disseny al costat de Can Joan. El mateix caràcter, la mateixa pedra del segle XVII, l&apos;escala d&apos;un o dos.
            </p>
            <div className={`${mono.className} mb-9 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.16em] text-[#6b6258] uppercase`}>
              <span>1 dormitori</span>
              <span>2–4 hostes</span>
              <span>Pedra del s. XVII</span>
              <span>Ordis</span>
            </div>
            <a
              href="https://www.canjoanloft.com"
              target="_blank"
              rel="noreferrer"
              className={`${mono.className} inline-block self-start bg-[#1c1815] px-7 py-4 text-[11px] tracking-[0.16em] text-[#faf2e4] no-underline uppercase transition-colors hover:bg-[#b1583a]`}
              data-i18n="loft.cta"
            >
              Descobrir el Loft →
            </a>
          </div>
          <div className="h-[280px] overflow-hidden min-[720px]:h-full min-[720px]:min-h-[560px]">
            <img src="/img/loft-arc.jpg" alt="Can Joan Loft" className="block h-full w-full object-cover" />
          </div>
        </section>
      </main>

    </SiteFrame>
  );
}
