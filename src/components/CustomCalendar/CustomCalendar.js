import React from "react";
import Kalend, { CalendarView } from 'kalend';
import Date  from "react";
import 'kalend/dist/styles/index.css';
import './styles.css'
import  {
    OnEventClickData,
    OnNewEventClickData,
    ShowMoreMonthData,
    OnPageChangeData,
    OnSelectViewData
} from 'kalend';

const CustomCalendar = () => {

    const events = [
        {
            id: 1,
            startAt: '2022-04-17T18:00:00.000Z',
            endAt: '2022-04-17T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: '#336cfb',
            calendarID: 'work'
        },
        {
            id: 2,
            startAt: '2022-04-16T18:00:00.000Z',
            endAt: '2022-04-16T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: '#336cfb',
        }
    ]

    function onNewEventClick(data) {
        console.log(data)
    }

    function onEventClick() {
        console.log("nesto 2")
    }

    return(

            <Kalend
                style={{
                    primaryColor: '#336cfb',
                    baseColor: '#3d3c3c',
                    inverseBaseColor: '#f2ecec',
                }}
                onEventClick={onEventClick}
                onNewEventClick={onNewEventClick}
                events={events}
                initialDate={'2019-11-21T18:00:00.000Z'}
                hourHeight={40}
                initialView={CalendarView.WEEK}
                disabledViews={[CalendarView.AGENDA, CalendarView.THREE_DAYS]}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'en'}
            />

    )
}

export default CustomCalendar;