import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { AuthContextProvider } from "./context/authContext";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import protectedRoute from './components/protectedRoute';


function App() {
  return (
    <>
      <Helmet>
          <title>Netflix</title>
          <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>


      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<protectedRoute><Account/></protectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
