import { configureStore } from '@reduxjs/toolkit'
import { HeaderReducer } from '../features/common/headerSlice'
import { ModalReducer } from '../features/common/modalSlice'
import { RightDrawerReducer } from '../features/common/rightDrawerSlice'
import { ThemeReducer } from '../features/theme/themeSlice'

const store = configureStore({
  reducer: {
    header : HeaderReducer,
    rightDrawer : RightDrawerReducer,
    modal : ModalReducer,
    theme: ThemeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

