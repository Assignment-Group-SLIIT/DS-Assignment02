import { Fragment } from "react";
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
import Landingpage from "./pages/landingpage";
import NotFound from "./pages/notFound";
import ForgetPassword from "./pages/forgetPassword";
import AdminSignup from "./pages/HotelAdmin/AdminSignup"
import UserProfile from "./pages/userProfile";
import ViewHotel from "./pages/viewHotel";
import AddAdminReservation from "./pages/HotelAdmin/addReservationAdmin";
import AddTaxiReservation from "./pages/addTaxi";


function App() {

  return (
    <>
      <Router>
        <Fragment>
          <Navbar />

          <Routes>


            <Route path='/' element={<PrivateRoute />} >


              <Route path="/addreservation" element={<Addreservation />} />
              <Route path='/viewRooms' element={<HotelRooms />} />

              <Route path='/adminSignup' element={<AdminSignup />} />
              <Route path='/userProfile' element={<UserProfile />} />

              <Route path='/addReservation-admin' element={<AddAdminReservation />} />
              <Route path='/addTaxi' element={<AddTaxiReservation />} />

            </Route>

            <Route path='/home' element={<Landingpage />} />
            <Route path='/viewHotel' element={<ViewHotel />} />

            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
          <Footer />

        </Fragment>

      </Router>
    </>
  );
}

export default App;
