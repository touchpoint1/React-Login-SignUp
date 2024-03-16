import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import img1 from "./image/undraw_sign_up_n6im.svg";
function App() {
  return (
    <>
  <div className="min-h-full h-screen flex items-center justify-end py-12 mr-20 sm:px-6 lg:px-8">
    <div>
       <img src={img1} alt="svg"></img>
    </div>
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
       </Routes>
     </BrowserRouter>
    </div>
  </div>
   </>
  );
}

export default App;
