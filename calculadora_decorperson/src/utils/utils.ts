import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const formatPrintDate = (date: Date) => {
  return format(date, "dd-MM-yyyy", {
    locale: ptBR,
  });
};


export const formatDateMonth = (date: Date) => {
  return format(date, "MMM/yyyy", {
    locale: ptBR,
  });
};