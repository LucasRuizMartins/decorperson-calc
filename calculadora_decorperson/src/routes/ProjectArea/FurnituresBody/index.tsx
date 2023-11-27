import "./styles.css";
import { useState, useEffect, useContext } from "react";
import * as furnitureService from "../../../services/furniture-service";
import * as budgetService from "../../../services/budget-service";
import { FurnitureCard } from "../../../components/FurnitureCard";
import { FurnitureDTO } from "../../../models/furniture";
import { SelectedFurnitureCard } from "../../../components/SelectedFurnitureCard";
import { BudgetDTO } from "../../../models/budget";
import { formatDate, formatDateMonth } from "../../../utils/utils";
import { parseISO, isValid } from "date-fns";

type QueryParams = {
  min: number;
  max: number;
};

export function FurnituresBody() {
  const [bud, setBud] = useState(budgetService.getBudget());
  const [fornitureFilter, setFurnitureFilter] = useState("");
  const [proj, setProj] = useState(furnitureService.getProj());
  const [furnitures, setfurnitures] = useState<FurnitureDTO[]>([]);
  const [formatedDate, setFormatedDate] = useState<Date>(bud?.date);

  const [formData, setFormData] = useState<BudgetDTO>({
    budgetName: "",
    clientFirstName: "",
    clientName: "",
    date: bud?.date | new Date(),
    id: 1,
    monthYear: "",
    totalPrice: 0,
    projectTime: 0,
  });

  useEffect(() => {
    setFormData({
      budgetName: bud?.budgetName || "",
      clientFirstName: bud?.clientFirstName || "",
      clientName: bud?.clientName || "",
      date: bud?.date || new Date(),
      id: bud?.id || 1,
      monthYear: bud?.monthYear || "",
      totalPrice: bud?.totalPrice || 0,
      projectTime: bud?.projectTime || 0,
    });
  }, [bud, setFormatedDate]);

  useEffect(() => {
    setfurnitures(furnitureService.findFurnitureByName(fornitureFilter));
  }, [fornitureFilter, proj]);
  useEffect(() => {
    async function saveBudgetAndUpdate() {
      await budgetService.saveBudget(formData);
    }

    saveBudgetAndUpdate();
  }, [formData]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const dateValue = event.target.value;
    const parsedDate = parseISO(dateValue);

    if (isValid(parsedDate)) {
      setFormatedDate(parsedDate);
      setFormData((formData) => ({ ...formData, date: formatedDate }));
      budgetService.saveBudget(formData);
    } else console.log("Data Invalida");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormData((formData) => ({ ...formData, date: formatedDate }));

    await budgetService.saveBudget(formData);
  }

  function handleNewProject(newProject: any) {
    setProj(newProject);
  }

  return (
    <>
      <div>
        <form className="project-input-area" onSubmit={handleSubmit}>
          <input
            type="text"
            name="clientFirstName"
            value={formData.clientFirstName}
            onChange={handleInputChange}
            placeholder="primeiro nome cliente"
          />
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            placeholder="nome cliente"
          />
          <input
            type="text"
            name="budgetName"
            value={formData.budgetName}
            onChange={handleInputChange}
            placeholder="nome orçamento"
          />
          <input
            type="text"
            name="projectTime"
            value={formData.projectTime}
            onChange={handleInputChange}
            placeholder="tempo do projeto"
          />
          <input
            type="date"
            name="date"
            value={formatDate(formatedDate)}
            onChange={handleDateChange}
            placeholder="data"
          />
          <button type="submit">Salvar</button>
        </form>

        <div className="selected-furniture-list">
          <h2>itens do projeto </h2>
          {proj.items
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
            .map((furnitures) => (
              <SelectedFurnitureCard
                key={furnitures.furnitureId}
                furniture={furnitures}
                onNewProject={handleNewProject}
              />
            ))}
        </div>
      </div>

      <div className="card-list">
        {furnitures
          .slice()
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name))
          .map((furnitures) => (
            <FurnitureCard
              key={furnitures.id}
              furniture={furnitures}
              onNewProject={handleNewProject}
            />
          ))}
      </div>
    </>
  );
}
