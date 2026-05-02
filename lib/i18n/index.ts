import { useRouter } from 'next/router';
import { ptBR as dfPtBR, enUS as dfEnUS } from 'date-fns/locale';
import type { Locale as DateFnsLocale } from 'date-fns';
import ptBRMessages from './messages/pt-BR';
import enUSMessages from './messages/en-US';
import { Locale, DEFAULT_LOCALE } from './locales';
import type { Messages } from './messages-type';

export function getMessages(locale: Locale): Messages {
  switch (locale) {
    case Locale.EN_US:
      return enUSMessages;
    case Locale.PT_BR:
    default:
      return ptBRMessages;
  }
}

export function getDateFnsLocale(locale: Locale): DateFnsLocale {
  return locale === Locale.EN_US ? dfEnUS : dfPtBR;
}

export function useActiveLocale(): Locale {
  const { locale } = useRouter();
  return (locale as Locale) ?? DEFAULT_LOCALE;
}

export function useDateFnsLocale(): DateFnsLocale {
  return getDateFnsLocale(useActiveLocale());
}
