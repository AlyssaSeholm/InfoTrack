import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    title: string
    isOpen: boolean
    bodyType: string
    size: string
    extraObject: any
}

const initialState: ModalState = {
    title: "",
    isOpen : false,
    bodyType : "",
    size : "",
    extraObject : {},
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            const {title, bodyType, extraObject, size} = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.title = title
            state.size = size || 'md'
            state.extraObject = extraObject
        },

        closeModal: (state) => {
            state.isOpen = false
            state.bodyType = ""
            state.title = ""
            state.extraObject = {}
        },

    }
})

modalSlice.getInitialState = () => initialState
export const { openModal, closeModal } = modalSlice.actions

export const ModalReducer = modalSlice.reducer