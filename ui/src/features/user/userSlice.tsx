
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_PATH from '../../app/API.tsx';
import { User } from './types.tsx';


interface UserState {
    profile: User | null;
    email: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    profile: null,
    email: "",
    isLoading: false,
    error: null,
};

interface UserResponse {
    meta: any;
    user: User;
    type: string;

}

// #region Thunks: These are the async actions that will be dispatched based on the request's outcome
export const fetch_User_ById = createAsyncThunk('user/fetchById', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.User.Get_ById}/${id}`);
        const response = await axios.get(`${API_PATH.User.Get_ById}/${id}`);
        return response.data as UserResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch user by ID');
    }
});

export const fetch_User_ByEmail = createAsyncThunk('user/fetchByEmail', async (email: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.User.Get_ByEmail}/${email}`);
        const response = await axios.get(`${API_PATH.User.Get_ByEmail}/${email}`);
        return response.data as UserResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch user by email');
    }
});

export const create_User = createAsyncThunk('user/create', async (userData: User, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.User.Post}`);
        console.dir(userData);
        const response = await axios.post(API_PATH.User.Post, userData);
        return response.data as UserResponse;
    } catch (error) {
        return rejectWithValue('Failed to create user');
    }
});

export const update_User = createAsyncThunk('user/update', async (userData: User, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.User.Put}/${userData.id}`);
        console.dir(userData);
        const response = await axios.put(`${API_PATH.User.Put}/${userData.id}`, userData);
        return response.data as UserResponse;
    } catch (error) {
        return rejectWithValue('Failed to update user');
    }
});

export const delete_User = createAsyncThunk('user/delete', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.User.Delete}/${id}`);
        await axios.delete(`${API_PATH.User.Delete}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue('Failed to delete user');
    }
});
// #endregion Thunks


const setStateToLoading = (state: any): void => {
    state.isLoading = true;
    state.error = null;
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<{email: string}>) => {
            state.email = action.payload.email;
        },
    },
    extraReducers: (builder) => {
        builder
            //#region Fetch By Id
            .addCase(fetch_User_ById.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_User_ById.fulfilled, (state, action: PayloadAction<UserResponse>) => {
                state.isLoading = false;
                state.profile = action.payload.user;
                state.email = action.payload.user.email;
                state.error = null;
            })
            .addCase(fetch_User_ById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch user';
            })
            //#endregion Fetch By Id
            //#region Fetch By Email
            .addCase(fetch_User_ByEmail.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_User_ByEmail.fulfilled, (state, action: PayloadAction<UserResponse>) => {
                state.isLoading = false;        
                
                // action.payload.user.msg !== "taken"
                state.profile = action.payload.user;
                state.email = action.payload.user.email;
                console.log("state.profile", state.profile);
                //todo: success toast?
                //todo: login notication?
                state.error = null;
            })
            .addCase(fetch_User_ByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch user by email';
            })
            //#endregion Fetch By Email
            //#region Create User
            .addCase(create_User.pending, (state) => { setStateToLoading(state); })
            .addCase(create_User.fulfilled, (state, action: PayloadAction<UserResponse>) => {
                state.isLoading = false;                
                state.profile = action.payload.user;
                state.error = null;
            })
            .addCase(create_User.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to create user';
            })
            //#endregion Create User
            //#region Update User
            .addCase(update_User.pending, (state) => { setStateToLoading(state); })
            .addCase(update_User.fulfilled, (state, action: PayloadAction<UserResponse>) => {
                state.isLoading = false;                
                state.profile = action.payload.user;
                state.error = null;
            })
            .addCase(update_User.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to update user';
            })
            //#endregion Update User
            //#region Delete User
            .addCase(delete_User.pending, (state) => { setStateToLoading(state); })
            .addCase(delete_User.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.profile = null;
                //TODO: Log the user out that was deleted
                state.error = null;
            })
            .addCase(delete_User.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to delete user';
            })
            //#endregion Delete User
            ;

    },

});

// export default userSlice.reducer;
const UserReducer = userSlice.reducer
export default UserReducer;

export const selectUserEmail = (state: any) => state.user.email;
export const selectUserProfile = (state: any) => state.user.profile;
export const selectUserLoading = (state: any) => state.user.isLoading;
export const selectUserError = (state: any) => state.user.error;
export const selectUser = (state: any) => state.user;
export const hasUserProfile = (state: any) => state.user.profile !== null;
