
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_PATH from '../../app/API.tsx';
import { Query } from './types.tsx';
import { RootState } from '../../app/store.tsx';
import notify, { ToastType } from '../../services/NotificationService.tsx';


interface QueryState {
    selectedQueryId: string | null;
    queries: Query[];
    isLoading: boolean;
    error: string | null;
}

const initialState: QueryState = {
    selectedQueryId: null,
    queries: [],
    isLoading: false,
    error: null,
};

interface QueryResponse {
    meta: any;
    query: Query;
    type: string;

}
interface QueryListResponse {
    meta: any;
    queries: Query[]; 
    type: string;
}

// #region Thunks: These are the async actions that will be dispatched based on the request's outcome
export const fetch_Query_ById = createAsyncThunk('query/fetchById', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Query.Get_ById}/${id}`);
        const response = await axios.get(`${API_PATH.Query.Get_ById}/${id}`);
        return response.data as QueryResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch query by ID');
    }
});

export const fetch_QueryList_ByUserId = createAsyncThunk('query/fetchAllByUserId', async (userId: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Query.GetList_ByUserId}/${userId}`);
        const response = await axios.get(`${API_PATH.Query.GetList_ByUserId}/${userId}`);
        return response.data as QueryListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch queries by user ID');
    }
});

export const create_Query = createAsyncThunk('query/create', async (queryData: Query, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Query.Post}`);
        console.dir(queryData);
        const response = await axios.post(API_PATH.Query.Post, queryData);
        return response.data as QueryResponse;
    } catch (error) {
        return rejectWithValue('Failed to create query');
    }
});

export const update_Query = createAsyncThunk('query/update', async (queryData: Query, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Query.Put}/${queryData.id}`);
        console.dir(queryData);
        const response = await axios.put(`${API_PATH.Query.Put}/${queryData.id}`, queryData);
        return response.data as QueryResponse;
    } catch (error) {
        return rejectWithValue('Failed to update query');
    }
});

export const delete_Query = createAsyncThunk('query/delete', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Query.Delete}/${id}`);
        await axios.delete(`${API_PATH.Query.Delete}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue('Failed to delete query');
    }
});
// #endregion Thunks


const setStateToLoading = (state: any): void => {
    state.isLoading = true;
    state.error = null;
};

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        // setEmail: (state, action: PayloadAction<{email: string}>) => {
        //     state.email = action.payload.email;
        // },
    },
    extraReducers: (builder) => {
        builder
            //#region Fetch By Id
            .addCase(fetch_Query_ById.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_Query_ById.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
                state.isLoading = false;
                
                const existingIndex = state.queries.findIndex(query => query.id === action.payload.query.id);
                if (existingIndex !== -1) {
                    console.log(`existingIndex: ${existingIndex}`);
                    state.queries[existingIndex] = action.payload.query;
                } else {
                    // Add the new query to the array
                    console.log("Adding new query...");
                    state.queries.unshift(action.payload.query);
                }

                state.error = null;
            })
            .addCase(fetch_Query_ById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch query';                
                notify(`Ran into an issue fetching the query. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Fetch By Id
            //#region Fetch List By User Id
            .addCase(fetch_QueryList_ByUserId.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_QueryList_ByUserId.fulfilled, (state, action: PayloadAction<QueryListResponse>) => {
                state.isLoading = false;
                state.queries = action.payload.queries;
                state.error = null;
            })
            .addCase(fetch_QueryList_ByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch queries by user ID';
                notify(`Ran into an issue fetching the query list by user id. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Fetch List By User Id
            //#region Create Query
            .addCase(create_Query.pending, (state) => { setStateToLoading(state); })
            .addCase(create_Query.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
                state.isLoading = false;                
                state.queries.unshift(action.payload.query);
                state.error = null;
            })
            .addCase(create_Query.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to create query';
                notify(`Encountered an error while trying to create this query. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Create Query
            //#region Update Query
            .addCase(update_Query.pending, (state) => { setStateToLoading(state); })
            .addCase(update_Query.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
                state.isLoading = false;             

                const updatedQuery = action.payload.query;
                const existingQuery = state.queries.find(query => query.id === updatedQuery.id);
                if (existingQuery) {
                    Object.assign(existingQuery, updatedQuery);
                }

                state.error = null;
            })
            .addCase(update_Query.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to update query';
                
                notify(`Query was not updated. Ran into an issue updating this query. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Update Query
            //#region Delete Query
            .addCase(delete_Query.pending, (state) => { setStateToLoading(state); })
            .addCase(delete_Query.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.queries = state.queries.filter(query => query.id !== action.payload);
                //TODO: Log the query out that was deleted
                state.error = null;
            })
            .addCase(delete_Query.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to delete query';
                
                notify(`Query was not deleted. Ran into an issue deleting the query. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Delete Query
            ;

    },

});

const QueryReducer = querySlice.reducer
export default QueryReducer;

export const selectQueryId = (state: RootState) => state.query.selectedQueryId;
export const selectQueryList = (state: RootState) => state.query.queries;
export const selectQueryListByUserId = (state: RootState, userId: string) => state.query.queries.filter((query: Query) => query.userId === userId);
export const selectQueryListByQueryId = (state: RootState, companyId: string) => state.query.queries?.filter((query: Query) => query.myCompanyId === companyId) ?? [];
export const selectQueryById = (state: RootState, id: string) => state.query.queries.find((query: Query) => query.id === id);
export const selectQueryName = (state: RootState, name: string) => state.query.queries.find(query => query.name === name);
export const selectQueryLoading = (state: RootState) => state?.query?.isLoading ?? false;
export const selectQueryError = (state: RootState) => state.query.error;
