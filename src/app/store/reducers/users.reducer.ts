import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { LoadUsers, LoadUsersError, LoadUsersSuccess } from '../actions/users.actions';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
};

export const initialState: UsersState = {
     users : [],
     loaded :false,
     loading:false,
     error: null   
};

export const _usersReducer = createReducer(
    initialState,
    on(LoadUsers, (state: any) => ({...state,loading:true})),
    on(LoadUsersSuccess, (state, { users })=>(
        {
            ...state,
            loading:false,
            loaded:true,
            users: [...users]
        })),
    on(LoadUsersError, (state, { payload}) => ({
            ...state,
            loading:false,
            loaded:true,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
    }))
);

export function usersReducer(state: UsersState | undefined, action: Action){
    return _usersReducer(state, action);
}