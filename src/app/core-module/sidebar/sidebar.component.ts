import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenMy } from 'src/app/screen';
import { AccountService } from '../../client/_services/account.service';


@Component({
  selector: 'rl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  isSmall: boolean = false;

  constructor(private router: Router,
              private accountService: AccountService)
              {
                this.router.navigate(['/home']);
              }
  @HostListener('window:resize') async onResize() {

    if (await ScreenMy.detectScreenSize() < 768) {
      this.isSmall = true;
    } else {
      this.isSmall = false;
    }
  }

  logout() {
    this.accountService.logout();
  }
}
