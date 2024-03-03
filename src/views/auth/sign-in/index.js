import { IllustrationLayout } from "views/auth/components";

import imgUrl from "assets/svg/sign_in.svg";
import { Button } from "components";
import { NavLink } from "react-router-dom";
import routes from "routes";

const Signin = () => {
  return (
    <IllustrationLayout imageUrl={imgUrl}>
      {" "}
      <div className="flex min-h-screen w-screen lg:w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <h2 className="mt-4">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="POST">
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
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
                Sign in
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Not a member?{" "}
            <NavLink
              to={`/auth/${routes[2].path}`}
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Get started
            </NavLink>
          </p>
        </div>
      </div>
    </IllustrationLayout>
  );
};

export default Signin;
