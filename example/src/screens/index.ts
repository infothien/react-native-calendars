import {Navigation} from 'react-native-navigation';

import MenuScreen from './menuScreen';
import CalendarsScreen from './calendarScreen';
import AgendaScreen from './agendaScreen';
import CalendarsList from './calendarsList';
import HorizontalCalendarList from './horizontalCalendarList';
import ExpandableCalendar from './expandableCalendar';
import TimelineCalendar from './timelineCalendarScreen';

export function registerScreens() {
  Navigation.registerComponent('Menu', () => MenuScreen);
  Navigation.registerComponent('Calendars', () => CalendarsScreen);
  Navigation.registerComponent('Agenda', () => AgendaScreen);
  Navigation.registerComponent('CalendarsList', () => CalendarsList);
  Navigation.registerComponent('HorizontalCalendarList', () => HorizontalCalendarList);
  Navigation.registerComponent('ExpandableCalendar', () => ExpandableCalendar);
  Navigation.registerComponent('TimelineCalendar', () => TimelineCalendar);
}
