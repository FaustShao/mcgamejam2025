import LocalFont from "@next/font/local";

const ticketUrl =
  "https://www.eventbrite.ca/e/mcgame-jam-2025-tickets-1036465424987?aff=oddtdtcreator";
import { Cinzel, Alegreya, Inter } from "@next/font/google";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const alegreyaFont = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const chomskyFont = LocalFont({
  src: "../../../public/fonts/chomsky/Chomsky.otf",
});

export type Language = "en-US" | "fr-FR";

export interface LanguageProps {
  language: Language;
}

export { ticketUrl, cinzelFont, alegreyaFont, interFont, chomskyFont };
