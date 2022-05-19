import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';

import { AccountService } from '../_services';

@Component(
{
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
    user!: User;
    users!: User[];
    isDeleting: boolean = true;
    remover:boolean = false;

    constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
    }

    ngOnInit() {
        // this.accountService.getAll()
        //     .pipe(first())
        //     .subscribe(users => this.users = users);
    }

    deleteUser() {
       // this.getAll();
      //  console.log('users', this.users)
       // const user = this.users.find(x => x.id === id);
       const user = this.user;
        user!.isDeleting = true;
        this.accountService.delete(user.id!)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x=> x.id !== user.id))
    }
    // private getAll(){
    //  this.accountService.getAll().subscribe(u=>{
    //   this.users = u;
    // });
  //}

  switchRemove() {
    this.remover = !this.remover;
  }

  onRemoveUser() {
    this.deleteUser();
  }
}


// Zrobić Alert Przy usuwaniu użytkownika !!!!!!!!!!!!!!!
