import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(): boolean {

        // if (Parse.User.current() && Parse.User.current().get('emailVerified') == true) {
            return true;
        // } else {
        //    this.router.navigate(['/login']);
        //    return false;
        // }
    }
}
