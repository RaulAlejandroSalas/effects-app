import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LoadUsers = createAction('[Users] Load Users');

export const LoadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[]}>());

export const LoadUsersError = createAction( '[Users] Load Users Error', props<{ payload: any }>());
