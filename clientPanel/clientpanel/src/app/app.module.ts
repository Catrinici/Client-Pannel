import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ClientService } from './services/client.service';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DashboardComponent,
		ClientsComponent,
		SidebarComponent,
		AddClientComponent,
		EditClientComponent,
		ClientDetailComponent,
		LoginComponent,
		RegisterComponent,
		SettingsComponent,
		NotFoundComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
		AngularFirestoreModule,
		AngularFireAuthModule,
		FlashMessagesModule.forRoot()
	],
	providers: [
		ClientService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
