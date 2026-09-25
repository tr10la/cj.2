import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { PageHero } from "@/components/page-hero";
import { PhotoRows } from "@/components/photo-rows";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "La Casa — Can Joan Empordà, Ordis",
  description:
    "Casa de poble del segle XVII rehabilitada el 2021. 3 habitacions dobles i 1 de 5 llits, dos banys i una terrassa.",
};

const rooms: {
  title: string;
  i18n: string;
  tag?: string;
  tagI18n?: string;
  note?: string;
  noteI18n?: string;
  rows: { src: string; alt: string; ar: number }[][];
}[] = [
  {
    title: "Sala d'estar-menjador i cuina",
    i18n: "cp.sala",
    rows: [
      [
        { src: "sala-n1.jpg", alt: "Sala d'estar de Can Joan Empordà amb bigues de fusta i mur de pedra original", ar: 1.5004 },
        { src: "cuina-n1.jpg", alt: "Cuina i menjador de Can Joan Empordà amb taula llarga de fusta", ar: 1.5004 },
      ],
      [
        { src: "sala-n2.jpg", alt: "Sofà de la sala d'estar de Can Joan Empordà davant el mur de pedra", ar: 1.5004 },
        { src: "sala-n4.jpg", alt: "Taula del menjador de Can Joan Empordà sota les bigues de fusta", ar: 0.6665 },
        { src: "detall-n2.jpg", alt: "Fornícula de pedra amb objectes de terrissa a Can Joan Empordà", ar: 0.6665 },
      ],
      [
        { src: "cuina-n2.jpg", alt: "Cuina equipada de Can Joan Empordà amb illa i mur de pedra", ar: 1.5004 },
        { src: "detall-n1.jpg", alt: "Fornícula amb ceràmica i vidre a la sala de Can Joan Empordà", ar: 1.5004 },
      ],
    ],
  },
  {
    title: "Habitació 1",
    i18n: "cp.hab1",
    rows: [
      [
        { src: "hab1-n1.jpg", alt: "Habitació 1 de Can Joan Empordà — capçalera de fusta i coixins daurats", ar: 1.5004 },
        { src: "hab1-n2.jpg", alt: "Habitació 1 amb llit doble i finestra", ar: 1.5004 },
      ],
      [
        { src: "hab1-n8.jpg", alt: "Habitació 1 — armari antic i mur de pedra vista", ar: 1.5004 },
        { src: "hab1-n3.jpg", alt: "Habitació 1 sota la volta catalana", ar: 0.6665 },
        { src: "hab1-n7.jpg", alt: "Habitació 1 — aplic de lectura i lleixa de fusta", ar: 0.6665 },
      ],
    ],
  },
  {
    title: "Habitació 2",
    i18n: "cp.hab2",
    rows: [
      [
        { src: "hab2-n1.jpg", alt: "Habitació 2 de Can Joan Empordà amb llit doble sota volta catalana", ar: 1.5004 },
        { src: "hab2-n5.jpg", alt: "Habitació 2 sota la volta catalana original", ar: 0.6665 },
      ],
      [
        { src: "hab2-n2.jpg", alt: "Habitació 2 — mirall de vímet i finestra al jardí", ar: 1.5004 },
        { src: "hab2-n3.jpg", alt: "Habitació 2 — capçalera de fusta i llums de vímet", ar: 1.5004 },
      ],
    ],
  },
  {
    title: "Habitació 3",
    i18n: "cp.hab3",
    tag: "amb bany en suite",
    tagI18n: "cp.hab3.tag",
    rows: [
      [
        { src: "hab3-n3.jpg", alt: "Habitació 3 de Can Joan Empordà amb llit doble i bany en suite", ar: 1.5004 },
        { src: "hab3-n2.jpg", alt: "Habitació 3 — armari antic de noguera amb mirall", ar: 0.6665 },
      ],
      [
        { src: "nova.jpg", alt: "Habitació 3 — racó amb cadira, escriptori i mirall de vímet vora el balcó", ar: 1.5004 },
        { src: "hab3-n4.jpg", alt: "Habitació 3 — ventilador de sostre i balcó al carrer", ar: 0.6665 },
      ],
    ],
  },
  {
    title: "Habitació 4",
    i18n: "cp.hab4",
    tag: "4 llits individuals + 1 supletori",
    tagI18n: "cp.hab4.tag",
    rows: [
      [
        { src: "hab4-n1.jpg", alt: "Habitació 4 de Can Joan Empordà amb llits individuals, bigues i balcó", ar: 1.5004 },
        { src: "hab4-n2.jpg", alt: "Habitació 4 — capçalera de fusta amb marqueteria i dos llits individuals", ar: 1.5004 },
      ],
    ],
  },
];

