import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Recipe } from '../models/recipe';
import { Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ScreenMy } from 'src/app/screen';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeMyComponent extends MainRecipesComponent implements OnInit {
  favoriteRecipes!: Recipe[];
  override recipes!: Recipe[];
  override headerText: string = 'Ostatnie Przepisy';
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    navSpeed: 700,
     responsive: {
      0: {
        items: 1
      },
      495: {
        items: 2
      },
      992: {
        items: 3
      }
    }
   };



  params: Params = this.getRequestParams(
    this.page,
    this.pageSize,
    this.searchPhrase,
    this.meal,
    this.time,
    this.level,
    this.cuisine
  );

  constructor(override recipeService: RecipesService, override router: Router) {
    super(recipeService, router);

  }

  override async ngOnInit(): Promise<void> {
    this.loadRecipesHome(this.params);
    this.loadRecipesFavorite(this.params);
  }


  @ViewChild('owl',{ static: true }) owl!: CarouselComponent
  @ViewChild('container') container!: ElementRef

   @HostListener('window:resize') async onResize() {
    let anyService = this.owl as any;
    let carouselService = anyService.carouselService as CarouselService;
    let containerBootstrap = this.container.nativeElement;
    let bootstrapWidth = containerBootstrap.offsetWidth;
    let width = bootstrapWidth ;
      console.log("container ",width)
    carouselService.onResize(width);


    //await this.adjustNumberRecipes();
   }

  // private async adjustNumberRecipes(): Promise<Recipe[]> {
  //   let screenSize = await ScreenMy.detectScreenSize();
  //   return new Promise(async (resolve) => {
  //     if (screenSize > 0 && screenSize <= 480) {
  //       this.refresh();
  //     } else if (screenSize > 480 && screenSize < 776) {
  //       this.refresh();
  //     } else if (screenSize >= 776) {
  //       this.refresh();
  //     }
  //   });
  // }

  async loadRecipesHome(params: Params): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.browseHome(params).subscribe((recipes) => {
        this.totalItem = recipes.totalItemsCount;
        resolve((this.recipes = recipes.items));
      });
    });
  }

  async loadRecipesFavorite(params: Params): Promise<Recipe[]> {
    params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.meal,
      this.time,
      this.level,
      this.cuisine
    );
    return new Promise((resolve) => {
      this.recipeService.browsefavorite(params).subscribe((recipes) => {
        resolve((this.favoriteRecipes = recipes.items));
        console.log("ilosc fav ",recipes.items);
      });
    });
  }
}
