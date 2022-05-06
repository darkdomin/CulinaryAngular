export interface Recipe {
  id: number;
  name: string;
  grammar: string;
  execution: string;
  photo: string;
  shortDescription: string;
  mealId: number | string;
  cuisineId: number | string;
  difficultId: number | string;
  timeId: number | string;
}
