import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'rl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,
              private accountService: AccountService) { }

  ngOnInit(): void {
  }

  goToRecipes(){
    this.router.navigate(['/recipes']);
    this.router.isActive;
  }

  logout() {
    this.accountService.logout();
  }
}
