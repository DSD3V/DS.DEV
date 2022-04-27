import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { PageNotFound } from './components/PageNotFound';
import { TABS } from './tabs';

export const App = () => (
  <Router>
    <Navbar />
    <Routes>
      {TABS.map(tab => (
        <Route
          element={<tab.Component title={tab.title} />}
          key={tab.title}
          path={tab.route}
        />
      ))}
      <Route element={<PageNotFound />} path='*' />
    </Routes>
  </Router>
);
