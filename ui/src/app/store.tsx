import { configureStore } from '@reduxjs/toolkit'
import { HeaderReducer } from '../features/common/headerSlice'
import { ModalReducer } from '../features/common/modalSlice'
import { RightDrawerReducer } from '../features/common/rightDrawerSlice'
import { ThemeReducer } from '../features/theme/themeSlice'
import CompanyReducer from '../features/company/companySlice'
import UserReducer from '../features/user/userSlice'
import QueryReducer from '../features/queries/querySlice'
import SearchResultsReducer from '../features/search/results/searchResultsSlice'

const store = configureStore({
  reducer: {
    header : HeaderReducer,
    rightDrawer : RightDrawerReducer,
    modal : ModalReducer,
    theme: ThemeReducer,
    company: CompanyReducer,
    user: UserReducer,
    query: QueryReducer,
    searchResults: SearchResultsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

