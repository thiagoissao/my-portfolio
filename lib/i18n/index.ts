import ptBRMessages from './messages/pt-BR';
import enUSMessages from './messages/en-US';
import { Locale } from './locales';
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
