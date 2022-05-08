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
import Landingpage from "./pages/landingpage";
import NotFound from "./pages/notFound";

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
          <Route path='*' element={<NotFound />} />
          {/* <Route path='*' element={<Test />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
