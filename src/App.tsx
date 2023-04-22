import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <Router>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<PageNotFound />} path="*" />
    </Routes>
  </Router>
);
