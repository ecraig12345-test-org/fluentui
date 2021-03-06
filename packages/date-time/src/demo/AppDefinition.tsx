// tslint:disable:no-any
import { IAppDefinition } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/Calendar/CalendarPage').CalendarPage,
          key: 'Calendar',
          name: 'Calendar',
          url: '#/examples/calendar',
        },
        {
          component: require<any>('../components/DatePicker/DatePickerPage').DatePickerPage,
          key: 'DatePicker',
          name: 'DatePicker',
          url: '#/examples/datepicker',
        },
        {
          component: require<any>('../components/WeeklyDayPicker/WeeklyDayPickerPage').WeeklyDayPickerPage,
          key: 'WeeklyDayPicker',
          name: 'WeeklyDayPicker',
          url: '#/examples/weeklydaypicker',
        },
      ],
    },
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/',
    },
    {
      name: 'Fabric',
      url: 'https://dev.microsoft.com/fabric',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/microsoft/fluentui',
    },
  ],
};
