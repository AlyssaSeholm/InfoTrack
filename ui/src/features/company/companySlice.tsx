
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_PATH from '../../app/API.tsx';
import { Company } from './types.tsx';
import { RootState } from '../../app/store.tsx';
import exp from 'constants';


interface CompanyState {
    selectedCompanyId: string | null;
    selectedCompany: Company | null;
    companies: Company[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CompanyState = {
    selectedCompanyId: null,
    selectedCompany: null,
    companies: [],
    isLoading: false,
    error: null,
};

interface CompanyResponse {
    meta: any;
    company: Company;
    type: string;
}
interface CompanyListResponse {
    meta: any;
    companies: Company[];
    type: string;
}


// #region Thunks: These are the async actions that will be dispatched based on the request's outcome
export const fetch_Company_ById = createAsyncThunk('company/fetchById', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.Get_ById}/${id}`);
        const response = await axios.get(`${API_PATH.Company.Get_ById}/${id}`);
        return response.data as CompanyResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch company by ID');
    }
});

export const fetch_Company_ByName = createAsyncThunk('company/fetchByName', async (name: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.Get_ByName}/${name}`);
        const response = await axios.get(`${API_PATH.Company.Get_ByName}/${name}`);
        return response.data as CompanyResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch company by name');
    }
});

export const fetch_CompanyList_ByUserId = createAsyncThunk('company/fetchAllByUserId', async (userId: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.GetList_ByUserId}/${userId}`);
        const response = await axios.get(`${API_PATH.Company.GetList_ByUserId}/${userId}`);
        return response.data as CompanyListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch companies by user ID');
    }
});

export const fetch_CompanyList_All = createAsyncThunk('company/fetchAll', async (_, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.GetAll}`);
        const response = await axios.get(API_PATH.Company.GetAll);
        return response.data as CompanyListResponse;
    } catch (error) {
        return rejectWithValue('Failed to fetch all companies');
    }
});

export const create_Company = createAsyncThunk('company/create', async (companyData: Company, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.Post}`);
        console.dir(companyData);
        const response = await axios.post(API_PATH.Company.Post, companyData);
        return response.data as CompanyResponse;
    } catch (error) {
        return rejectWithValue('Failed to create company');
    }
});

export const update_Company = createAsyncThunk('company/update', async (companyData: Company, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.Put}/${companyData.id}`);
        console.dir(companyData);
        const response = await axios.put(`${API_PATH.Company.Put}/${companyData.id}`, companyData);
        return response.data as CompanyResponse;
    } catch (error) {
        return rejectWithValue('Failed to update company');
    }
});

export const delete_Company = createAsyncThunk('company/delete', async (id: string, { rejectWithValue }) => {
    try {
        console.log(`${API_PATH.Company.Delete}/${id}`);
        await axios.delete(`${API_PATH.Company.Delete}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue('Failed to delete company');
    }
});
// #endregion Thunks


const setStateToLoading = (state: any): void => {
    state.isLoading = true;
    state.error = null;
};

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setSelectedCompanyId: (state, action: PayloadAction<string>) => {
            state.selectedCompanyId = action.payload;
            state.selectedCompany = state.companies.find(company => company.id === action.payload) || null;
        },
    },
    extraReducers: (builder) => {
        builder
            //#region Fetch By Id
            .addCase(fetch_Company_ById.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_Company_ById.fulfilled, (state, action: PayloadAction<CompanyResponse>) => {
                state.isLoading = false;

                const existingIndex = state.companies.findIndex(company => company.id === action.payload.company.id);
                if (existingIndex !== -1) {
                    console.log(`existingIndex: ${existingIndex}`);
                    state.companies[existingIndex] = action.payload.company;
                } else {
                    // Add the new company to the array
                    console.log("Adding new company...");
                    state.companies.unshift(action.payload.company);
                }

                state.error = null;
            })
            .addCase(fetch_Company_ById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch company';
            })
            //#endregion Fetch By Id
            //#region Fetch By Name
            .addCase(fetch_Company_ByName.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_Company_ByName.fulfilled, (state, action: PayloadAction<CompanyResponse>) => {
                state.isLoading = false;

                const existingIndex = state.companies.findIndex(company => company.id === action.payload.company.id);

                if (existingIndex !== -1) {
                    console.log(`existingIndex: ${existingIndex}`);
                    state.companies[existingIndex] = action.payload.company;
                } else {
                    // Add the new company to the array
                    console.log("Adding new company...");
                    state.companies.unshift(action.payload.company);
                }

                state.error = null;
            })
            .addCase(fetch_Company_ByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch companies';
            })
            //#endregion Fetch By Name
            //#region Fetch List By User Id
            .addCase(fetch_CompanyList_ByUserId.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_CompanyList_ByUserId.fulfilled, (state, action: PayloadAction<CompanyListResponse>) => {
                state.isLoading = false;
                state.companies = action.payload.companies;
                state.selectedCompany = state.companies.find(company => company.primaryCompanyId === null && company.relationshipType === 'Primary') || null;
                state.selectedCompanyId = state.selectedCompany?.id || null;
                state.error = null;
            })
            .addCase(fetch_CompanyList_ByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch companies';
            })
            //#endregion Fetch List By User Id
            //#region Fetch All
            .addCase(fetch_CompanyList_All.pending, (state) => { setStateToLoading(state); })
            .addCase(fetch_CompanyList_All.fulfilled, (state, action: PayloadAction<CompanyListResponse>) => {
                state.isLoading = false;
                state.companies = action.payload.companies;
                state.error = null;
            })
            .addCase(fetch_CompanyList_All.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch companies';
            })
            //#endregion Fetch All
            //#region Create Company
            .addCase(create_Company.pending, (state) => { setStateToLoading(state); })
            .addCase(create_Company.fulfilled, (state, action: PayloadAction<CompanyResponse>) => {
                state.isLoading = false;
                state.companies.unshift(action.payload.company);
                state.error = null;
            })
            .addCase(create_Company.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to create company';
            })
            //#endregion Create Company
            //#region Update Company
            .addCase(update_Company.pending, (state) => { setStateToLoading(state); })
            .addCase(update_Company.fulfilled, (state, action: PayloadAction<CompanyResponse>) => {
                state.isLoading = false;
                const updatedCompany = action.payload.company;
                const existingCompany = state.companies.find(company => company.id === updatedCompany.id);
                if (existingCompany) {
                    Object.assign(existingCompany, updatedCompany);
                }
                state.error = null;
            })
            .addCase(update_Company.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to update company';
            })
            //#endregion Update Company
            //#region Delete Company
            .addCase(delete_Company.pending, (state) => { setStateToLoading(state); })
            .addCase(delete_Company.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.companies = state.companies.filter(company => company.id !== action.payload);
                state.error = null;
            })
            .addCase(delete_Company.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to delete company';
            })
            //#endregion Delete Company
            ;

    },

});

export const selectCompanies = (state: RootState) => state.company.companies;
export const selectCompanyById = (state: RootState, id: string) => state.company.companies.find(company => company.id === id);
export const selectCompanyByName = (state: RootState, name: string) => state.company.companies.find(company => company.name === name);
export const selectCompanyLoading = (state: RootState) => state?.company?.isLoading ?? false;
export const selectCompanyError = (state: RootState) => state.company.error;
export const selectSelectedCompany = (state: RootState) => state.company.selectedCompany;
export const selectSelectedCompanyId = (state: RootState) => state.company.selectedCompanyId;

// export default companySlice.reducer;
const CompanyReducer = companySlice.reducer
export default CompanyReducer;


