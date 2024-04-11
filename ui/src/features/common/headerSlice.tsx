import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface HeaderState {
    pageTitle: string;
    noOfNotifications: number;
    newNotificationMessage: string;
    newNotificationStatus: number;
}
  
// Define a type for the item object
interface Notification {
    status: number;
    message: string;
}
  
// Initial state with types
const initialState: HeaderState = {
    pageTitle: "Home",  // current page title state management
    noOfNotifications : 15,  // no of unread notifications
    newNotificationMessage : "",  // message of notification to be shown
    newNotificationStatus : 1,   // to check the notification type -  success/ error/ info
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setPageTitle: (state, action: PayloadAction<{title: string}>) => {
            state.pageTitle = action.payload.title
        },

        removeNotificationMessage: (state, action: PayloadAction<Notification>) => {
            state.newNotificationMessage = action.payload.message;
        },

        showNotification: (state, action: PayloadAction<Notification>) => {
            state.newNotificationMessage = action.payload.message
            state.newNotificationStatus = action.payload.status
        },
    }
})

headerSlice.getInitialState = () => initialState
export const { setPageTitle, removeNotificationMessage, showNotification } = headerSlice.actions

export const HeaderReducer = headerSlice.reducer
// export default headerSlice.reducer