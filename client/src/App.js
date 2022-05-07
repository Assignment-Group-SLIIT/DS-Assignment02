import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Test from './pages/test';



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
        <Routes>
          <Route path='/' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
