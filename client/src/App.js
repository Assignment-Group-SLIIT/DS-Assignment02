import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Test from './pages/test';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Addreservation from "./pages/addReservation";

import HotelRooms from "./pages/HotelAdmin/viewHotel";
import PrivateRoute from "./utils/PrivateRoute";
import { Fragment } from "react";
import Landingpage from "./pages/landingpage";
import NotFound from "./pages/notFound";

function App() {

  return (
    <>
      <Router>
        <Fragment>
          <Navbar />

          <Routes>
            {/* <Route path='/' element={<PrivateRoute />} > */}

            {/* <Route path='/signup' element={<Signup />} /> */}

            {/* </Route> */}
            <Route path='/addreservation' element={<Addreservation />} />
            <Route path='/test' element={<Test />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/viewRooms' element={<HotelRooms />} />
            <Route path='/' element={<Landingpage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/viewRooms' element={<HotelRooms />} />
          </Routes>
          <Footer />

        </Fragment>

      </Router>
    </>
  );
}

export default App;
