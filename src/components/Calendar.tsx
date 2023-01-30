import * as React from 'react';
import Paper from '@mui/material/Paper';
import { AppointmentModel, ViewState, SchedulerDateTime } from '@devexpress/dx-react-scheduler';
import {
    Scheduler, DayView, Appointments, Resources, WeekView,
    Toolbar,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments: Array<AppointmentModel> = [{
    startDate: '2023-01-30T11:00',
    endDate: '2023-01-30T14:15',
    title: 'Meeting',
    type: 'private',
}, {
    startDate: '2023-01-30T10:30',
    endDate: '2023-01-30T11:00',
    title: 'Go to a gym',
    type: 'work',
}];
const resources = [{
    fieldName: 'type',
    title: 'Type',
    instances: [
        { id: 'private', text: 'Private', color: '#EC407A' },
        { id: 'work', text: 'Work', color: '#7E57C2' },
    ],
}];

const Calendar = () => {
    const [currentDate, setCurrentDate] = React.useState<SchedulerDateTime>('2023-01-30');

    return (
        <Paper>
            <Scheduler
                data={appointments}
            >
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}

                />
                <DayView
                    startDayHour={9}
                    endDayHour={19}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                />
                <Toolbar />
                <ViewSwitcher />
                <Appointments />
                <Resources
                    data={resources}
                />
            </Scheduler>
        </Paper>
    );
};

export default Calendar;
