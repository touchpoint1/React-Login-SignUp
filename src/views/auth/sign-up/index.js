import { IllustrationLayout } from "views/auth/components";

import imgUrl from "assets/svg/sign_up.svg";
import { Button } from "components";
import { NavLink } from "react-router-dom";
import routes from "routes";

const Signup = () => {
  return (
    <IllustrationLayout imageUrl={imgUrl} signup>
      <div className="flex min-h-screen w-screen lg:w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h1 className="text-4xl font-bold">Connect with us</h1>
          <h2 className="mt-4">Create an account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="POST">
            <div className="w-full flex space-x-2">
              <div className="w-1/2">
                <label
                  htmlFor="fName"
                  className="block text-sm font-medium leading-6"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="fName"
                    name="fName"
                    type="text"
                    required
                    className="block w-full rounded-md border border-1 border-gray-300 p-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lName"
                  className="block text-sm font-medium leading-6"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="lName"
                    name="lName"
                    type="text"
                    required
                    className="block w-full rounded-md border border-1 border-gray-300 p-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-1 border-gray-300 p-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>

              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-1 border-gray-300 p-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Button variant="primary" size="md">
                Sign Up
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Have an account?{" "}
            <NavLink
              to={`/auth/${routes[1].path}`}
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </IllustrationLayout>
  );
};

export default Signup;
