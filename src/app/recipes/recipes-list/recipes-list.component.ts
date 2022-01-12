import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe";

@Component({
  selector: "rl-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.less"],
})
export class RecipesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recipesList: Recipe[] = [
    {
      id: 1,
      name: "Kotlety Schabowe",
      grammar:
        "schab wieprzowy w plastrach – 4 szt" <br>
        +"zmielone płatki migdałowe – 200 g" <br>
        +"jajo – 1 szt." <br>
        +"sól" <br>
        +"pieprz" <br>
        +"mielona wędzona papryka – 0,5 łyżeczki" <br>
        +"mielone curry – 0,5 łyżeczki" <br>
        +"mielony kmin rzymski – 0,5 łyżeczki" <br>
        +"olej kokosowy",
      execution: "Kotlety rozbijamy tłuczkiem. Doprawiamy solą,"+
        "pieprzem i resztą przypraw. Kotlety panierujemy w jajku"+ 
        "i płatkach migdałowych. Smażymy z obu stron na złoty kolor"+ 
        "na rozgrzanym oleju kokosowym",
        meal: {
          id: 1,
          name: "Obiad"
        },
        cuisine: {
          id: 1,
          name: "polska"
        },
        Difficult: {
          id: 1,
          name: "łatwy"
        },
        time: {
          id: 1,
          name: "30 min"
        }
    },{
    id: 2,
    name: "ŚLEDŹ W BOCZKU Z PRAŻONĄ CEBULKĄ Z RODZYNKAMI",
    grammar:
      "8 małych płatów śledziowych" <br>
      +"biały mielony pieprz" <br>
      +"8 plastrów surowego boczku" <br>
      +"olej do smażenia",
    execution: "Śledzie myjemy, osuszamy za pomocą ręcznika papierowego,"+ 
      "oczyszczamy (sprawdzamy, czy nie mają struny grzbietowej, jeśli mają, wycinamy ją)."+
      "Każdy płat doprawiamy pieprzem i owijamy na całej długości plastrem boczku."+
      "Wykładamy na blaszkę wyłożoną papierem do pieczenia i pieczemy"+
      "w piekarniku nagrzanym do 180°C około 2 minut. Następnie obsmażamy na oleju na złoty kolor.",
      meal: {
        id: 1,
        name: "Obiad"
      },
      cuisine: {
        id: 1,
        name: "włoska"
      },
      Difficult: {
        id: 1,
        name: "średnie"
      },
      time: {
        id: 1,
        name: "60 min"
      }
   }
  ];
}
