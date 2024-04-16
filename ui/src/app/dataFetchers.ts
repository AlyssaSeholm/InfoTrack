import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { fetch_CompanyList_ByUserId } from '../features/company/companySlice';
import { fetch_QueryList_ByUserId } from '../features/queries/querySlice';
import { fetch_User_ByEmail, selectUserId } from '../features/user/userSlice';
import { fetch_SearchList_ByUserId } from '../features/search/results/searchResultsSlice';

export const fetchInitialData = createAsyncThunk(
  'data/fetchInitial',
  async (_, { dispatch, getState }) => {
    
    //#DevNote: This is not ideally how I'd handle situations where the user is not logged in, but it's a quick way to get the data I need for now.

    const userId = selectUserId(getState());
    if (!userId) { //TODO: Change this to check if user is logged in
        const actionResult = await dispatch(fetch_User_ByEmail('Lys.Seholm@gmail.com'));
        const result = unwrapResult(actionResult);
        console.log('User:', result.user);

        const companyResults = await dispatch(fetch_CompanyList_ByUserId(result.user.id));
        const companyResultsUnwrapped = unwrapResult(companyResults);
        console.log('Companies:', companyResultsUnwrapped);

        const queryResults = await dispatch(fetch_QueryList_ByUserId(result.user.id));
        const queryResultsUnwrapped = unwrapResult(queryResults);
        console.log('Queries:', queryResultsUnwrapped);

        const searchResults = await dispatch(fetch_SearchList_ByUserId(result.user.id));
        const searchResultsUnwrapped = unwrapResult(searchResults);
        console.log('SearchResults:', searchResultsUnwrapped);
    } else {
        const companyResults = await dispatch(fetch_CompanyList_ByUserId(userId));
        const companyResultsUnwrapped = unwrapResult(companyResults);
        console.log('Companies (had userId):', companyResultsUnwrapped);

        const queryResults = await dispatch(fetch_QueryList_ByUserId(userId));
        const queryResultsUnwrapped = unwrapResult(queryResults);
        console.log('Queries (had userId):', queryResultsUnwrapped);

        const searchResults = await dispatch(fetch_SearchList_ByUserId(userId));
        const searchResultsUnwrapped = unwrapResult(searchResults);
        console.log('SearchResults (had userId):', searchResultsUnwrapped);
    }
    
    
    // Add more fetches as necessary
  }
);