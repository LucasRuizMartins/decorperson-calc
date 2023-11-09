export class BudgetDTO {
     constructor(
      public id : number,
      public monthYear : string,
      public clientFirstName: string,
      public clientName: string,
      public date: Date,
      public budgetName: string,
      public projectTime: number,
      public totalPrice: number,
    ) {}

}
