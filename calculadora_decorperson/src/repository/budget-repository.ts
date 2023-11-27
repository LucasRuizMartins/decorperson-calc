import { BudgetDTO } from "../models/budget";
import { BUDGET_KEY } from "../utils/system";

export function save(budget: BudgetDTO) {
  const str = JSON.stringify(budget);
  localStorage.setItem(BUDGET_KEY, str);
}

export function get(): BudgetDTO | null {
  const str = localStorage.getItem(BUDGET_KEY);

  if (!str) {
    return null;
  }

  try {
    const obj = JSON.parse(str);

    if (obj && typeof obj === 'object' && 'id' in obj) {
      const budget = new BudgetDTO(
        obj.id,
        obj.monthYear,
        obj.clientFirstName,
        obj.clientName,
        new Date(obj.date),
        obj.budgetName,
        obj.projectTime,
        obj.totalPrice
      );

      return budget;
    } else {
      console.error("O objeto retornado não possui uma propriedade 'id' válida.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao fazer o parse do JSON:", error);
    return null;
  }
}
