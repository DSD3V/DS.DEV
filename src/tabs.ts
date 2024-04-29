import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { WorkExperience } from './components/WorkExperience';
import { Writing } from './components/Writing';

export const TABS = [
  {
    Component: Home,
    route: '/',
    title: 'DS',
  },
  {
    Component: Education,
    gifUrl: 'https://media.giphy.com/media/QA0TJwihHQnB3uIvrX/giphy.gif',
    route: '/education',
    title: 'Education',
  },
  {
    Component: WorkExperience,
    gifUrl: 'https://media.giphy.com/media/TdQwrW1uw5Sv74QGvw/giphy.gif',
    route: '/work-experience',
    title: 'Work Experience',
  },
  {
    Component: Projects,
    gifUrl: 'https://media.giphy.com/media/S8YnbSfHA2RiPLGkJg/giphy.gif',
    route: '/projects',
    title: 'Projects',
  },
  {
    Component: Writing,
    gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTI5aGEycWhuN20wdDR5bmVrZ3FwaGFzbGZoa3QxaHFreGY3bzVlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/snTS3pUIxT8eACRnvn/giphy-downsized-large.gif',
    route: '/writing',
    title: 'Writing',
  },
  {
    Component: Contact,
    gifUrl: 'https://media.giphy.com/media/cNwWYYKhg3rvYyWeUL/giphy.gif',
    route: '/contact',
    title: 'Contact',
  },
];

export const TabRouteToIndex = TABS.reduce(
  (tabRouteToIndex: { [route: string]: number }, tab, index): {} => ({
    ...tabRouteToIndex,
    [tab.route]: index,
  }),
  {}
) as {
  [key: string]: number;
};

export const TabTitleToGifUrl = TABS.slice(1).reduce(
  (tabTitleToGif: { [text: string]: string }, tab): {} => ({
    ...tabTitleToGif,
    [tab.title]: tab.gifUrl,
  }),
  {}
) as {
  [key: string]: string;
};

export const TabTitleToIndex = TABS.reduce(
  (tabTitleToIndex: { [title: string]: number }, tab, index): {} => ({
    ...tabTitleToIndex,
    [tab.title]: index,
  }),
  {}
) as {
  [key: string]: number;
};