const laterRooms: typeof rooms = [
  {
    title: "Terrassa",
    i18n: "cp.terrassa",
    rows: [
      [
        { src: "terrassa-n2.jpg", alt: "Terrassa de Can Joan Empordà — taula llarga i llums de vímet sobre el mur de maó", ar: 0.6665 },
        { src: "terrassa-n1.jpg", alt: "Terrassa de Can Joan Empordà al capvespre, amb vistes als terrats d'Ordis", ar: 0.6665 },
        { src: "barbacoa.jpg", alt: "Barbacoa i zona de foc a la terrassa de Can Joan Empordà", ar: 1.7778 },
      ],
      [
        { src: "main.jpg", alt: "Terrassa de Can Joan Empordà a capvespre", ar: 1.3333 },
        { src: "posta2.jpg", alt: "Posta de sol des de la terrassa de Can Joan Empordà", ar: 1.3333 },
      ],
    ],
  },
  {
    title: "Baix",
    i18n: "cp.baix",
    rows: [
      [
        { src: "jocs-n1.jpg", alt: "Sala de jocs de Can Joan Empordà sota volta de pedra, amb taula de ping-pong", ar: 1.5004 },
        { src: "jocs-n2.jpg", alt: "Volta de pedra i finestra de la sala de jocs de Can Joan Empordà", ar: 0.6665 },
        { src: "jocs-n3.jpg", alt: "Portes de fusta originals sota la volta del celler de Can Joan Empordà", ar: 0.6665 },
        { src: "detall-n4.jpg", alt: "Antic sedàs penjat a la volta de pedra de la sala de jocs", ar: 0.6665 },
      ],
    ],
  },
  {
    title: "Exterior",
    i18n: "cp.exterior",
    tag: "la gran portalada",
    tagI18n: "cp.exterior.tag",
    note: "La casa s'obre al Carrer de la Mar per una portalada de mig punt amb la fusta original i els claus de forja. És la primera cosa que es veu de Can Joan, i la que menys ha canviat en tres-cents anys.",
    noteI18n: "cp.exterior.p",
    rows: [
      [
        { src: "portalada-2.jpg", alt: "La gran portalada de mig punt de Can Joan Empordà, al Carrer de la Mar", ar: 0.6667 },
        { src: "portalada-4.jpg", alt: "Placa amb el logotip de Can Joan Empordà a la pedra de la portalada", ar: 1.5004 },
        { src: "portalada-3.jpg", alt: "La portalada de Can Joan Empordà oberta al carrer", ar: 0.6665 },
      ],
    ],
  },
];

function Room({ room }: { room: (typeof rooms)[number] }) {
  return (
    <div className="mb-[72px]">
      <h3 className="m-0 mb-5 flex items-baseline gap-3.5 text-[clamp(22px,2.8vw,32px)] font-light tracking-[-0.01em]">
        <span data-i18n={room.i18n}>{room.title}</span>
        {room.tag ? (
          <span className={`${mono.className} text-[10px] font-normal tracking-[0.16em] text-[#6b6258] uppercase`} data-i18n={room.tagI18n}>
            {room.tag}
          </span>
        ) : null}
      </h3>
      {room.note ? (
        <p className="m-0 mb-[18px] -mt-1.5 max-w-[56ch] text-pretty text-base leading-[1.6] text-[#3a342d]" data-i18n={room.noteI18n}>
          {room.note}
        </p>
      ) : null}
      <PhotoRows rows={room.rows} />
    </div>
  );
}

