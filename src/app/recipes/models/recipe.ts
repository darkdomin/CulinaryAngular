export interface Recipe {
  id: number;
  name: string;
  grammar: string;
  execution: string;
  photo: string;
  shortDescription: string;
  mealId: number;
  cuisineId: number;
  difficultId: number;
  timeId: number;
}
