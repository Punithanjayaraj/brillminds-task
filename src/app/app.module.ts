import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