export default function LaCasaPage() {
  return (
    <SiteFrame current="casa">
      <main>
        <PageHero
          eyebrow="La casa"
          eyebrowI18n="cp.eyebrow"
          titleI18n="cp.h1"
          lede="Casa de poble del segle XVII rehabilitada el 2021. Es van conservar la pedra original, les voltes catalanes, les bigues i els terres. 3 habitacions dobles i 1 de 5 llits, dos banys i una terrassa."
          ledeI18n="cp.lede"
        >
          La casa.
          <br />
          Pedra, fusta i tres plantes.
        </PageHero>

        <div className={`${mono.className} mx-5 mt-12 grid grid-cols-2 gap-3.5 border-y border-[#d9c9ac] py-[22px] text-[10px] leading-[1.6] tracking-[0.16em] text-[#6b6258] uppercase min-[720px]:mx-[clamp(20px,4vw,56px)] min-[720px]:grid-cols-3 min-[720px]:gap-7`}>
          <div>
            <b className="mb-1 block font-medium text-[#1c1815]" data-i18n="cp.meta.any">Rehabilitada</b>
            2021
          </div>
          <div>
            <b className="mb-1 block font-medium text-[#1c1815]" data-i18n="cp.meta.sup">Superfície</b>
            240 m² · 3 plantes
          </div>
          <div>
            <b className="mb-1 block font-medium text-[#1c1815]" data-i18n="cp.meta.places">Places</b>
            10 + 1 supletori
          </div>
        </div>

        <section className={`pt-6 pb-24 ${gutter}`}>
          <div className="mb-20 grid grid-cols-1 items-center gap-10 min-[920px]:grid-cols-2 min-[920px]:gap-[72px]">
            <div>
              <span className={`${mono.className} mb-3.5 block text-[10px] tracking-[0.16em] text-[#6b6258] uppercase`} data-i18n="cp.intro.micro">
                La casa · des de 1847
              </span>
              <h2 className="m-0 mb-7 text-[clamp(40px,6vw,76px)] leading-none font-light tracking-[-0.02em]" data-i18n="cp.intro.h">
                Pedra,
                <br />
                fusta i
                <br />
                tres plantes.
              </h2>
              <p className="m-0 max-w-[44ch] text-pretty text-[17px] leading-[1.65] text-[#3a342d]" data-i18n="cp.intro.p">
                Una casa de poble del segle XVII, rehabilitada amb calma. Vam aprendre a no tenir pressa. Vam aprendre a deixar coses tal com estaven.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-[#efe1c8]">
              <img
                src="/img/sala-n3.jpg"
                alt="Menjador de Can Joan Empordà amb taula llarga, bigues de fusta i mur de pedra original"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>

          {rooms.map((room) => (
            <Room key={room.i18n} room={room} />
          ))}

          <div className="mb-[72px] grid grid-cols-1 items-start gap-10 min-[721px]:grid-cols-2">
            <div>
              <h3 className="m-0 mb-5 text-[clamp(22px,2.8vw,32px)] font-light tracking-[-0.01em]" data-i18n="cp.bany1">
                Bany 1
              </h3>
              <PhotoRows
                rows={[
                  [
                    { src: "bany1-n1.jpg", alt: "Bany 1 de Can Joan Empordà amb dutxa i mirall rodó retroil·luminat", ar: 1.5004 },
                    { src: "bany1-n2.jpg", alt: "Bany 1 — dutxa de fusta i lavabo", ar: 0.6665 },
                  ],
                ]}
              />
            </div>
            <div>
              <h3 className="m-0 mb-5 text-[clamp(22px,2.8vw,32px)] font-light tracking-[-0.01em]" data-i18n="cp.bany2">
                Bany 2
              </h3>
              <PhotoRows
                rows={[
                  [
                    { src: "bany2-n1.jpg", alt: "Bany 2 de Can Joan Empordà amb doble lavabo sota arc de pedra", ar: 0.6665 },
                    { src: "bany2-1.jpg", alt: "Bany 2 de Can Joan Empordà amb doble lavabo", ar: 1.3333 },
                  ],
                  [
                    { src: "bany2-2.jpg", alt: "Bany 2 de Can Joan Empordà — dutxa", ar: 1.3333 },
                    { src: "detall-n3.jpg", alt: "Detall del bany: garrafa de vidre verd en una fornícula de pedra", ar: 0.6665 },
                  ],
                ]}
              />
            </div>
          </div>

          {laterRooms.map((room) => (
            <Room key={room.i18n} room={room} />
          ))}
        </section>
      </main>
    </SiteFrame>
  );
}
