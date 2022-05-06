import { Component } from '@angular/core';
import { User } from './client/_models';
import { AccountService } from './client/_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  user!: User ;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x!);
  }

  ngOnInit(){
    this.accountService.user.subscribe(x => this.user = x!);
  }
  logout() {
      this.accountService.logout();
  }
}
