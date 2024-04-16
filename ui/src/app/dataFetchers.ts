import { createAsyncThunk, unwrapResult, AsyncThunk } from '@reduxjs/toolkit';

export const fetchInitialData: AsyncThunk<void, void, {}> = createAsyncThunk(
  'data/fetchInitial',
  async (_, { dispatch, getState }) => {
    
    //#DevNote: This is not ideally how I'd handle situations where the user is not logged in, but it's a quick way to get the data I need for now.

    const userId = selectUserId(getState());
    if (typeof userId === 'undefined') { //TODO: Change this to check if user is logged in
        const actionResult = await dispatch(fetch_User_ByEmail('Lys.Seholm@gmail.com'));
        const result = unwrapResult(actionResult);
        console.log('User:', result.user);

        const companyResults = await dispatch(fetch_CompanyList_ByUserId(result.user.id));
        const companyResultsUnwrapped = unwrapResult(companyResults);
        console.log('Companies:', companyResultsUnwrapped);

        const queryResults = await dispatch(fetch_QueryList_ByUserId(result.user.id));
        const queryResultsUnwrapped = unwrapResult(queryResults);
        console.log('Queries:', queryResultsUnwrapped);

        const searchResults = await dispatch(fetch_QueryList_ByUserId(result.user.id));
        const searchResultsUnwrapped = unwrapResult(searchResults);
        console.log('SearchResults:', searchResultsUnwrapped);
    } else {
        const companyResults = await dispatch(fetch_CompanyList_ByUserId(userId));
        const companyResultsUnwrapped = unwrapResult(companyResults);
        console.log('Companies (had userId):', companyResultsUnwrapped);

        const queryResults = await dispatch(fetch_QueryList_ByUserId(userId));
        const queryResultsUnwrapped = unwrapResult(queryResults);
        console.log('Queries (had userId):', queryResultsUnwrapped);

        const searchResults = await dispatch(fetch_QueryList_ByUserId(userId));
        const searchResultsUnwrapped = unwrapResult(searchResults);
        console.log('SearchResults (had userId):', searchResultsUnwrapped);
    }
    
    
    // Add more fetches as necessary
  }
);

function selectUserId(arg0: unknown) {
  throw new Error('Function not implemented.');
}
function fetch_User_ByEmail(arg0: string): any {
  throw new Error('Function not implemented.');
}

function fetch_CompanyList_ByUserId(id: any): any {
  throw new Error('Function not implemented.');
}

function fetch_QueryList_ByUserId(id: any): any {
  throw new Error('Function not implemented.');
}

