import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { PageNotFound } from './components/PageNotFound';
import { TABS } from './tabs';

export const App = () => (
  <Router>
    <Navbar />
    <Routes>
      {TABS.map(({ Component, route, title }) => (
        <Route element={<Component title={title} />} key={title} path={route} />
      ))}
      <Route element={<PageNotFound />} path="*" />
    </Routes>
  </Router>
);
