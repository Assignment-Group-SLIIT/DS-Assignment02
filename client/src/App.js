import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Test from './pages/test';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
<<<<<<< HEAD
import HotelRooms from "./pages/HotelAdmin/viewHotel";
=======
import Landingpage from "./pages/landingpage";
import NotFound from "./pages/notFound";
>>>>>>> ef81da7ade5a4b141691cc626e18ce3449f8fadf

function App() {

  // const { isLoggedIn, user } = useSelector((state) => state.auth);

  // const SignInWrapper = ({ children, isLogged }) => {
  //   return isLogged ? <Navigate to="/loadinginformation" replace /> : children;
  // };

  // const PrivateRoute = ({ children, isLogged }) => {
  //   return isLogged ? children : <Navigate to="/signin" replace />;
  // };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
<<<<<<< HEAD

          <Route path='/viewRooms' element={<HotelRooms />} />
=======
          <Route path='*' element={<NotFound />} />
          {/* <Route path='*' element={<Test />} /> */}
>>>>>>> ef81da7ade5a4b141691cc626e18ce3449f8fadf
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
