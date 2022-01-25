import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent implements OnInit {
  constructor(private recipeService: RecipesService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadRecipes();
  }
  recipes!: Recipe[];

  // recipesList: Recipe[] = [
  //   {
  //     id: 1,
  //     name: 'Kotlety Schabowe',
  //     grammar: `schab wieprzowy w plastrach – 4 szt
  //     zmielone płatki migdałowe – 200 g
  //     jajo – 1 szt.
  //     sól
  //     pieprz
  //     mielona wędzona papryka – 0,5 łyżeczki
  //     mielone curry – 0,5 łyżeczki
  //     mielony kmin rzymski – 0,5 łyżeczki
  //     olej kokosowy`,
  //     execution:
  //       'Kotlety rozbijamy tłuczkiem. Doprawiamy solą,' +
  //       'pieprzem i resztą przypraw. Kotlety panierujemy w jajku' +
  //       'i płatkach migdałowych. Smażymy z obu stron na złoty kolor' +
  //       'na rozgrzanym oleju kokosowym',
  //     meal: {
  //       id: 1,
  //       name: 'Obiad',
  //     },
  //     cuisine: {
  //       id: 1,
  //       name: 'polska',
  //     },
  //     difficult: {
  //       id: 1,
  //       name: 'łatwy',
  //     },
  //     time: {
  //       id: 1,
  //       name: '30 min',
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'ŚLEDŹ W BOCZKU Z PRAŻONĄ CEBULKĄ Z RODZYNKAMI',
  //     grammar: `8 małych płatów śledziowych,
  //     biały mielony pieprz,
  //     8 plastrów surowego boczku,
  //     olej do smażenia`,
  //     execution:
  //       'Śledzie myjemy, osuszamy za pomocą ręcznika papierowego,' +
  //       'oczyszczamy (sprawdzamy, czy nie mają struny grzbietowej, jeśli mają, wycinamy ją).' +
  //       'Każdy płat doprawiamy pieprzem i owijamy na całej długości plastrem boczku.' +
  //       'Wykładamy na blaszkę wyłożoną papierem do pieczenia i pieczemy' +
  //       'w piekarniku nagrzanym do 180°C około 2 minut. Następnie obsmażamy na oleju na złoty kolor.',
  //     meal: {
  //       id: 1,
  //       name: 'Obiad',
  //     },
  //     cuisine: {
  //       id: 1,
  //       name: 'włoska',
  //     },
  //     difficult: {
  //       id: 1,
  //       name: 'średnie',
  //     },
  //     time: {
  //       id: 1,
  //       name: '60 min',
  //     },
  //   },
  // ];
  // convertToBr(name: string): string {
  //   return (name = name.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  // }

  goToRecipeDetails(recipe: Recipe){
      this.router.navigate(['/recipes', recipe?.id]);
  }

  loadRecipes(): void{
    this.recipeService.getRecipes().subscribe((recipes)=>{
      this.recipes = recipes;
    })
  }
}
