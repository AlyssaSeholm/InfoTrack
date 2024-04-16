import PageContent from "./PageContent"
import LeftSidebar from "./LeftSidebar"
import RightSidebar from './RightSidebar'
import 'react-notifications/lib/notifications.css';
import ModalLayout from "./ModalLayout"

function Layout(){

    return(
      <>
        { /* Left drawer - always open - nav bar */ }
        <div className="drawer  lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <PageContent/>
            <LeftSidebar />
        </div>

        { /* Right drawer - collapsible - notifications */ }
        <RightSidebar />

      {/* Modal layout container */}
        <ModalLayout />
      </>
    )
}

export default Layout