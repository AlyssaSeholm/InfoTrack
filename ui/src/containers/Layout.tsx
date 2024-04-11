import PageContent from "./PageContent"
import LeftSidebar from "./LeftSidebar"
import { useSelector, useDispatch } from 'react-redux'
import RightSidebar from './RightSidebar'
import { useEffect } from "react"
import  {  removeNotificationMessage } from "../features/common/headerSlice"
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ModalLayout from "./ModalLayout"
import { RootState } from "../app/store"

function Layout(){
    const dispatch = useDispatch()
    const {newNotificationMessage, newNotificationStatus} = useSelector((state: RootState) => state.header)
    // const newNotificationMessage = useSelector((state: RootState) => state.)

    useEffect(() => {
      if(newNotificationMessage !== ""){
        // if(newNotificationStatus === 1)NotificationManager.success(newNotificationMessage, 'Success')
        // if(newNotificationStatus === 0)NotificationManager.error( newNotificationMessage, 'Error')
        dispatch(removeNotificationMessage({
          status: 0,
          message: ""
        })) // Pass an empty object as an argument
      }
    }, [newNotificationMessage])

    return(
      <>
        { /* Left drawer - containing page content and side bar (always open) */ }
        <div className="drawer  lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <PageContent/>
            <LeftSidebar />
        </div>

        { /* Right drawer - containing secondary content like notifications list etc.. */ }
        <RightSidebar />


        {/** Notification layout container */}
        {/* <NotificationContainer /> */}

      {/* Modal layout container */}
        <ModalLayout />

      </>
    )
}

export default Layout