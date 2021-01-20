import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import '~@fullcalendar/core/main.css'
// import '~@fullcalendar/daygrid/main.css'

export default class EventCalendar extends Component{

    render(){
        return(
            <FullCalendar

            defaultView="dayGridMonth" plugins={[dayGridPlugin]}
            />
        )
    }

}