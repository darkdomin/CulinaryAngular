import { Meal } from "src/app/meals/models/meal";
import { Level } from '../../difficulty-level/models/level';
import { Cuisine } from '../../cuisines/cuisine';
import { Time } from '../../times/model/time';

export interface Recipe {
  id: number;
  name: string;
  grammar: string;
  execution: string;
  photo: string;
  meal: string;
  cuisine: string;
  difficulty: string;
  time: string;
}
