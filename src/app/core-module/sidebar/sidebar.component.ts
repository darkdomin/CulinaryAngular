import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../client/_services/account.service';

@Component({
  selector: 'rl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {


  constructor(private router: Router,
              private accountService: AccountService
              ) { }

  goToRecipes(){
    this.router.navigate(['/recipes']);
    this.router.isActive;
  }

  logout() {
    this.accountService.logout();
  }
}
