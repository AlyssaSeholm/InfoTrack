import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { fetch_CompanyList_ByUserId } from '../features/company/companySlice';
import { fetch_QueryList_ByUserId } from '../features/queries/querySlice';
import { fetch_User_ByEmail, selectUserId } from '../features/user/userSlice';

export const fetchInitialData = createAsyncThunk(
  'data/fetchInitial',
  async (_, { dispatch, getState }) => {
    // Optionally check if data is already loaded or not needed to be re-fetched
    // const state: RootState = getState();
    const userId = selectUserId(getState());
    if (!userId) { //TODO: Change this to check if user is logged in
        const actionResult = await dispatch(fetch_User_ByEmail('Lys.Seholm@gmail.com'));
        const result = unwrapResult(actionResult);
        await dispatch(fetch_CompanyList_ByUserId(result.user.id));
        await dispatch(fetch_QueryList_ByUserId(result.user.id));
    } else {
        await dispatch(fetch_CompanyList_ByUserId(userId));
        await dispatch(fetch_QueryList_ByUserId(userId));
    }
    
    
    // Add more fetches as necessary
  }
);