import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "./types";
import { it } from "./it";
import { en } from "./en";
import { de } from "./de";

export const CONTENT: Record<Locale, SiteContent> = { it, en, de };
