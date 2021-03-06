import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import * as usersActions from '../actions/users.actions';


@Injectable({
    providedIn: 'root'
})
export class UsersEffects {
    constructor(private actions$: Actions,
        private userServices: UserService) {}

    loadUsers$ = createEffect(

        ()=> this.actions$.pipe(
            ofType(usersActions.LoadUsers),
            tap( data=> console.log("effect tap ", data) ),
            mergeMap(
                ()=> this.userServices.getUser()
                .pipe(
                    map( users =>usersActions.LoadUsersSuccess({ users })),
                    catchError(err=>of(usersActions.LoadUsersError({payload:err})))
                )
            )),
    )
}