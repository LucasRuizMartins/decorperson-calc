import { BudgetDTO } from "../models/budget";
import { BUDGET_KEY } from "../utils/system";

export function save(budget: BudgetDTO) {
  const str = JSON.stringify(budget);
  localStorage.setItem(BUDGET_KEY, str);
}

export function get(): BudgetDTO | null {
  const dateDef = "01/01/2020";
  const str = localStorage.getItem(BUDGET_KEY) || "";

  if (!str) {
    const bud: BudgetDTO = {
      id: 1,
      monthYear: "01/01/2020",
      clientFirstName: "",
      clientName: "",
      date: new Date,
      budgetName: "",
      projectTime: 0,
      totalPrice: 100,
    };

    save(bud);
  }

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
      console.error(
        "O objeto retornado não possui uma propriedade 'id' válida."
      );
      return null;
    }
  } catch (error) {
    console.error("Erro ao fazer o parse do JSON:", error);
    return null;
  }
}
