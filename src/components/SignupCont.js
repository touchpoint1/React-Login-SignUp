import Header from "./Header";
import LabelInput from "./LabelInput";
import Button from "./Button";
import { Link } from "react-router-dom";
type Props = {};
const SignupCont = (props: Props) => {
  return (
    <form class="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <Header text="SIGN UP" />
      <div>
        <LabelInput type={"text"} title="Name" required />
      </div>
      <div>
        <LabelInput type={"email"} title="Email" required />
      </div>
      <div>
        <LabelInput type={"password"} title="Password" required />
      </div>
      <Button btnName="Register" />
      <p class="text-xl text-center text-gray-500 mt-3">
        Already registered?
        <Link className="text-emerald-400 ml-1" to="/LoginCont">
          Login Here
        </Link>
      </p>
    </form>
  );
};

export default SignupCont;
