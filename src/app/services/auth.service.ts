import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {
  userEmail: string = "";

  constructor(public router: Router, public auth: AngularFireAuth) {}

  githubLogin() {
    let provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // let token = result.credential.accessToken;
        // let user = result.user;
        this.userEmail = result.user.email;
        // console.log('token ' + token);
        // console.log('user ' + user.email);
        console.log(this.userEmail);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  }
}
