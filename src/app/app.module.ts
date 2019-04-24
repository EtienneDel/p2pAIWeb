import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Guard } from "@p2p/helpers/guard.helper";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "@p2p/app.routing";
import { AppComponent } from "@p2p/app.component";
import { LandingModule } from "@p2p/pages/landing/landing.module";
import { SignDialogModule } from "./components/signDialog/signDialog.module";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule,
    SignDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [Guard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
