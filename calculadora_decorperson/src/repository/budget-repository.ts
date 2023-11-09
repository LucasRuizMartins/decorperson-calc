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

  const obj = JSON.parse(str) as BudgetDTO;

   const budget = new BudgetDTO(
    obj.id,
    obj.monthYear,
    obj.clientFirstName,
    obj.clientName,
    new Date(obj.date), // Certifique-se de converter a string de data de volta para um objeto Date
    obj.budgetName,
    obj.projectTime,
    obj.totalPrice
  );

  return budget;
}
