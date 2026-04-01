import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
function Calendar() {
return(
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        // dateClick={handleDateClick}
        selectable={true}
        
      />

)
}

export default Calendar;
// To actually use it like a task system, you enable:

// Date clicking
// → user clicks a day to add a task
// Event clicking
// → user clicks a task to edit/delete it
// Dragging
// → move tasks to another day
// Selecting
// → highlight multiple days for longer tasks

// → you capture that click
// → ask for task info (like a popup)
// → add it to your event list