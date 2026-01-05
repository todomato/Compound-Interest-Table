export interface CalculationParams {
  principal: number;
}

export interface TableData {
  year: number;
  rates: { [key: number]: number }; // Maps rate percentage to calculated value
}
