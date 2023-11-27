import { BudgetDTO } from "../models/budget";
import { ProjectDTO, ProjectItemDTO } from "../models/project";
import * as budgetRepository from "../repository/budget-repository";

export function saveBudget(bud: BudgetDTO) {
  budgetRepository.save(bud);
}

export function getBudget(): BudgetDTO | null {
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
