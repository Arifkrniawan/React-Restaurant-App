import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './component/layout/Layout';
import Home from './component/pages/Home';
import Bookings from './component/pages/Bookings';
import ConfirmedBooking from './component/pages/Bookings/ConfirmedBooking';
import Loading from './component/pages/Loading';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<Loading />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<Loading />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<Loading />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<Loading />} 
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
