import { Component } from '@angular/core';
import { User } from './_models';
import { AccountService } from './_services';

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
    console.log('User jest ', this. user);
  }
  logout() {
      this.accountService.logout();
  }
}
