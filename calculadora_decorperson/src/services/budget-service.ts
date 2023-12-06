import { BudgetDTO } from "../models/budget";
import * as budgetRepository from "../repository/budget-repository";

export function saveBudget(bud: BudgetDTO) {
  budgetRepository.save(bud);
}

export function getBudget(): BudgetDTO {
  return budgetRepository.get();
}

export function addBudget(budget: BudgetDTO) {
  const bud = budgetRepository.get();
  
  if (!bud) {
    const newBudget = new BudgetDTO(
      budget.id,
      budget.monthYear,
      budget.clientFirstName,
      budget.clientName,
      budget.date,
      budget.budgetName,
      budget.projectTime,
      budget.totalPrice
    );

    budgetRepository.save(newBudget);
  }
}
