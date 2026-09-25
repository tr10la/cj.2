import { Instrument_Serif, JetBrains_Mono, Newsreader } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const gutter = "px-5 sm:px-[clamp(20px,4vw,56px)]";
