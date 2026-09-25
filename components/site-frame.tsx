import type { ReactNode } from "react";
import { gutter, instrument, mono, newsreader } from "@/app/fonts";

type PageId = "inici" | "casa" | "entorn" | "ubicacio" | "contacte" | "reserva";

const link = "py-1.5 text-[#1c1815] no-underline transition-colors hover:text-[#b1583a]";
const current = `${link} relative after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:bg-[#1c1815]`;
const menuControl = `${mono.className} cursor-pointer border border-[#1c1815] bg-transparent px-3 py-2 text-[11px] tracking-[0.16em] text-[#1c1815] uppercase`;
const footerLink = "text-[15px] leading-[1.6] text-[rgba(246,236,220,0.78)] no-underline hover:text-[#c9a87a]";
const footerTitle = `${mono.className} m-0 mb-4 text-[10px] font-normal tracking-[0.18em] text-[#c9a87a] uppercase`;

function Item({
  href,
  id,
  active,
  i18n,
  children,
  className = link,
}: {
  href: string;
  id: PageId;
  active?: PageId;
  i18n: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={active === id ? current : className} data-i18n={i18n}>
      {children}
    </a>
  );
}

export function SiteFrame({ current: active = "inici", children }: { current?: PageId; children: ReactNode }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className={`${newsreader.className} w-full bg-[#f6ecdc] text-[#1c1815] antialiased selection:bg-[#1c1815] selection:text-[#faf2e4]`}>
        <input id="site-menu" type="checkbox" className="peer sr-only" />

        <div className={`${mono.className} flex items-center justify-end border-b border-[#e7d7ba] bg-[#faf2e4] py-3.5 text-[11px] tracking-[0.14em] text-[#6b6258] uppercase ${gutter}`}>
          <div className="inline-flex items-center gap-1" role="group" aria-label="Idioma">
            <button data-lang="CA" className="cursor-pointer rounded-sm border-0 bg-[#efe1c8] px-[7px] py-1 text-[#1c1815]">CA</button>
            <button data-lang="ES" className="cursor-pointer rounded-sm border-0 bg-transparent px-[7px] py-1 text-[#6b6258] hover:text-[#3a342d]">ES</button>
            <button data-lang="EN" className="cursor-pointer rounded-sm border-0 bg-transparent px-[7px] py-1 text-[#6b6258] hover:text-[#3a342d]">EN</button>
            <button data-lang="FR" className="cursor-pointer rounded-sm border-0 bg-transparent px-[7px] py-1 text-[#6b6258] hover:text-[#3a342d]">FR</button>
          </div>
        </div>

        <header className={`grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 py-5 sm:gap-6 sm:pt-7 sm:pb-[18px] ${gutter}`}>
          <div className="flex min-w-0 items-center gap-3 min-[980px]:gap-7">
            <label htmlFor="site-menu" className={`${menuControl} min-[980px]:hidden`} aria-label="Obrir menú" data-i18n="nav.menu">Menú</label>
            <nav className="hidden items-center gap-7 text-sm tracking-[0.02em] min-[980px]:flex">
              <Item href="/" id="inici" active={active} i18n="nav.inici">Inici</Item>
              <Item href="/la-casa" id="casa" active={active} i18n="nav.casa">La Casa</Item>
              <Item href="/lentorn" id="entorn" active={active} i18n="nav.entorn">L&apos;entorn</Item>
            </nav>
          </div>
          <a href="/" aria-label="Can Joan Empordà" className="justify-self-center">
            <img src="/img/logo.png" alt="Can Joan Empordà" className="block h-auto w-[104px] min-[480px]:w-[150px] min-[721px]:w-[200px]" />
          </a>
          <div className="flex min-w-0 items-center justify-end gap-3 min-[980px]:gap-7">
            <nav className="hidden items-center gap-7 text-sm tracking-[0.02em] min-[980px]:flex">
              <Item href="/ubicacio" id="ubicacio" active={active} i18n="nav.ubicacio">Ubicació</Item>
              <Item href="/contacte" id="contacte" active={active} i18n="nav.contacte">Contacte</Item>
            </nav>
            <a
              href="/reserva"
              className={`${mono.className} shrink-0 border px-2.5 py-2 text-[10px] tracking-[0.16em] no-underline uppercase transition-colors min-[480px]:px-3.5 min-[480px]:py-[9px] min-[480px]:text-[11px] ${active === "reserva" ? "border-[#1c1815] bg-[#1c1815] text-[#faf2e4]" : "border-[#1c1815] text-[#1c1815] hover:bg-[#1c1815] hover:text-[#faf2e4]"}`}
              data-i18n="book"
            >
              Reservar
            </a>
          </div>
        </header>

        <div id="site-drawer" className={`fixed inset-0 z-[200] hidden flex-col gap-7 overflow-y-auto bg-[#f6ecdc] py-8 peer-checked:flex ${gutter}`}>
          <div className="flex items-center justify-between gap-4">
            <span className={`${mono.className} text-[11px] tracking-[0.14em] text-[#6b6258] uppercase`}>Can Joan Empordà</span>
            <label htmlFor="site-menu" className={menuControl} aria-label="Tancar" data-i18n="nav.close">Tancar</label>
          </div>
          <nav className="flex flex-col gap-[18px] text-[clamp(22px,6vw,28px)] tracking-[-0.01em]">
            {[
              ["/", "nav.inici", "Inici"],
              ["/la-casa", "nav.casa", "La Casa"],
              ["/lentorn", "nav.entorn", "L'entorn"],
              ["/ubicacio", "nav.ubicacio", "Ubicació"],
              ["/reserva", "nav.reserva", "Reserva"],
              ["/contacte", "nav.contacte", "Contacte"],
            ].map(([href, i18n, label]) => (
              <a key={href} href={href} className="border-b border-[#e7d7ba] py-1.5 text-[#1c1815] no-underline" data-i18n={i18n}>
                {label}
              </a>
            ))}
          </nav>
          <script
            dangerouslySetInnerHTML={{
              __html:
                "document.addEventListener('click',function(e){var t=e.target;var a=t&&t.closest?t.closest('#site-drawer a'):null;if(!a)return;var i=document.getElementById('site-menu');if(i)i.checked=false;});document.addEventListener('submit',function(e){var f=e.target;if(!f||!f.hasAttribute||!f.hasAttribute('data-inquiry'))return;e.preventDefault();var ok=f.querySelector('[data-thanks]');if(ok)ok.hidden=false;});",
            }}
          />
        </div>

        {children}

        <footer className={`bg-[#1c1815] pt-[72px] pb-8 text-[#faf2e4] ${gutter}`}>
          <div className="mb-12 grid grid-cols-1 gap-10 min-[720px]:grid-cols-[2fr_1fr_1fr_1fr] min-[720px]:gap-12">
            <div>
              <img src="/img/logo.png" alt="Can Joan Empordà" className="mb-4 block h-auto w-[180px] brightness-0 invert" />
              <span className="mb-2 block text-[28px] font-light tracking-[-0.01em] text-[#faf2e4]">Can Joan Empordà</span>
              <p className="m-0 max-w-[32ch] text-[15px] leading-[1.6] text-[rgba(246,236,220,0.78)]" data-i18n="footer.tag">
                Una casa de poble al cor de l&apos;Alt Empordà. Onze places.
              </p>
            </div>
            <div>
              <h4 className={footerTitle} data-i18n="footer.visita">Visita</h4>
              <ul className="m-0 grid list-none gap-1.5 p-0">
                <li><a href="/la-casa" className={footerLink} data-i18n="nav.casa">La Casa</a></li>
                <li><a href="/lentorn" className={footerLink} data-i18n="nav.entorn">L&apos;Entorn</a></li>
                <li><a href="/ubicacio" className={footerLink} data-i18n="nav.ubicacio">Ubicació</a></li>
              </ul>
            </div>
            <div>
              <h4 className={footerTitle} data-i18n="footer.estada">Estada</h4>
              <ul className="m-0 grid list-none gap-1.5 p-0">
                <li><a href="/reserva" className={footerLink} data-i18n="footer.tarifes">Tarifes</a></li>
                <li><a href="/reserva" className={footerLink} data-i18n="footer.reservar">Reservar</a></li>
                <li><a href="https://www.instagram.com/canjoanemporda" target="_blank" rel="noreferrer" className={footerLink}>Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className={footerTitle} data-i18n="footer.contacte.h">Contacte</h4>
              <ul className="m-0 grid list-none gap-1.5 p-0 text-[15px] leading-[1.6] text-[rgba(246,236,220,0.78)]">
                <li>Carrer de la Mar, 5</li>
                <li>17772 Ordis, Girona</li>
                <li><a href="mailto:info@canjoanemporda.com" className="text-[rgba(246,236,220,0.78)] no-underline hover:text-[#c9a87a]">info@canjoanemporda.com</a></li>
              </ul>
            </div>
          </div>
          <div className={`${mono.className} flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(246,236,220,0.18)] pt-[22px] text-[10px] tracking-[0.16em] text-[rgba(246,236,220,0.5)] uppercase`}>
            <span>© 2026 Can Joan Empordà</span>
            <span className="inline-flex items-baseline gap-1.5">
              <span data-i18n="footer.credit">Dissenyat per</span>{" "}
              <a className={`${instrument.className} border-b border-[rgba(246,236,220,0.28)] pb-px text-[17px] leading-none font-normal tracking-[0.01em] text-[rgba(246,236,220,0.75)] normal-case no-underline transition-colors hover:border-[rgba(246,236,220,0.6)] hover:text-[#faf2e4]`} href="https://triola.me" target="_blank" rel="noopener">
                Isaac Triola.
              </a>
            </span>
          </div>
        </footer>

        <a href="/reserva" className={`${mono.className} fixed bottom-6 left-1/2 z-[150] -translate-x-1/2 bg-[#1c1815] px-8 py-3.5 text-xs tracking-[0.18em] text-[#faf2e4] uppercase no-underline shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:bg-[#b1583a] min-[980px]:hidden`} data-i18n="book">
          Reservar
        </a>
      </div>
    </>
  );
}
