import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Fragment } from "react";

import Test from './pages/test';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <>
      <Router>
        <Fragment>
          <Navbar />

          <Routes>
            <Route path='/' element={<PrivateRoute />} >

              {/* <Route path='/signup' element={<Signup />} /> */}
              <Route path='/test' element={<Test />} />
            </Route>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />

          </Routes>

          <Footer />
        </Fragment>
      </Router>
    </>
  );
}

export default App;
