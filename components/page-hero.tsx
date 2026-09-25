import type { ReactNode } from "react";
import { gutter, mono } from "@/app/fonts";

export function PageHero({
  eyebrow,
  eyebrowI18n,
  titleI18n,
  lede,
  ledeI18n,
  children,
}: {
  eyebrow: string;
  eyebrowI18n: string;
  titleI18n: string;
  lede: string;
  ledeI18n: string;
  children: ReactNode;
}) {
  return (
    <section className={`grid grid-cols-1 items-end gap-6 pt-14 pb-8 min-[920px]:grid-cols-[5fr_7fr] min-[920px]:gap-14 ${gutter}`}>
      <div>
        <span className={`${mono.className} mb-[18px] block text-xs tracking-[0.18em] text-[#3a342d] uppercase`} data-i18n={eyebrowI18n}>
          {eyebrow}
        </span>
        <h1 className="m-0 text-[clamp(44px,6vw,84px)] leading-none font-light tracking-[-0.025em]" data-i18n={titleI18n}>
          {children}
        </h1>
      </div>
      <p className="m-0 max-w-[50ch] text-pretty text-lg leading-[1.55] text-[#3a342d]" data-i18n={ledeI18n}>
        {lede}
      </p>
    </section>
  );
}
