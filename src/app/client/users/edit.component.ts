import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';
import { User } from '../_models';



@Component({
   templateUrl: 'edit.component.html',
   styleUrls: ['./edit.component.less']
   })
export class EditComponent implements OnInit {
    form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        this.isAddMode = !this.id;

        const passwordValidators = [Validators.minLength(6)];
        // const
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
          //  email: ['', Validators.required],
            password: ['', Validators.required],
            newPassword: ['', passwordValidators],
            confirmPassword: ['']
        });

        if (!this.isAddMode) {
            this.accountService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

     onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
        } else {
            this.checkPasswords();
        }
    }

    private updateUser() {
        this.accountService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
            console.log("ID", this.id)
     }

     checkPasswords(){
       if(this.getLogin() == "CulinaryTest"){
        this.alertService.error(`This user has forbiden access!`)
        this.loading = false;
       }
       else if(this.f['newPassword'].value != this.f['confirmPassword'].value ){
          this.alertService.error("New password and Confirm password they disagree.")
          this.loading = false;
       }else{
        this.updateUser();
       }
     }

     getLogin(): string{
       return this.accountService.userValue.email;
     }


}
