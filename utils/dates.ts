import { intlFormatDistance } from 'date-fns';

export const getBestTimeFormat = (date: Date) =>
  intlFormatDistance(date, new Date(), { locale: 'pt-br' });
  