import { useState } from 'react'
import CalendarView from '../../components/CalendarView'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { openRightDrawer } from '../common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../../utilities/Constants'
import { showNotification } from '../common/headerSlice'
import DUMMY_DATA from '../../utilities/dummyData'


const INITIAL_EVENTS = DUMMY_DATA.CALENDAR_INITIAL_EVENTS;

function Calendar(){

    const dispatch = useDispatch()

    const [events, setEvents] = useState(INITIAL_EVENTS)

    const addNewEvent = (date: moment.MomentInput) => {
        let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)]
        let newEventObj = { 
            title : randomEvent.title, 
            theme : randomEvent.theme, 
            startTime : moment(date).startOf('day'), 
            endTime : moment(date).endOf('day')
        }
        setEvents([...events, newEventObj])
        dispatch(showNotification({message : "New Event Added!", status : 1}))
    }

    const openDayDetail = ({filteredEvents, title}: {filteredEvents: any, title: string}) => {
        dispatch(openRightDrawer({
            header: title, bodyType: RIGHT_DRAWER_TYPES.CALENDAR_EVENTS, extraObject: { filteredEvents },
            isOpen: false
        }))
    }

    return(
        <>
           <CalendarView 
                calendarEvents={events}
                addNewEvent={addNewEvent}
                openDayDetail={openDayDetail}
           />
        </>
    )
}

export default Calendar