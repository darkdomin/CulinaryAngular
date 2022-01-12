import { Meal } from "./meal";
import { Cuisine } from "./cuisine";
import { Difficult } from "./difficult";
import { Time } from "./time";

export interface Recipe {
  id: number;
  name: string;
  grammar: string;
  execution: string;
  meal: Meal;
  cuisine: Cuisine;
  difficult: Difficult;
  time: Time;
}
