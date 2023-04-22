import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { WorkExperience } from './components/WorkExperience';

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
