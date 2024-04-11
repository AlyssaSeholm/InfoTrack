import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface RightDrawerState {
    header: string
    isOpen: boolean
    bodyType: string
    extraObject: any
}

const initialState: RightDrawerState = {
    header: "",
    isOpen: false,
    bodyType: "",
    extraObject: {}
}

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState,
    reducers: {
        openRightDrawer: (state, action: PayloadAction<RightDrawerState>) => {
            const {header, bodyType, extraObject} = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.header = header
            state.extraObject = extraObject
        },

        closeRightDrawer: (state, action: PayloadAction<RightDrawerState>) => {
            state.isOpen = false
            state.bodyType = ""
            state.header = ""
            state.extraObject = {}
        },

    }
})

rightDrawerSlice.getInitialState = () => initialState
export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions


export const RightDrawerReducer = rightDrawerSlice.reducer
// export default rightDrawerSlice.reducer