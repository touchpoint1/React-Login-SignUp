import { Routes, Route } from "react-router-dom";
import LoginCont from "./components/LoginCont";
import SignupCont from "./components/SignupCont";
import SvgCom from "./components/SvgCom";

export default function App() {
  return (
    <div className=" bg-gray-200 ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
          <SvgCom />
        </div>
        <Routes>
          <Route path="LoginCont" element={<LoginCont />}></Route>
          <Route path="SignupCont" element={<SignupCont />}></Route>
        </Routes>
      </div>
    </div>
  );
}
