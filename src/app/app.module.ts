import { FleetService } from './services/fleet.service';
import { ReservationService } from './services/reservation.service';
import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FleetComponent } from './fleet/fleet.component';
import { FaqComponent } from './faq/faq.component';
import { MembershipComponent } from './membership/membership.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FullCalendarModule } from './../../node_modules/ng-fullcalendar'
import { DynamicFormComponent } from './components/dynamic-form-group/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupAddressComponent } from './auth/signup/forms/signup-address.component';
import { SignupPersonalComponent } from './auth/signup/forms/signup-personal.component';
import { SignupPhoneComponent } from './auth/signup/forms/signup-phone.component';
import { SignupSailingComponent } from './auth/signup/forms/signup-sailing.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ReservationComponent, BookingDetailDialogComponent } from './reservation/reservation.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FleetComponent,
		FaqComponent,
		AboutComponent,
		MembershipComponent,
		RulesComponent,
		ContactComponent,
		LoginComponent,
		SignupComponent,
		NavbarComponent,
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		SignupPersonalComponent,
		SignupAddressComponent,
		SignupPhoneComponent,
		SignupSailingComponent,
		VolunteerComponent,
		ReservationComponent,
		BookingDetailDialogComponent
	],
	entryComponents: [BookingDetailDialogComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
    	ReactiveFormsModule,
    	FullCalendarModule,
		MatDialogModule,
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule
	],
	providers: [
		AuthService,
		FleetService,
		ReservationService

	],
	bootstrap: [AppComponent]

})
export class AppModule { }
