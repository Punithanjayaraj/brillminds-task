import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  
  public Editor = ClassicEditor as unknown as {
    create(sourceElementOrData: string | HTMLElement, config?: any): Promise<any>;
  };
  loginForm: FormGroup | any;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(7)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern("'^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]$'")
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')

        ]
      ]

    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
   



    if (this.loginForm.invalid) {
      console.log("error");
      
      return;
    }

    this.authService.register(this.loginForm.value).subscribe(
      data => {
        console.log('login successful', data);
         
        console.log(this.loginForm.value)
      },
      error => {
        console.error("error", error);
        this.router.navigate(['/home']);
        this.errorMessage = error?.message

      }
    );
  }
}
