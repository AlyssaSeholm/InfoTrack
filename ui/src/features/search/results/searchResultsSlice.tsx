
import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchResults } from './types';
import API_PATH from '../../../app/API';
import { RootState } from '../../../app/store';
import notify, { ToastType } from '../../../services/NotificationService';


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
    searchResults: SearchResults;
    type: string;
}
interface SearchListResponse {
    meta: any;
    searchResults: SearchResults[];
    type: string;
}

export const fetch_SearchList_ByUserId = createAsyncThunk('search/fetchAllByUserId', async (userId: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Search.GetList_ByUserId}/${userId}`);
        const response = await axios.get(`${API_PATH.Search.GetList_ByUserId}/${userId}`);
        return response.data as SearchListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch companies by user ID');
    }
});

export const create_Search = createAsyncThunk('search/create', async (queryId: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Search.Post}`);
        const request = { queryId: queryId };
        console.dir(`Search_Create QueryId:${queryId}`);
        const response = await axios.post(API_PATH.Search.Post, request);
        return response.data as SearchResults;
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
    },
    extraReducers: (builder) => {
        builder
            //#region Fetch List By User Id
            .addCase(fetch_SearchList_ByUserId.pending, (state) => setStateToLoading(state))
            .addCase(fetch_SearchList_ByUserId.fulfilled, (state, action: PayloadAction<SearchListResponse>) => {
                state.isLoading = false;

                if(!state.results) state.results = [];  

                (action.payload.searchResults as SearchResults[]).forEach((search) => {
                    if(!state.results.find((s) => s.id === search.id)) 
                        state.results.unshift(search);                
                });

                state.error = null;
            })
            .addCase(fetch_SearchList_ByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch results by user ID';
                notify(`Search results list was not retrieved. Ran into an issue getting the results list by user id. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Fetch List By User Id
            //#region Create Search
            .addCase(create_Search.pending, (state) => { setStateToLoading(state); })
            .addCase(create_Search.fulfilled, (state, action: PayloadAction<SearchResults>) => {
                state.isLoading = false;   

                if(!state.results) state.results = [];    
                
                if(!state.results.find((s) => s.id === action.payload?.id)) {
                    state.results.unshift(action.payload);
                } else {
                    console.log(`Search already exists: ${action.payload?.id}`);
                }
                
                // state.results.unshift(action.payload.searchResults); 
                state.error = null;
            })
            .addCase(create_Search.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to create search';
                notify(`Failed to execute the search. Ran into an issue getting the results list by user id. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Create Search
            //#region Delete Search
            .addCase(delete_Search.pending, (state) => { setStateToLoading(state); })
            .addCase(delete_Search.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.results = state.results.filter(search => search.id !== action.payload);
                state.error = null;
            })
            .addCase(delete_Search.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to delete search';
                notify(`The Search results were not deleted. Ran into an issue deleting the results. [ ${action.payload} ]`, ToastType.ERROR);
            })
            //#endregion Delete Search
            ;

    },

});

const SearchResultsReducer = searchSlice.reducer
export default SearchResultsReducer;

const selectSearchState = (state: RootState) => state.searchResults;

export const selectSearchResults = createSelector( [selectSearchState], (searchState) => { return searchState.results; } ) as (state: RootState) => SearchResults[];
export const selectSearchResultsByResultsId = (state: RootState, resultsId: string) => state.searchResults.results.find((results: SearchResults) => results.id === resultsId);
export const selectSearchResultsItemsByResultsId = (state: RootState, resultsId: string) => state.searchResults?.results?.find((results: SearchResults) => results.id === resultsId)?.items ?? [];
export const selectSearchResultsByQueryId = (state: RootState, queryId: string) => state.searchResults.results.find((results: SearchResults) => results.queryId === queryId);
export const selectSearchResultsItemsByQueryId = (state: RootState, queryId: string) => state.searchResults?.results?.find((results: SearchResults) => results.queryId === queryId)?.items ?? [];

export const selectSearchLoading = (state: RootState) => state?.searchResults?.isLoading ?? false;
export const selectSearchError = (state: RootState) => state.searchResults.error;
