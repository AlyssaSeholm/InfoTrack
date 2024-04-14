
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchResults } from './types';
import { Search } from 'react-router-dom';
import API_PATH from '../../../app/API';


interface SearchState {
    results: SearchResults[];
    isLoading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    results: [],
    isLoading: false,
    error: null,
};

interface SearchResponse {
    meta: any;
    results: SearchResults;
    type: string;

}
interface SearchListResponse {
    meta: any;
    results: SearchResults[];
    type: string;
}

// #region Thunks: These are the async actions that will be dispatched based on the request's outcome
// export const fetch_Search_ById = createAsyncThunk('search/fetchById', async (id: string, { rejectWithValue }) => {
//     try {
//         console.log(`${API_PATH.Search.Get_ById}/${id}`);
//         const response = await axios.get(`${API_PATH.Search.Get_ById}/${id}`);
//         return response.data as SearchResponse;
//     } catch (error) {
//         return rejectWithValue('Failed to fetch search by ID');
//     }
// });

export const fetch_SearchList_ByUserId = createAsyncThunk('search/fetchAllByUserId', async (userId: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Search.GetList_ByUserId}/${userId}`);
        const response = await axios.get(`${API_PATH.Company.GetList_ByUserId}/${userId}`);
        return response.data as SearchListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch companies by user ID');
    }
});

export const create_Search = createAsyncThunk('search/create', async (searchData: Search, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Search.Post}`);
        console.dir(searchData);
        const response = await axios.post(API_PATH.Search.Post, searchData);
        return response.data as SearchResponse;
    } catch (error) {
        return rejectWithValue('Failed to create search');
    }
});

export const delete_Search = createAsyncThunk('search/delete', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Search.Delete}/${id}`);
        await axios.delete(`${API_PATH.Search.Delete}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue('Failed to delete search');
    }
});
// #endregion Thunks


const setStateToLoading = (state: any): void => {
    state.isLoading = true;
    state.error = null;
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // setEmail: (state, action: PayloadAction<{email: string}>) => {
        //     state.email = action.payload.email;
        // },
    },
    extraReducers: (builder) => {
        builder
            //#region Fetch By Id
            // .addCase(fetch_Search_ById.pending, (state) => { setStateToLoading(state); })
            // .addCase(fetch_Search_ById.fulfilled, (state, action: PayloadAction<SearchResponse>) => {
            //     state.isLoading = false;
                
            //     const existingIndex = state.queries.findIndex(search => search.id === action.payload.search.id);
            //     if (existingIndex !== -1) {
            //         console.log(`existingIndex: ${existingIndex}`);
            //         state.queries[existingIndex] = action.payload.search;
            //     } else {
            //         // Add the new company to the array
            //         console.log("Adding new company...");
            //         state.queries.unshift(action.payload.search);
            //     }

            //     state.error = null;
            // })
            // .addCase(fetch_Search_ById.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.error.message || 'Failed to fetch search';
            // })
            //#endregion Fetch By Id
            //#region Fetch List By User Id
            .addCase(fetch_SearchList_ByUserId.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_SearchList_ByUserId.fulfilled, (state, action: PayloadAction<SearchListResponse>) => {
                state.isLoading = false;
                state.results = action.payload.results;
                state.error = null;
            })
            .addCase(fetch_SearchList_ByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch companies';
            })
            //#endregion Fetch List By User Id
            //#region Create Search
            .addCase(create_Search.pending, (state) => { setStateToLoading(state); })
            .addCase(create_Search.fulfilled, (state, action: PayloadAction<SearchResponse>) => {
                state.isLoading = false;                
                state.results.unshift(action.payload.results);
                state.error = null;
            })
            .addCase(create_Search.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to create search';
            })
            //#endregion Create Search
            //#region Delete Search
            .addCase(delete_Search.pending, (state) => { setStateToLoading(state); })
            .addCase(delete_Search.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.results = state.results.filter(search => search.id !== action.payload);
                //TODO: Log the search out that was deleted
                state.error = null;
            })
            .addCase(delete_Search.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to delete search';
            })
            //#endregion Delete Search
            ;

    },

});

// export default searchSlice.reducer;
const SearchResultsReducer = searchSlice.reducer
export default SearchResultsReducer;

export const selectSearchResults = (state: any) => state.search.results;
export const selectSearchResultsByResultsId = (state: any, resultsId: string) => state.search.results.find((results: SearchResults) => results.id === resultsId);
export const selectSearchResultsItemsByResultsId = (state: any, resultsId: string) => state.search.results.find((results: SearchResults) => results.id === resultsId).items ?? [];


export const selectSearchLoading = (state: any) => state?.search?.isLoading ?? false;
export const selectSearchError = (state: any) => state.search.error;
