import type { Metadata } from "next";
import { gutter, mono } from "@/app/fonts";
import { ContactForm } from "@/components/contact-form";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "Contacte — Can Joan Empordà",
  description: "Escriviu-nos per correu o WhatsApp. Responem el mateix dia.",
};

export default function ContactePage() {
  return (
    <SiteFrame current="contacte">
      <main>
        <section className={`grid grid-cols-1 gap-14 pt-12 pb-[120px] min-[980px]:grid-cols-2 min-[980px]:gap-20 ${gutter}`}>
          <div>
            <span className={`${mono.className} mb-[18px] block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n="ctp.eyebrow">
              Contacte
            </span>
            <h2 className="m-0 mb-7 max-w-[12ch] text-[clamp(40px,5vw,64px)] leading-[1.02] font-light tracking-[-0.02em]" data-i18n="ctp.h1">
              Contacte.
              <br />
              Reserveu la vostra estada.
            </h2>
            <p className="m-0 mb-8 max-w-[42ch] text-pretty text-lg leading-[1.6] text-[#3a342d]" data-i18n="ctp.lede">
              Escriviu-nos per correu o WhatsApp. Responem el mateix dia.
            </p>
            <div className="grid gap-[22px] border-t border-[#d9c9ac] pt-6">
              <div className="grid grid-cols-1 items-baseline gap-1.5 min-[561px]:grid-cols-[140px_1fr] min-[561px]:gap-5">
                <b className={`${mono.className} text-[10px] font-normal tracking-[0.18em] text-[#6b6258] uppercase`} data-i18n="ctp.correu">
                  Correu
                </b>
                <a className="text-lg break-words text-[#1c1815] no-underline hover:text-[#b1583a]" href="mailto:info@canjoanemporda.com">
                  info@canjoanemporda.com
                </a>
              </div>
              <div className="grid grid-cols-1 items-baseline gap-1.5 min-[561px]:grid-cols-[140px_1fr] min-[561px]:gap-5">
                <b className={`${mono.className} text-[10px] font-normal tracking-[0.18em] text-[#6b6258] uppercase`} data-i18n="ctp.tel">
                  Tel · WhatsApp
                </b>
                <a className="text-lg text-[#1c1815] no-underline hover:text-[#b1583a]" href="tel:+34629324396">
                  +34 629 324 396
                </a>
              </div>
              <div className="grid grid-cols-1 items-baseline gap-1.5 min-[561px]:grid-cols-[140px_1fr] min-[561px]:gap-5">
                <b className={`${mono.className} text-[10px] font-normal tracking-[0.18em] text-[#6b6258] uppercase`} data-i18n="ctp.adreca">
                  Adreça
                </b>
                <span className="text-lg">Carrer de la Mar, 5 · 17772 Ordis · Girona</span>
              </div>
              <div className="grid grid-cols-1 items-baseline gap-1.5 min-[561px]:grid-cols-[140px_1fr] min-[561px]:gap-5">
                <b className={`${mono.className} text-[10px] font-normal tracking-[0.18em] text-[#6b6258] uppercase`}>Instagram</b>
                <a className="text-lg text-[#1c1815] no-underline hover:text-[#b1583a]" href="https://www.instagram.com/canjoanemporda" target="_blank" rel="noreferrer">
                  @canjoanemporda
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </SiteFrame>
  );
}
