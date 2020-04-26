import { format } from 'date-fns';

const formatDate = (date: Date): string =>
  format(new Date(date.toString()), 'dd/MM/yyyy');

export default formatDate;
