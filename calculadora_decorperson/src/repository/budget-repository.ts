import { BudgetDTO } from "../models/budget";
import { BUDGET_KEY } from "../utils/system";

export function save(budget: BudgetDTO) {
  const str = JSON.stringify(budget);
  localStorage.setItem(BUDGET_KEY, str);
}

export function get(): BudgetDTO {
  const bud: BudgetDTO = {
    id: 1,
    monthYear: "01/01/2020",
    clientFirstName: "",
    clientName: "",
    date: new Date(),
    budgetName: "",
    projectTime: 0,
    totalPrice: 100,
  };

  const dateDef = "01/01/2020";
  const str = localStorage.getItem(BUDGET_KEY) || "";

  if (!str) {
    save(bud);
    return bud;
  } else {
    try {
      const obj = JSON.parse(str);

      if (obj && typeof obj === "object" && "id" in obj) {
        const budget = new BudgetDTO(
          obj.id,
          obj.monthYear || "01/01/2020",
          obj.clientFirstName || "",
          obj.clientName || "",
          new Date(obj.date) || new Date(dateDef),
          obj.budgetName || "",
          obj.projectTime || "",
          obj.totalPrice || 100
        );

        return budget;
      } else {
        return bud;
      }
    } catch (error) {
      console.error("Erro ao fazer o parse do JSON:", error);
      return bud;
    }
  }
}
