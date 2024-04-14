
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_PATH from '../../app/API.tsx';
import { Query } from './types.tsx';
import exp from 'constants';


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
        const response = await axios.get(`${API_PATH.Company.GetList_ByUserId}/${userId}`);
        return response.data as QueryListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch companies by user ID');
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
                    // Add the new company to the array
                    console.log("Adding new company...");
                    state.queries.unshift(action.payload.query);
                }

                state.error = null;
            })
            .addCase(fetch_Query_ById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch query';
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
                state.error = action.error.message || 'Failed to fetch companies';
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
            })
            //#endregion Create Query
            //#region Update Query
            .addCase(update_Query.pending, (state) => { setStateToLoading(state); })
            .addCase(update_Query.fulfilled, (state, action: PayloadAction<QueryResponse>) => {
                state.isLoading = false;             

                const updatedCompany = action.payload.query;
                const existingCompany = state.queries.find(query => query.id === updatedCompany.id);
                if (existingCompany) {
                    Object.assign(existingCompany, updatedCompany);
                }

                state.error = null;
            })
            .addCase(update_Query.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to update query';
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
            })
            //#endregion Delete Query
            ;

    },

});

// export default querySlice.reducer;
const QueryReducer = querySlice.reducer
export default QueryReducer;

export const selectQueryId = (state: any) => state.query.selectedQueryId;
export const selectQueryList = (state: any) => state.query.queries;
export const selectQueryById = (state: any, id: string) => state.query.queries.find((query: Query) => query.id === id);
export const selectQueryName = (state: any) => state.query.name;
export const selectQueryLoading = (state: any) => state?.query?.isLoading ?? false;
export const selectQueryError = (state: any) => state.query.error;
