"use client";

import { useEffect, useState } from "react";
import { mono } from "@/app/fonts";

const MONTHS = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
const LABELS = ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"];

type Range = { start: string; end: string };

function iso(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function todayIso() {
  const now = new Date();
  return iso(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
}

function rate(night: string) {
  const [, monthText, dayText] = night.split("-");
  const month = Number(monthText);
  const day = Number(dayText);
  if (month === 12 && day >= 6 && day <= 8) return 350;
  if (month === 6 && day === 23) return 360;
  if (month === 8) return 390;
  if (month === 7) return 360;
  if (month === 4 || month === 5 || month === 6 || month === 9) return 340;
  return 330;
}

function isBlocked(value: string, blocked: Range[]) {
  return blocked.some((range) => value >= range.start && value < range.end);
}

function rangeHitsBlock(start: string, end: string, blocked: Range[]) {
  if (!start || !end || end <= start) return false;
  return blocked.some((range) => start < range.end && end > range.start);
}

export function StayCalendar() {
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [blocked, setBlocked] = useState<Range[]>([]);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [conflict, setConflict] = useState(false);

  useEffect(() => {
    let stop = false;
    const load = () => {
      fetch("/api/disponibilitat", { cache: "no-store" })
        .then((response) => response.json())
        .then((data: { blocked?: Range[] }) => {
          if (!stop) setBlocked(data.blocked ?? []);
        })
        .catch(() => {});
    };
    load();
    const timer = window.setInterval(load, 20000);
    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      stop = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  useEffect(() => {
    const onChange = (event: Event) => {
      const input = event.target as HTMLInputElement | null;
      if (!input) return;
      if (input.id === "checkin") setCheckin(input.value);
      if (input.id === "checkout") setCheckout(input.value);
    };
    document.addEventListener("change", onChange);
    return () => document.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const entrada = document.getElementById("checkin") as HTMLInputElement | null;
    const sortida = document.getElementById("checkout") as HTMLInputElement | null;
    if (entrada) entrada.value = checkin;
    if (sortida) sortida.value = checkout;

    const nights = document.getElementById("stay-nights");
    const total = document.getElementById("stay-total");
    if (!nights || !total) return;
    if (!checkin || !checkout || checkout <= checkin) {
      nights.textContent = "Indica les dates";
      total.textContent = "—";
      return;
    }
    const start = new Date(`${checkin}T12:00:00`);
    const end = new Date(`${checkout}T12:00:00`);
    let count = 0;
    let sum = 0;
    for (const day = new Date(start); day < end; day.setDate(day.getDate() + 1)) {
      count += 1;
      sum += rate(iso(day));
    }
    nights.textContent = `${count} ${count === 1 ? "nit" : "nits"}`;
    total.textContent = `${sum.toLocaleString("ca-ES")} €`;
  }, [checkin, checkout]);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const blanks = (new Date(year, month, 1).getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const today = todayIso();

  const pick = (value: string) => {
    if (isBlocked(value, blocked) || value < today) return;
    if (!checkin || checkout || value <= checkin) {
      setCheckin(value);
      setCheckout("");
      setConflict(false);
      return;
    }
    if (rangeHitsBlock(checkin, value, blocked)) {
      setConflict(true);
      return;
    }
    setCheckout(value);
    setConflict(false);
  };

  return (
    <div id="stay-cal" className="mt-6 border-t border-dashed border-[#d9c9ac] pt-[22px]">
      <h4 className={`${mono.className} m-0 mb-3.5 flex items-center justify-between text-[10px] font-normal tracking-[0.16em] text-[#6b6258] uppercase`}>
        <span>
          {MONTHS[month]} {year}
        </span>
        <span className="flex gap-1">
          <button type="button" aria-label="Mes anterior" className="h-[26px] w-[26px] cursor-pointer border border-[#d9c9ac] bg-transparent p-0 text-xs text-[#3a342d] hover:border-[#1c1815] hover:bg-[#1c1815] hover:text-[#faf2e4]" onClick={() => setCursor(new Date(year, month - 1, 1))}>
            ‹
          </button>
          <button type="button" aria-label="Mes següent" className="h-[26px] w-[26px] cursor-pointer border border-[#d9c9ac] bg-transparent p-0 text-xs text-[#3a342d] hover:border-[#1c1815] hover:bg-[#1c1815] hover:text-[#faf2e4]" onClick={() => setCursor(new Date(year, month + 1, 1))}>
            ›
          </button>
        </span>
      </h4>
      <div className="grid grid-cols-7 gap-1">
        {LABELS.map((label) => (
          <div key={label} className={`${mono.className} py-1.5 text-center text-[9px] tracking-[0.14em] text-[#6b6258] uppercase`}>
            {label}
          </div>
        ))}
        {Array.from({ length: blanks }, (_, index) => (
          <div key={`buit-${index}`} />
        ))}
        {Array.from({ length: days }, (_, index) => {
          const day = index + 1;
          const value = iso(new Date(year, month, day));
          const past = value < today;
          const booked = isBlocked(value, blocked);
          const selected = value === checkin || value === checkout;
          const between = Boolean(checkin && checkout && value > checkin && value < checkout);
          const className = past
            ? "cursor-not-allowed bg-transparent text-[rgba(28,24,21,0.28)]"
            : booked
              ? "cursor-not-allowed bg-[#d7c4a8] text-[#6b6258] line-through"
              : selected
                ? "cursor-pointer bg-[#1c1815] text-[#faf2e4]"
                : between
                  ? "cursor-pointer bg-[#efe1c8] text-[#1c1815]"
                  : "cursor-pointer bg-[#faf2e4] text-[#1c1815] hover:bg-[#efe1c8]";
          return (
            <button key={value} type="button" disabled={past || booked} onClick={() => pick(value)} className={`flex aspect-square items-center justify-center text-sm ${className}`}>
              {day}
            </button>
          );
        })}
      </div>
      <div className={`${mono.className} mt-3.5 flex flex-wrap gap-[18px] text-[9px] tracking-[0.14em] text-[#6b6258] uppercase`}>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#faf2e4]" />
          <span>Lliure</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#d7c4a8]" />
          <span>Reservat</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#1c1815]" />
          <span>La vostra estada</span>
        </span>
      </div>
      {conflict ? <p className="mt-3 text-sm text-[#b1583a]">Aquestes dates ja estan reservades a Booking, Airbnb o al calendari de la casa.</p> : null}
    </div>
  );
}
