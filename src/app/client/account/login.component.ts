import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';
import { User } from '../_models/index';

@Component(
  {
     templateUrl: 'login.component.html',
     styleUrls: ['./login.component.less']
  })
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;
  form!: FormGroup;
    loading = false;
    submitted = false;
    user: User | undefined;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['CulinaryTest', Validators.required],
            password: ['darkCulinary1', Validators.required]
        });
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
        this.accountService.login(this.f['email'].value, this.f['password'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                    this.user = this.accountService.userValue;
                    console.log("TOKEN podczas logowania" , this.user.token);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }

            });

    }

    ngAfterViewInit(): void {
      this.autofocus.nativeElement.focus();
    }
}
