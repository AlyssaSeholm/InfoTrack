import { FilteredEvent } from "../../components/CalendarView"
import UTIL from "../../components/CalendarView/util"

//TODO: Remove hardcoded theme colors, use theme colors from the theme slice
const THEME_BG: { [key: string]: string } = UTIL.CALENDAR_EVENT_STYLE

function CalendarEventsBodyRightDrawer({filteredEvents}: {filteredEvents: FilteredEvent[]}) {
    return (
        <>
            {
                filteredEvents.map((e, k) => {  return <div key={k} className={`grid mt-3 card  rounded-box p-3 ${THEME_BG[e.theme] || ""}` }>
                    {e.title}
                </div> })
            }
        </>
    )
}

export default CalendarEventsBodyRightDrawer