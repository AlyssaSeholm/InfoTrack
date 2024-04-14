import { useEffect, useState } from "react";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import moment from "moment";
import UTIL from "./util";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import '../../assets/css/modal.css';

const THEME_BG: { [key: string]: string } = UTIL.CALENDAR_EVENT_STYLE //TODO remove theme

export interface FilteredEvent {
  title: string,
  theme: string
  startTime?: string
}

function CalendarView({ calendarEvents, addNewEvent, openDayDetail }:
  { calendarEvents: any, addNewEvent: any, openDayDetail: any }
) {

  const today = moment().startOf('day')
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses: string[] = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [firstDayOfMonth, setFirstDayOfMonth] = useState(moment().startOf('month'))
  const [events, setEvents] = useState([])
  const [currMonth, setCurrMonth] = useState(() => moment(today).format("MMM-yyyy"));
  const [newEventOpen, toggleNewEventOpen] = useState(false);

  useEffect(() => {
    setEvents(calendarEvents)
  }, [calendarEvents])


  const allDaysInMonth = (): Date[] => {
    let start = moment(firstDayOfMonth).startOf('week')
    let end = moment(moment(firstDayOfMonth).endOf('month')).endOf('week')
    var days = [];
    var day = start;
    while (day <= end) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    return days
  }

  const getEventsForCurrentDate = (date: moment.MomentInput) => {
    let filteredEvents: FilteredEvent[] =
      events.filter((e: FilteredEvent) => { return moment(date).isSame(moment(e.startTime), 'day') })

    if (filteredEvents.length > 2) {
      let originalLength = filteredEvents.length
      filteredEvents = filteredEvents.slice(0, 2)
      filteredEvents.push({ title: `${originalLength - 2} more`, theme: "MORE" })
    }
    return filteredEvents
  }

  const openAllEventsDetail = (date: moment.MomentInput, theme: string) => {
    if (theme != "MORE") return 1
    let filteredEvents: FilteredEvent[] =
      events.filter((e: FilteredEvent) => { return moment(date).isSame(moment(e.startTime), 'day') })
        .map((e: FilteredEvent) => { return { title: e.title, theme: e.theme } })
    openDayDetail({ filteredEvents, title: moment(date).format("D MMM YYYY") })
  }

  const isToday = (date: moment.MomentInput) => {
    return moment(date).isSame(moment(), 'day');
  }

  const isDifferentMonth = (date: moment.MomentInput) => {
    return moment(date).month() != moment(firstDayOfMonth).month()
  }

  const getPrevMonth = (event: any) => {
    const firstDayOfPrevMonth = moment(firstDayOfMonth).add(-1, 'M').startOf('month');
    setFirstDayOfMonth(firstDayOfPrevMonth)
    setCurrMonth(moment(firstDayOfPrevMonth).format("MMM-yyyy"));
  };

  const getCurrentMonth = (event: any) => {
    const firstDayOfCurrMonth = moment().startOf('month');
    setFirstDayOfMonth(firstDayOfCurrMonth)
    setCurrMonth(moment(firstDayOfCurrMonth).format("MMM-yyyy"));
  };

  const getNextMonth = (event: any) => {
    const firstDayOfNextMonth = moment(firstDayOfMonth).add(1, 'M').startOf('month');
    setFirstDayOfMonth(firstDayOfNextMonth)
    setCurrMonth(moment(firstDayOfNextMonth).format("MMM-yyyy"));
  };

  const getDay = (day: Date | moment.MomentInput): number => {
    return +moment(day).day().toString();//return moment(date).format("D")
  }

  const openEventModal = () => {

    return (
      <Dialog open={newEventOpen} handler={toggleNewEventOpen} className="w-1/2">
        <DialogHeader>
            Add New Event
          </DialogHeader>
          <DialogBody>
            <p>Body</p>
            {/* <input type="date" /> */}
            {/* <Datepicker value={null} onChange={function (value: DateValueType, e?: HTMLInputElement | null | undefined): void {
            throw new Error("Function not implemented.");
          } }></Datepicker> */}
          </DialogBody>
          <DialogFooter>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-outline">Cancel</button>
          </DialogFooter>
      </Dialog>
    )
  }

  return (
    <>
    {openEventModal()}
      <div className="w-full bg-base-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex  justify-normal gap-2 sm:gap-4">
            <p className="font-semibold text-xl w-48">
              {moment(firstDayOfMonth).format("MMMM yyyy").toString()}<span className="text-xs ml-2 ">Beta</span>
            </p>

            <button className="btn btn-square btn-sm btn-ghost" onClick={getPrevMonth}><ChevronLeftIcon
              className="w-5 h-5"

            /></button>
            <button className="btn btn-sm btn-ghost normal-case" onClick={getCurrentMonth}>

              Current Month</button>
            <button className="btn btn-square btn-sm btn-ghost" onClick={getNextMonth}><ChevronRightIcon
              className="w-5 h-5"

            /></button>
          </div>
          <div>
            <button className="btn btn-sm btn-ghost btn-outline normal-case" onClick={() => toggleNewEventOpen(!newEventOpen)}>Add New Event</button>
          </div>

        </div>
        <div className="my-4 divider" />
        <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
          {weekdays.map((day, key) => {
            return (
              <div className="text-xs capitalize" key={key}>
                {day}
              </div>
            );
          })}
        </div>


        <div className="grid grid-cols-7 mt-1  place-items-center">
          {allDaysInMonth().map((day: Date, idx: number) => {
            return (
              <div key={idx} className={colStartClasses[getDay(day)] + " border border-solid w-full h-28  "}>
                {/* <p className={`inline-block flex items-center  justify-center h-8 w-8 rounded-full mx-1 mt-1 text-sm cursor-pointer hover:bg-base-300 ${isToday(day) && " bg-blue-100 dark:bg-blue-400 dark:hover:bg-base-300 dark:text-white"} ${isDifferentMonth(day) && " text-slate-400 dark:text-slate-600"}`} onClick={() => addNewEvent(day)}> { moment(day).format("D") }</p> */}
                <p className={`inline-block flex items-center justify-center h-8 w-8 
                      rounded-full mx-1 mt-1 text-sm cursor-pointer  
                      ${isToday(day) && ""}
                      ${isDifferentMonth(day) && ""}`
                    } 
                  onClick={() => addNewEvent(day)}
                >
                  {moment(day).format("D")}
                </p>

                {
                  getEventsForCurrentDate(day).map((e, k) => {
                    return <p key={k} onClick={() => openAllEventsDetail(day, e.theme)} className={`text-xs px-2 mt-1 truncate  ${THEME_BG[e.theme] || ""}`}>{e.title}</p>
                  })
                }
              </div>
            );
          })}
        </div>


      </div>
    </>
  )
}


export default CalendarView