import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import Corporation from './pages/corporation/Corporation';
import Business from './pages/bussiness/Business';
import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.CORPORATION} element={<Corporation />} />
          <Route path={ROUTES.BUSINESS} element={<Business />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
