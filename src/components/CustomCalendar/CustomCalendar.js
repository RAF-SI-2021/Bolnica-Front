import React from "react";
import Kalend, { CalendarView } from 'kalend';
import Date  from "react";
import 'kalend/dist/styles/index.css';

const CustomCalendar = () => {

    const events = [
        {
            id: 1,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
            calendarID: 'work'
        },
        {
            id: 2,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
        }
    ]

    function onNewEventClick() {

    }

    function onEventClick() {

    }

    return(
        <div>
            <Kalend
                onEventClick={onEventClick}
                onNewEventClick={onNewEventClick}
                events={events}
                initialDate={'2019-11-21T18:00:00.000Z'}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                disabledViews={[CalendarView.DAY]}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'en'}
            />
        </div>
    )
}

export default CustomCalendar;