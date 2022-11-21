import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import FullCalendar, {
  DateSelectArg,
  EventApi,
  formatDate,
} from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useState } from 'react'

export const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])

  console.log(currentEvents.map((event) => event.startStr))

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selected.view && selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected: {
    event: { title: unknown; remove: () => void }
  }) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box sx={{ color: 'white' }} m="20px">
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          sx={{
            flex: '1 1 20%',
            p: '15px',
            borderRadius: '4px',
            backgroundColor: '#1F2A40',
          }}
        >
          <Typography color="white" variant="subtitle1">
            Events
          </Typography>
          <List>
            {currentEvents.map((event: EventApi) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: '#4CCEAC',
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {event.start &&
                        formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={(arg) => handleDateClick(arg)}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2022-09-14',
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2022-09-29',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
